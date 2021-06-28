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

export { fetchPopularGames, fetchUpcomingGames, fetchFreshGames }
