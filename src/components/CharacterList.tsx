import { CharacterBox } from './CharacterBox'

export const CharacterList = (props: any) => {
  const { data } = props
  return (
    <div className="listContainer">
      {data?.results?.map((character: any, index: number) => (
        <CharacterBox key={index} character={character} />
      ))}
    </div>
  )
}
