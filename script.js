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
bgElement.id = 'bgElement'
document.body.appendChild(bgElement)

function changeBackground() {
  if (!document.getElementById('home').classList.contains('active')) {
    return
  }

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

  document.body.appendChild(newBg)

  setTimeout(() => {
    newBg.style.opacity = '1'
  }, 10)

  setTimeout(() => {
    bgElement.style.backgroundImage = `url(${images[randomIndex]})`
    newBg.remove()
  }, 1000)
}

function myFunction() {
  var x = document.getElementById('myNavbar')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar a')

  links.forEach((link) => {
    link.addEventListener('click', function () {
      links.forEach((l) => l.classList.remove('active'))
      this.classList.add('active')
    })
  })
})

function showPage(pageId) {
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.remove('active')
  })

  const selectedPage = document.getElementById(pageId)
  selectedPage.classList.add('active')

  if (pageId === 'videos') {
    const videoPlayer = document.getElementById('videoPlayer')
    if (videoPlayer && !videoPlayer.paused) {
      videoPlayer.play()
    }
  } else {
    const videoPlayer = document.getElementById('videoPlayer')
    if (videoPlayer && !videoPlayer.paused) {
      videoPlayer.pause()
    }
  }

  document.getElementById(pageId).classList.add('active')

  document.querySelectorAll('.navbar a').forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('onclick') === `showPage('${pageId}')`) {
      link.classList.add('active')
    }
  })

  if (pageId === 'home') {
    bgElement.style.display = 'block'
    changeBackground()
  } else {
    bgElement.style.display = 'none'
  }
}

if (document.getElementById('home').classList.contains('active')) {
  bgElement.style.display = 'block'
  changeBackground()
}

setInterval(() => {
  if (document.getElementById('home').classList.contains('active')) {
    changeBackground()
  }
}, 5000)

function toggleFolder(folderId) {
  const folder = document.getElementById(folderId)

  // Check if the folder content is hidden or not
  if (folder.style.display === 'none' || folder.style.display === '') {
    folder.style.display = 'block' // Show the folder content
  } else {
    folder.style.display = 'none' // Hide the folder content
  }
}

function changeVideo(videoFile) {
  var videoPlayer = document.getElementById('videoPlayer')

  console.log('Changing video to:', videoFile)
  videoPlayer.pause()
  videoPlayer.currentTime = 0
  videoPlayer.src = videoFile
  videoPlayer.load()
  videoPlayer.play()
}
