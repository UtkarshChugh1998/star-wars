import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import fetchMock from 'jest-fetch-mock'
import {
  characterListMock,
  mocker2,
  planetApis,
  planetMockData
} from '../mockData'
import { urls } from '../config/urlConfig'
import { BrowserRouter } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

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
  render(<App />)
  const homePageElement = screen.getByTestId('homePage')
  expect(homePageElement).toBeInTheDocument()
})

test('renders the header component', () => {
  render(<App />)
  const headerComponent = screen.getByText(/Star Wars Wiki/i)
  expect(headerComponent).toBeInTheDocument()
})

test('renders the Character List Component', async () => {
  const mockData = { mocker2 }
  fetchMock.mockResponseOnce(JSON.stringify(mockData), {
    url: urls.getCharacterList()
  })

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  await waitFor(() => expect(screen.getAllByTestId('listitem').length).toBe(4))
})
