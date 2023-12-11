import React, { useRef, useState } from 'react'
import './App.css'
import { useCharacterList } from './hooks/useCharacterList'
import { Loader } from './components/common/Loader'
import { CharacterList } from './components/common/CharacterList'

function App() {
  const isLoading = useRef<boolean>(true)
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<any>(null)
  useCharacterList(isLoading, setData, setError)
  return (
    <div>
      {isLoading.current ? (
        <Loader />
      ) : error ? (
        <div>Error occured</div>
      ) : data ? (
        <CharacterList data={data} />
      ) : null}
    </div>
  )
}

export default App
