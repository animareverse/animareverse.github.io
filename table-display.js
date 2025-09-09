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
  // Create falling leaves animation
  createFallingLeaves()

  // Add subtle pulse to table name
  const tableName = document.getElementById('tableName')
  tableName.style.animation = 'tableReveal 0.8s ease-out'
}

function createFallingLeaves() {
  const leaves = ['🍃', '🌿', '🍀', '🌱', '🌾']
  const container = document.querySelector('.container')

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const leaf = document.createElement('div')
      leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)]
      leaf.style.position = 'fixed'
      leaf.style.fontSize = Math.random() * 15 + 20 + 'px'
      leaf.style.left = Math.random() * window.innerWidth + 'px'
      leaf.style.top = '-50px'
      leaf.style.zIndex = '1000'
      leaf.style.pointerEvents = 'none'
      leaf.style.opacity = '0.8'

      // Animate falling with gentle swaying
      leaf.style.transition = 'all 5s ease-out'
      document.body.appendChild(leaf)

      setTimeout(() => {
        leaf.style.top = window.innerHeight + 100 + 'px'
        leaf.style.opacity = '0'
        leaf.style.transform = `rotate(${Math.random() * 180 - 90}deg) translateX(${
          Math.random() * 150 - 75
        }px)`
      }, 100)

      // Remove element after animation
      setTimeout(() => {
        if (leaf.parentNode) {
          leaf.parentNode.removeChild(leaf)
        }
      }, 5500)
    }, i * 400)
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

  // Add click effect to create more leaves
  const tableName = document.getElementById('tableName')
  if (tableName) {
    tableName.addEventListener('click', function () {
      createFallingLeaves()
    })

    // Add cursor pointer to indicate it's clickable
    tableName.style.cursor = 'pointer'
    tableName.title = 'Clicca per più foglie magiche! 🌿✨'
  }
})
