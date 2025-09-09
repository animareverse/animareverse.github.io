// Lista ospiti matrimonio e assegnazioni tavoli
// Puoi modificare questa struttura dati per adattarla alla tua lista ospiti reale

const guestList = [
  // Example guests - replace with your actual guest list
  { firstName: 'Mamma', lastName: '', table: 'Table 1 - Family' },
  { firstName: 'Papà', lastName: '', table: 'Table 2 - College Friends' },
  { firstName: 'Amina', lastName: '', table: 'Table 3 - Work Colleagues' },
  { firstName: 'Ibrahim', lastName: '', table: 'Table 1 - Family' },
  { firstName: 'Abdelhakim', lastName: '', table: 'Table 4 - High School Friends' },
  { firstName: 'Sabrine', lastName: '', table: 'Table 2 - College Friends' },
  { firstName: 'Ahmed', lastName: 'Bouchraa', table: 'Table 5 - Relatives' },
  { firstName: 'Mariem', lastName: 'Mouhsine', table: 'Table 5 - Relatives' },
  { firstName: 'Sara', lastName: 'Aglan', table: 'Table 5 - Relatives' },
  { firstName: 'Fatima', lastName: 'Ismail', table: 'Table 3 - Work Colleagues' },
  { firstName: 'Aisha', lastName: 'Doghri', table: 'Table 6 - Neighbors' },
  { firstName: 'Chourouk', lastName: '', table: 'Table 1 - Family' },
  { firstName: 'Mohamed', lastName: 'Tchina', table: 'Table 7 - University Friends' },
  { firstName: 'Yasmin', lastName: 'Tiberti', table: 'Table 2 - College Friends' },
  { firstName: 'Youness', lastName: '', table: 'Table 8 - Sports Club' },
  { firstName: 'Jehona', lastName: '', table: 'Table 4 - High School Friends' },
  { firstName: 'Nour', lastName: 'Khamisi', table: 'Table 6 - Neighbors' },
  { firstName: 'Sara', lastName: 'Slimani', table: 'Table 7 - University Friends' },
  { firstName: 'Christian', lastName: '', table: 'Table 7 - University Friends' },
  { firstName: 'Anna', lastName: '', table: 'Table 8 - Sports Club' },
  { firstName: 'Nadia', lastName: 'Lgoud', table: 'Table 9 - Childhood Friends' },
  { firstName: 'Ihssan', lastName: '', table: 'Table 9 - Childhood Friends' },
  { firstName: 'Khadija', lastName: 'Sadid', table: 'Table 9 - Childhood Friends' },
  { firstName: 'Marito', lastName: 'Khadija', table: 'Table 16 - Dance Class' },
  { firstName: 'Saida', lastName: '', table: 'Table 10 - Dance Class' },
  { firstName: 'Habiba', lastName: '', table: 'Table 11 - Dance Class' },
  { firstName: 'Loubna', lastName: '', table: 'Table 12 - Dance Class' },
  { firstName: 'Wafe', lastName: '', table: 'Table 13 - Dance Class' },
  { firstName: 'Abdellah', lastName: 'Nhaili', table: 'Table 14 - Dance Class' },
  { firstName: 'May', lastName: 'Mohammed', table: 'Table 15 - Dance Class' },
  { firstName: 'Yasmin', lastName: 'Doghri', table: 'Table 17 - Dance Class' },
  { firstName: 'Riccardo', lastName: 'Ghidoni', table: 'Table 18 - Dance Class' },
  { firstName: 'Ilaria', lastName: '', table: 'Table 18 - Dance Class' },
  { firstName: 'Carmela', lastName: 'Pascucci', table: 'Table 19 - Dance Class' },
  { firstName: 'Veronica', lastName: '', table: 'Table 19 - Dance Class' },
  { firstName: 'Compagno', lastName: 'Veronica', table: 'Table 19 - Dance Class' },
  { firstName: 'Ahmed', lastName: 'Baali', table: 'Table 20 - Dance Class' },
  { firstName: 'Mohammad', lastName: 'El Ainin', table: 'Table 21 - Dance Class' },
  { firstName: 'Abdel Aziz', lastName: 'Shafieh', table: 'Table 22 - Dance Class' },
  { firstName: 'Yassin', lastName: '', table: 'Table 23 - Dance Class' },
  { firstName: 'Francesco', lastName: 'Issa', table: 'Table 24 - Dance Class' },
  { firstName: 'Ahmed', lastName: 'Atif', table: 'Table 25 - Dance Class' },
  { firstName: 'Hadi', lastName: 'Elkhatib', table: 'Table 26 - Dance Class' },
  { firstName: 'Belga', lastName: '', table: 'Table 27 - Dance Class' },
  { firstName: 'Issam', lastName: 'Rifai', table: 'Table 28 - Dance Class' },
  { firstName: 'Chaimaa', lastName: '', table: 'Table 29 - Dance Class' },
  { firstName: 'Ihihi', lastName: '', table: 'Table 32 - Dance Class' },
  { firstName: 'Imad', lastName: '', table: 'Table 33 - Dance Class' },
  { firstName: 'Naima', lastName: '', table: 'Table 34 - Dance Class' },
  { firstName: 'Moglie', lastName: 'Muhajiri', table: 'Table 35 - Dance Class' },
  { firstName: 'Assma', lastName: 'Muhajiri', table: 'Table 36 - Dance Class' },
  { firstName: 'Khaled', lastName: '', table: 'Table 37 - Dance Class' },
  { firstName: 'Fabian', lastName: '', table: 'Table 38 - Dance Class' },
  { firstName: 'Wajih', lastName: '', table: 'Table 39 - Dance Class' }
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
