import { useLocation, useParams } from 'react-router-dom'
import { useMovieList } from '../hooks/useCharacterList'
import { useRef, useState } from 'react'
import { useHomeWorld } from '../hooks/useHomeWorld'
import { Element } from './common/Element'
import { Movie, Planet } from '../config/types'

export const Person = (props: any) => {
  const params = useParams()
  const {
    state: { character }
  } = useLocation()
  const isLoading = useRef<boolean>(true)
  const isLoadingPlanet = useRef<boolean>(true)
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [planetData, setPlanetData] = useState<Planet | null>(null)
  const [planetError, setPlanetError] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const characterId = params.id
  useMovieList(character.films, isLoading, setMovieList, setError)
  useHomeWorld(
    character.homeworld,
    isLoadingPlanet,
    setPlanetData,
    setPlanetError
  )
  return (
    <div className="page" data-testid="person">
      <div className="header">{character.name}</div>
      <div className="section">
        <div className="sectionHeader">Personal Details</div>
        <div className="detailsContainer">
          <div className="element">Height: {character.height}</div>
          <Element label="Hair Color" value={character.hair_color} isEditable />
          <Element label="Mass" value={character.mass} />
          <Element label="Hair Color" value={character.hair_color} />
          <Element label="Eye Color" value={character.eye_color} />
          <Element label="Birth Year" value={character.birth_year} />
        </div>
      </div>
      <div className="section">
        <div className="sectionHeader">Planet Details:</div>
        <div className="detailsContainer">
          <div className="element">Planet Name: {planetData?.name}</div>
          <div className="element">
            Rotation Period: {planetData?.rotation_period}
          </div>
          <div className="element">
            Orbital Period: {planetData?.orbital_period}
          </div>
          <div className="element">Climate: {planetData?.climate}</div>
          <div className="element">Gravity: {planetData?.gravity}</div>
        </div>
      </div>
      <div className="section">
        <div className="sectionHeader">Movies</div>
        <div className="detailsContainer">
          {movieList?.map((movie, index) => (
            <div key={index} className="element">
              {index + 1}: {movie.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
