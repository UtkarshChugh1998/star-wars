import { useEffect } from 'react'
import { urls } from '../config/urlConfig'

export const useCharacterList = (
  isLoading: any,
  setData: any,
  setError: any,
) => {
  useEffect(() => {
    isLoading.current = true
    fetch(urls.getCharacterList(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
