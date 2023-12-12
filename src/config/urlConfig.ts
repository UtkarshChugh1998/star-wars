const baseUrl = 'https://swapi.dev/api'

const getCharacterList = () => {
  return `${baseUrl}/people/?page=1`
}

const getCharacterPlanet = (api: string) => {
  return api
}
export const urls = {
  getCharacterList,
  getCharacterPlanet
}
