import { Character, CharacterResponse } from '../config/types'
import { CharacterBox } from './CharacterBox'

type ICharacterList = {
  data: CharacterResponse
}
export const CharacterList = (props: ICharacterList) => {
  const { data } = props
  return (
    <div className="listContainer">
      {data?.results?.map((character: Character, index: number) => (
        <CharacterBox key={index} character={character} />
      ))}
    </div>
  )
}
