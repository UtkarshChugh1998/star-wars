import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import {
  characterListMock,
  mocker2,
  planetApis,
  planetMockData
} from '../mockData'
import { urls } from '../config/urlConfig'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import userEvent from '@testing-library/user-event'
import { AppRoutes } from '../components/AppRoutes'

const server = setupServer(
  rest.get(urls.getCharacterList(), (req, res, ctx) => {
    return res(ctx.json(characterListMock))
  }),
  ...planetApis.map((url) =>
    rest.get(urls.getCharacterPlanet(url), (req, res, ctx) => {
      return res(ctx.json(planetMockData))
    })
  )
)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

test('renders the Application', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const homePageElement = screen.getByTestId('homePage')
  expect(homePageElement).toBeInTheDocument()
})

test('renders the header component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const headerComponent = screen.getByText(/Star Wars Wiki/i)
  expect(headerComponent).toBeInTheDocument()
})

test('renders the Character List Component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  await waitFor(() => expect(screen.getAllByTestId('listitem').length).toBe(4))
})

test('check navigation', async () => {
  render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
  const elements = await screen.findAllByTestId('listitem')
  const user = userEvent.setup()
  await user.click(elements[0])
  await screen.findByTestId('person')
})
