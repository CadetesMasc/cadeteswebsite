const images = [
  'assets/1.jpg',
  'assets/2.jpg',
  'assets/3.jpg',
  'assets/4.jpg',
  'assets/5.jpg',
  'assets/6.jpg',
  'assets/7.jpg',
  'assets/8.jpg',
  'assets/9.jpg',
  'assets/10.jpg',
  'assets/11.jpg',
  'assets/12.jpg',
]

let lastIndex = -1
const body = document.body
const bgElement = document.createElement('div')

// Setup the background div (this avoids issues with the body's default behavior)
bgElement.style.position = 'fixed'
bgElement.style.top = '0'
bgElement.style.left = '0'
bgElement.style.width = '100%'
bgElement.style.height = '100%'
bgElement.style.backgroundSize = 'cover'
bgElement.style.backgroundPosition = 'center'
bgElement.style.backgroundRepeat = 'no-repeat'
bgElement.style.backgroundAttachment = 'fixed'
bgElement.style.transition = 'opacity 1s ease-in-out'
bgElement.style.zIndex = '-1'

body.appendChild(bgElement)

function changeBackground() {
  let randomIndex

  do {
    randomIndex = Math.floor(Math.random() * images.length)
  } while (randomIndex === lastIndex)

  lastIndex = randomIndex

  const newBg = document.createElement('div')
  newBg.style.position = 'fixed'
  newBg.style.top = '0'
  newBg.style.left = '0'
  newBg.style.width = '100%'
  newBg.style.height = '100%'
  newBg.style.backgroundSize = 'cover'
  newBg.style.backgroundPosition = 'center'
  newBg.style.backgroundRepeat = 'no-repeat'
  newBg.style.backgroundAttachment = 'fixed'
  newBg.style.backgroundImage = `url(${images[randomIndex]})`
  newBg.style.opacity = '0'
  newBg.style.transition = 'opacity 1s ease-in-out'
  newBg.style.zIndex = '-1'

  body.appendChild(newBg)

  setTimeout(() => {
    newBg.style.opacity = '1'
  }, 10)

  setTimeout(() => {
    bgElement.style.backgroundImage = `url(${images[randomIndex]})`
    newBg.remove()
  }, 1000)
}

setInterval(changeBackground, 5000)
changeBackground() // Run immediately on page load
