import React, { useRef, useState } from 'react'
import { useHomeWorld } from '../hooks/useHomeWorld'
import { useNavigate } from 'react-router-dom'
export const CharacterBox = (props: any) => {
  const { character } = props
  const isLoading = useRef<boolean>(true)
  const [planetData, setPlanetData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Clicked ******')
    const characterUrl: string = character.url
    const splitUrl = characterUrl.split('/')
    const characterIndex = splitUrl[splitUrl.length - 2]
    navigate(`/people/${characterIndex}`, { state: { character: character } })
  }

  useHomeWorld(character.homeworld, isLoading, setPlanetData, setError)
  return (
    <>
      {error ? (
        <div>Error occured.. Please try again later.</div>
      ) : (
        <div
          className="characterBox"
          onClick={handleClick}
          data-testid="listitem"
          data-characterid={character.name}
        >
          <div className="headerContainer">
            <div>Name: {character.name}</div>
            <div>Gender: {character.gender?.toUpperCase()}</div>
          </div>
          <div>
            {isLoading.current ? (
              'Loading...'
            ) : (
              <div>Planet: {planetData?.name}</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
