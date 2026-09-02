/* Write a function validateUsername that takes a username and checks it against these rules, in this order:

    1. Shorter than 4 characters → return "Too Short"
    2. Contains a space → return "No Space Allowed"
    3. Contains the word admin anywhere, in any letter case → return "Reserved Word"
    4. Otherwise → return "Available"
    
The order matters. Look at the third example carefully.
Call	Returns	Why
validateUsername("rahim123")	"Available"	passes every rule
validateUsername("ab")	         "Too Short"	only 2 characters
validateUsername("a b")	"Too Short"	it has a space, but the length rule is checked first
validateUsername("abcd")	"Available"	exactly 4 is allowed
validateUsername("rahim islam")	"No Space Allowed"	
validateUsername("superadmin99")	"Reserved Word"	admin is in the middle
validateUsername("Admin_Rahim")	"Reserved Word"	capital A must also be caught

Hint: .length, .includes(), and .toLowerCase().

*/

function validateUsername(username) {
  // Rule 1: Check length first
  if (username.length < 4) {
    return "Too Short";
  }

  // Rule 2: Check for spaces
  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  // Rule 3: Check for "admin" (case-insensitive)
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  // Rule 4: Everything is valid
  return "Available";
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
console.log(validateUsername("RahimAdmin"));
