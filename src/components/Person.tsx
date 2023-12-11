import { useParams } from 'react-router-dom'

export const Person = (props: any) => {
  const params = useParams()
  const characterId = params.id
  return <div>Person </div>
}
