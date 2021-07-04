import axios from 'axios'

const http = axios.create({})

function fetchPopularGames() {
  return http.get('/api/popular')
}

function fetchUpcomingGames() {
  return http.get('/api/upcoming')
}

function fetchFreshGames() {
  return http.get('/api/fresh')
}

function fetchGameDetails(id: string) {
  return http.get(`/api/details/${id}`)
}

function fetchGameScreenshots(id: string) {
  return http.get(`/api/screenshots/${id}`)
}

export {
  fetchPopularGames,
  fetchUpcomingGames,
  fetchFreshGames,
  fetchGameDetails,
  fetchGameScreenshots,
}
