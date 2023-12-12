// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { urls } from './config/urlConfig'
import { rest } from 'msw'
import { characterListMock, planetApis, planetMockData } from './mockData'

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
