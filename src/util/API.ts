import axios from 'axios'

const http = axios.create({})

function fetchPopularGames() {
  return http.get('/api/popular')
}

function fetchUpcomingGames() {
  return http.get('/api/upcoming')
}

function fetchNewGames() {
  return http.get('/api/new')
}

export { fetchPopularGames, fetchUpcomingGames, fetchNewGames }
