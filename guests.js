// Wedding guest list and table assignments
// You can modify this data structure to match your actual guest list

const guestList = [
  // Example guests - replace with your actual guest list
  { firstName: 'John', lastName: 'Smith', table: 'Table 1 - Family' },
  { firstName: 'Sarah', lastName: 'Johnson', table: 'Table 2 - College Friends' },
  { firstName: 'Michael', lastName: 'Brown', table: 'Table 3 - Work Colleagues' },
  { firstName: 'Emily', lastName: 'Davis', table: 'Table 1 - Family' },
  { firstName: 'David', lastName: 'Wilson', table: 'Table 4 - High School Friends' },
  { firstName: 'Lisa', lastName: 'Miller', table: 'Table 2 - College Friends' },
  { firstName: 'James', lastName: 'Anderson', table: 'Table 5 - Relatives' },
  { firstName: 'Jennifer', lastName: 'Taylor', table: 'Table 3 - Work Colleagues' },
  { firstName: 'Robert', lastName: 'Thomas', table: 'Table 6 - Neighbors' },
  { firstName: 'Maria', lastName: 'Garcia', table: 'Table 1 - Family' },
  { firstName: 'William', lastName: 'Martinez', table: 'Table 7 - University Friends' },
  { firstName: 'Jessica', lastName: 'Rodriguez', table: 'Table 2 - College Friends' },
  { firstName: 'Christopher', lastName: 'Lee', table: 'Table 8 - Sports Club' },
  { firstName: 'Amanda', lastName: 'White', table: 'Table 4 - High School Friends' },
  { firstName: 'Daniel', lastName: 'Harris', table: 'Table 5 - Relatives' },

  // Examples with same first names (demonstrating last name usage)
  { firstName: 'Sarah', lastName: 'Williams', table: 'Table 6 - Neighbors' },
  { firstName: 'John', lastName: 'Jones', table: 'Table 7 - University Friends' },
  { firstName: 'Michael', lastName: 'Clark', table: 'Table 8 - Sports Club' },

  // Single name guests
  { firstName: 'Alexandra', lastName: '', table: 'Table 9 - Childhood Friends' },
  { firstName: 'Benjamin', lastName: '', table: 'Table 10 - Dance Class' }
]

// Function to search for a guest
function findGuest(firstName, lastName = '') {
  // Normalize input (trim whitespace and convert to lowercase for comparison)
  const normalizedFirstName = firstName.trim().toLowerCase()
  const normalizedLastName = lastName.trim().toLowerCase()

  // Find all guests with matching first name
  const matchingGuests = guestList.filter(
    (guest) => guest.firstName.toLowerCase() === normalizedFirstName
  )

  if (matchingGuests.length === 0) {
    return null // No guest found
  }

  if (matchingGuests.length === 1) {
    return matchingGuests[0] // Exact match found
  }

  // Multiple guests with same first name
  if (normalizedLastName === '') {
    // Return info about multiple matches
    return {
      multiple: true,
      matches: matchingGuests,
      firstName: firstName
    }
  }

  // Try to find exact match with last name
  const exactMatch = matchingGuests.find(
    (guest) => guest.lastName.toLowerCase() === normalizedLastName
  )

  if (exactMatch) {
    return exactMatch
  }

  // Last name provided but no exact match
  return {
    multiple: true,
    matches: matchingGuests,
    firstName: firstName,
    lastNameProvided: lastName
  }
}

// Function to get all guests (for admin purposes)
function getAllGuests() {
  return guestList
}

// Function to add a new guest (for admin purposes)
function addGuest(firstName, lastName, table) {
  guestList.push({
    firstName: firstName,
    lastName: lastName || '',
    table: table
  })
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { findGuest, getAllGuests, addGuest, guestList }
}
