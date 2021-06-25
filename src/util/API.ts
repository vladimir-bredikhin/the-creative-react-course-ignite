import axios from 'axios'

const BASE_URL = 'https://api.rawg.io/api'
const POPULAR_GAMES_PATH = `/games?dates=${yyyyMMdd(
  -1
)},${yyyyMMdd()}&ordering=-rating&page_size=10`

const http = axios.create({ baseURL: BASE_URL })

function yyyyMMdd(yearStep: -1 | 0 = 0) {
  const _ = (part: number) => (part < 10 ? `0${part}` : part)

  const date = new Date()

  const year = date.getFullYear() + yearStep
  const month = _(date.getMonth())
  const day = _(date.getDate())

  return `${year}-${month}-${day}`
}

function fetchPopularGames() {
  return http.get(POPULAR_GAMES_PATH)
}

export { fetchPopularGames }
