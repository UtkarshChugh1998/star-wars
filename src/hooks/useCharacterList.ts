import { useEffect } from 'react'
import { urls } from '../config/urlConfig'

export const useCharacterList = (
  isLoading: any,
  setData: any,
  setError: any
) => {
  useEffect(() => {
    isLoading.current = true
    fetch(urls.getCharacterList(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        isLoading.current = false
        setData(resp)
      })
      .catch((error) => {
        isLoading.current = false
        setError(error)
        console.log('Error', error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
export const useMovieList = (
  urls: string[],
  isLoading: any,
  setMovieData: any,
  setError: any
) => {
  useEffect(() => {
    // Waiting for all the fetch calls to complete and return combined result in array.
    Promise.all(
      urls.map((url) =>
        fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response: any) => {
            return response.json()
          })
          .then((resp: any) => {
            return resp
          })
          .catch((error) => {
            console.log('Error')
            return []
          })
      )
    ).then((responseArr) => {
      isLoading.current = false
      setMovieData(responseArr)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
