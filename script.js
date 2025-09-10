// Main script for the guest search form

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('guestForm')
  const errorMessage = document.getElementById('errorMessage')

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value

    // Clear any previous error messages
    hideError()

    // Show loading state
    const submitBtn = form.querySelector('.submit-btn')
    const originalText = submitBtn.textContent
    submitBtn.innerHTML = '<span class="loading"></span> Ricerca in corso...'
    submitBtn.disabled = true

    // Simulate a small delay for better UX
    setTimeout(() => {
      const result = findGuest(firstName, lastName)

      // Reset button
      submitBtn.textContent = originalText
      submitBtn.disabled = false

      if (!result) {
        showError(
          `Spiacenti, non riusciamo a trovare "${firstName}" nella nostra lista degli ospiti. Per favore controlla l'ortografia e riprova, o contatta gli sposi per assistenza.`
        )
        return
      }

      if (result.multiple) {
        handleMultipleMatches(result)
        return
      }

      // Single guest found - redirect to table page
      redirectToTable(result)
    }, 800) // Small delay for better UX
  })
})

function handleMultipleMatches(result) {
  const { matches, firstName, lastNameProvided } = result

  let errorMsg = `Abbiamo trovato ${matches.length} ospiti di nome "${firstName}":`
  errorMsg += '<br><br>'

  matches.forEach((guest, index) => {
    const displayName = guest.lastName ? `${guest.firstName} ${guest.lastName}` : guest.firstName
    errorMsg += `• ${displayName}<br>`
  })

  if (!lastNameProvided) {
    errorMsg +=
      '<br>Per favore inserisci il tuo cognome per aiutarci a identificarti correttamente.'
  } else {
    errorMsg += `<br>Non riusciamo a trovare una corrispondenza esatta per "${firstName} ${lastNameProvided}". Per favore controlla l'ortografia o prova solo con il nome.`
  }

  showError(errorMsg)
}

function redirectToTable(guest) {
  // Store guest info in sessionStorage for the table page
  sessionStorage.setItem('currentGuest', JSON.stringify(guest))

  // Redirect to table page
  window.location.href = 'table.html'
}

function showError(message) {
  const errorDiv = document.getElementById('errorMessage')
  errorDiv.innerHTML = message
  errorDiv.style.display = 'block'
  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

function hideError() {
  const errorDiv = document.getElementById('errorMessage')
  errorDiv.style.display = 'none'
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function () {
  // Add focus effects to form inputs
  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.addEventListener('focus', function () {
      this.parentElement.style.transform = 'translateY(-2px)'
    })

    input.addEventListener('blur', function () {
      this.parentElement.style.transform = 'translateY(0)'
    })
  })

  // Auto-capitalize first letters
  const nameInputs = document.querySelectorAll('#firstName, #lastName')
  nameInputs.forEach((input) => {
    input.addEventListener('input', function () {
      // Capitalize first letter of each word
      this.value = this.value.replace(/\b\w/g, (char) => char.toUpperCase())
    })
  })
})
