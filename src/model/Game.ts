import Platform from './Platform'
import Screenshot from './Screenshot'

export default interface Game {
  id: string
  name: string
  released: string
  description_raw: string
  background_image: string
  dominant_color: string
  screenshots: Screenshot[]
  rating: number
  platforms: Platform[]
}
