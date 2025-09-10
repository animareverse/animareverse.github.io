// Lista ospiti matrimonio e assegnazioni tavoli
// Puoi modificare questa struttura dati per adattarla alla tua lista ospiti reale

const guestList = [
  // Example guests - replace with your actual guest list
  { firstName: 'Patrizia', lastName: '', table: 'Ulivo' },
  { firstName: 'Abdellah', lastName: '', table: 'Quercia' },
  { firstName: 'Amina', lastName: '', table: 'Ulivo' },
  { firstName: 'Ibrahim', lastName: '', table: 'Quercia' },
  { firstName: 'Abdelhakim', lastName: '', table: 'Mandorlo' },
  { firstName: 'Sabrine', lastName: '', table: 'Mandorlo' },
  { firstName: 'Ahmed', lastName: 'Bouchraa', table: 'Quercia' },
  { firstName: 'Mariem', lastName: 'Mouhsine', table: 'Arancio' },
  { firstName: 'Sara', lastName: 'Aglan', table: 'Arancio' },
  { firstName: 'Fatima', lastName: 'Ismail', table: 'Ulivo' },
  { firstName: 'Aisha', lastName: 'Doghri', table: 'Palma da dattero' },
  { firstName: 'Chourouk', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Mohamed', lastName: 'Tchina', table: 'Palma da dattero' },
  { firstName: 'Yasmin', lastName: 'Tiberti', table: 'Arancio' },
  { firstName: 'Youness', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Jehona', lastName: '', table: 'Gelsomino' },
  { firstName: 'Nour', lastName: 'Khamisi', table: 'Palma da dattero' },
  { firstName: 'Sara', lastName: 'Slimani', table: 'Arancio' },
  { firstName: 'Christian', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Anna', lastName: '', table: 'Gelsomino' },
  { firstName: 'Nadia', lastName: 'Lgoud', table: 'Arancio' },
  { firstName: 'Ihssan', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Khadija', lastName: 'Sadid', table: 'Melograno' },
  { firstName: 'Karim', lastName: '', table: 'Melograno' },
  { firstName: 'Yasmin', lastName: '', table: 'Melograno' },
  { firstName: 'Zineb', lastName: '', table: 'Melograno' },
  { firstName: 'Saida', lastName: '', table: 'Arancio' },
  { firstName: 'Habiba', lastName: '', table: 'Arancio' },
  { firstName: 'Loubna', lastName: '', table: 'Arancio' },
  { firstName: 'Wafe', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Abdellah', lastName: 'Nhaili', table: 'Palma da dattero' },
  { firstName: 'May', lastName: 'Mohammed', table: 'Melograno' },
  { firstName: 'Malika', lastName: '', table: 'Melograno' },
  { firstName: 'Yasmin', lastName: 'Doghri', table: 'Arancio' },
  { firstName: 'Riccardo', lastName: 'Ghidoni', table: 'Palma da dattero' },
  { firstName: 'Ilaria', lastName: '', table: 'Palma da dattero' },
  { firstName: 'Carmela', lastName: '', table: 'Ulivo' },
  { firstName: 'Veronica', lastName: '', table: 'Gelsomino' },
  { firstName: 'Simone', lastName: '', table: 'Gelsomino' },
  { firstName: 'Ahmed', lastName: 'Baali', table: 'Fico' },
  { firstName: 'Mohammad', lastName: 'El Ainin', table: 'Fico' },
  { firstName: 'Abdel Aziz', lastName: 'Shafieh', table: 'Fico' },
  { firstName: 'Yassin', lastName: '', table: 'Fico' },
  { firstName: 'Francesco', lastName: 'Issa', table: 'Fico' },
  { firstName: 'Ahmed', lastName: 'Atif', table: 'Fico' },
  { firstName: 'Hadi', lastName: 'Elkhatib', table: 'Fico' },
  { firstName: 'Belga', lastName: '', table: 'Fico' },
  { firstName: 'Diaa', lastName: '', table: 'Fico' },
  { firstName: 'Issam', lastName: 'Rifai', table: 'Mandorlo' },
  { firstName: 'Chaimaa', lastName: '', table: 'Mandorlo' },
  { firstName: 'Ilias', lastName: '', table: 'Mandorlo' },
  { firstName: 'Mariam', lastName: '', table: 'Mandorlo' },
  { firstName: 'Ihihi', lastName: '', table: 'Quercia' },
  { firstName: 'Huda', lastName: '', table: 'Cipresso' },
  { firstName: 'Naima', lastName: '', table: 'Cipresso' },
  { firstName: 'Fatiha', lastName: 'Muhajiri', table: 'Cipresso' },
  { firstName: 'Assma', lastName: 'Muhajiri', table: 'Cipresso' },
  { firstName: 'Khaled', lastName: '', table: 'Quercia' },
  { firstName: 'Fabian', lastName: '', table: 'Gelsomino' },
  { firstName: 'Wajih', lastName: '', table: 'Quercia' }
]

// Funzione per cercare un ospite
function findGuest(firstName, lastName = '') {
  // Normalizza input (rimuovi spazi e converti in minuscolo per il confronto)
  const normalizedFirstName = firstName.trim().toLowerCase()
  const normalizedLastName = lastName.trim().toLowerCase()

  // Find all guests with matching first name
  const matchingGuests = guestList.filter(
    (guest) => guest.firstName.toLowerCase() === normalizedFirstName
  )

  if (matchingGuests.length === 0) {
    return null // Nessun ospite trovato
  }

  if (matchingGuests.length === 1) {
    return matchingGuests[0] // Corrispondenza esatta trovata
  }

  // Più ospiti con lo stesso nome
  if (normalizedLastName === '') {
    // Restituisci informazioni su corrispondenze multiple
    return {
      multiple: true,
      matches: matchingGuests,
      firstName: firstName
    }
  }

  // Prova a trovare corrispondenza esatta con cognome
  const exactMatch = matchingGuests.find(
    (guest) => guest.lastName.toLowerCase() === normalizedLastName
  )

  if (exactMatch) {
    return exactMatch
  }

  // Cognome fornito ma nessuna corrispondenza esatta
  return {
    multiple: true,
    matches: matchingGuests,
    firstName: firstName,
    lastNameProvided: lastName
  }
}

// Funzione per ottenere tutti gli ospiti (per scopi amministrativi)
function getAllGuests() {
  return guestList
}

// Funzione per aggiungere un nuovo ospite (per scopi amministrativi)
function addGuest(firstName, lastName, table) {
  guestList.push({
    firstName: firstName,
    lastName: lastName || '',
    table: table
  })
}

// Esporta funzioni per l'uso in altri file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { findGuest, getAllGuests, addGuest, guestList }
}
