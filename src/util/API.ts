import axios from 'axios'

const http = axios.create({})

function fetchPopularGames() {
  return http.get('/api/popular')
}

export { fetchPopularGames }
