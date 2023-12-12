import { render, waitFor, screen } from '@testing-library/react'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'

test('render Character Content', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  await waitFor(() => expect(screen.getAllByTestId('listitem').length).toBe(4))
  const characterNameElement = screen.getByText(/Luke Skywalker/i)
  expect(characterNameElement).toBeInTheDocument()
})
