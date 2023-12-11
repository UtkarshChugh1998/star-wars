import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Person } from './Person'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/people/:id" element={<Person />} />
    </Routes>
  )
}
