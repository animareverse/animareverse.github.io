// Script for the table assignment display page

document.addEventListener('DOMContentLoaded', function () {
  // Get guest information from sessionStorage
  const guestData = sessionStorage.getItem('currentGuest')

  if (!guestData) {
    // If no guest data found, redirect back to search form
    window.location.href = 'index.html'
    return
  }

  try {
    const guest = JSON.parse(guestData)
    displayGuestInfo(guest)

    // Add some celebration effects
    setTimeout(() => {
      addCelebrationEffects()
    }, 500)
  } catch (error) {
    console.error('Error parsing guest data:', error)
    window.location.href = 'index.html'
  }
})

function displayGuestInfo(guest) {
  // Display guest name
  const guestNameElement = document.getElementById('guestName')
  const displayName = guest.lastName ? `${guest.firstName} ${guest.lastName}` : guest.firstName
  guestNameElement.textContent = displayName

  // Display table assignment
  const tableNameElement = document.getElementById('tableName')
  tableNameElement.textContent = guest.table

  // Add entrance animation
  const tableCard = document.querySelector('.table-card')
  tableCard.style.opacity = '0'
  tableCard.style.transform = 'translateY(30px)'

  setTimeout(() => {
    tableCard.style.transition = 'all 0.8s ease-out'
    tableCard.style.opacity = '1'
    tableCard.style.transform = 'translateY(0)'
  }, 200)
}

function addCelebrationEffects() {
  // Create floating hearts animation
  createFloatingHearts()

  // Add subtle pulse to table name
  const tableName = document.getElementById('tableName')
  tableName.style.animation = 'tableReveal 0.8s ease-out'
}

function createFloatingHearts() {
  const hearts = ['💕', '💖', '💗', '💝', '💘']
  const container = document.querySelector('.container')

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const heart = document.createElement('div')
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      heart.style.position = 'fixed'
      heart.style.fontSize = Math.random() * 20 + 15 + 'px'
      heart.style.left = Math.random() * window.innerWidth + 'px'
      heart.style.top = window.innerHeight + 'px'
      heart.style.zIndex = '1000'
      heart.style.pointerEvents = 'none'
      heart.style.opacity = '0.7'

      // Animate upward
      heart.style.transition = 'all 4s ease-out'
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.style.top = '-100px'
        heart.style.opacity = '0'
        heart.style.transform = `rotate(${Math.random() * 360}deg) translateX(${
          Math.random() * 200 - 100
        }px)`
      }, 100)

      // Remove element after animation
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart)
        }
      }, 4500)
    }, i * 300)
  }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
  // Add hover effect to table card
  const tableCard = document.querySelector('.table-card')
  if (tableCard) {
    tableCard.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px) scale(1.02)'
    })

    tableCard.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)'
    })
  }

  // Add click effect to create more hearts
  const tableName = document.getElementById('tableName')
  if (tableName) {
    tableName.addEventListener('click', function () {
      createFloatingHearts()
    })

    // Add cursor pointer to indicate it's clickable
    tableName.style.cursor = 'pointer'
    tableName.title = 'Click for more celebration! 🎉'
  }
})
