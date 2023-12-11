import { useEffect } from 'react'

export const useHomeWorld = (
  url: string,
  isLoading: any,
  setPlanetData: any,
  setError: any,
) => {
  useEffect(() => {
    const splitUrl = url.split('/')
    const planet = splitUrl[splitUrl.length - 2]
    const storageKey = `planet-${planet}`
    const storedData = JSON.parse(localStorage.getItem(storageKey) || 'null')
    if (storedData) {
      // Reducing API calls by returing cached data from local-storage.
      isLoading.current = false
      setPlanetData(storedData)
      return
    }
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((resp: any) => {
        localStorage.setItem(storageKey, JSON.stringify(resp))
        setPlanetData(resp)
      })
      .catch((error) => {
        isLoading.current = false
        setError(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
