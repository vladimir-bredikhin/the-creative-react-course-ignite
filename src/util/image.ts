import { apple, gamepad, nintendo, playstation, steam, xbox } from '../img'

const resizeImagePath = (imagePath: string, size: number) => {
  return imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace('media/games', `media/resize/${size}/-/games`)
}

const platformIcon = (slug: string) => {
  switch (true) {
    case /ios/.test(slug.toLowerCase()):
      return apple
    case /nintendo/.test(slug.toLowerCase()):
      return nintendo
    case /playstation/.test(slug.toLowerCase()):
      return playstation
    case /pc/.test(slug.toLowerCase()):
      return steam
    case /xbox/.test(slug.toLowerCase()):
      return xbox
    default:
      return gamepad
  }
}

export { resizeImagePath, platformIcon }
