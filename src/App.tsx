import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './store/actions/games'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [])

  return (
    <div>
      <h1>Hello Ignite</h1>
    </div>
  )
}

export default App
