function showPage(pageId) {
  // Create and show loading screen with smooth transition
  const loader = document.createElement('div')
  loader.id = 'loading-screen'

  // Add image to loading screen
  const img = document.createElement('img')
  img.src = 'assets/loading.png' // Replace with the path to your image
  img.alt = 'Loading...'
  loader.appendChild(img)

  document.body.appendChild(loader)

  // Trigger fade-in transition by adding 'show' class
  setTimeout(() => {
    loader.classList.add('show')
  }, 0)

  setTimeout(() => {
    // Hide all pages and remove active class
    document.querySelectorAll('.page').forEach((page) => {
      page.classList.remove('active')
      page.style.display = 'none'
    })

    // Show the selected page
    const selectedPage = document.getElementById(pageId)
    if (selectedPage) {
      selectedPage.classList.add('active')
      selectedPage.style.display = 'block'
    }

    // Update navbar links
    document.querySelectorAll('.navbar a').forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('onclick') === `showPage('${pageId}')`
      )
    })

    // Remove the loading screen with fade-out transition
    setTimeout(() => {
      loader.classList.remove('show') // Fade-out
      setTimeout(() => {
        document.body.removeChild(loader) // Remove it after fade-out is complete
      }, 415) // Match the fade-out duration
    }, 415) // You can adjust this timeout to match the content loading time
  }, 415) // Adjust the delay to match the content transition time
}
// Function to toggle collapsible sections
function toggleFolder(folderId) {
  let folder = document.getElementById(folderId)
  folder.classList.toggle('hidden')
}

// Function to change the video source dynamically
function changeIframe(url) {
  document.getElementById('myIframe').src = url
}

var swiper = new Swiper('.swiper', {
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

var swiper2 = new Swiper('.swiper-container2', {
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

swiper2.slideTo(5)

function toggleSidebar() {
  const sidebar = document.getElementById('mobileSidebar')
  const overlay = document.getElementById('overlay')

  const isOpen = !sidebar.classList.contains('-translate-x-full')

  if (isOpen) {
    // Closing
    sidebar.classList.add('-translate-x-full')

    overlay.classList.remove('opacity-45') // remove your chosen opacity
    overlay.classList.add('opacity-0')
    overlay.classList.add('pointer-events-none')
  } else {
    // Opening
    sidebar.classList.remove('-translate-x-full')

    overlay.classList.remove('opacity-0')
    overlay.classList.add('opacity-45') // or 25/75/90
    overlay.classList.remove('pointer-events-none')
  }
}
