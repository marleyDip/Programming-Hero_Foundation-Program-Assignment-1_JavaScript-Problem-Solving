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

// Using a helper function'
const containsAdmin = (username) => {
  return username.toLowerCase().includes("admin");
};

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

  // if (containsAdmin(username)) {
  //   return "Reserved Word";
  // }

  // Rule 4: Everything is valid
  return "Available";

  // Basic if...else if...else
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }

  // Using ternary operators
  return username.length < 4
    ? "Too Short"
    : username.includes(" ")
      ? "No Space Allowed"
      : username.toLowerCase().includes("admin")
        ? "Reserved Word"
        : "Available";

  // Using an array of validation rules
  const rules = [
    {
      condition: username.length < 4,
      message: "Too Short",
    },
    {
      condition: username.includes(" "),
      message: "No Space Allowed",
    },
    {
      condition: username.toLowerCase().includes("admin"),
      message: "Reserved Word",
    },
  ];

  for (const rule of rules) {
    console.log(rule);

    if (rule.condition) {
      return rule.message;
    }
  }

  return "Available";

  //Using find() with array of arrays
  const result = [
    [username.length < 4, "Too Short"],
    [username.includes(" "), "No Space Allowed"],
    [username.toLowerCase().includes("admin"), "Reserved Word"],
  ].find(([condition]) => condition);

  // It returns => [ true, 'Too Short' ]
  return result ? result[1] : "Available";

  // Check the first element [0] of each pair
  // Iterates through the results and returns the first inner array where the boolean condition (pair[0]) evaluates to true.
  /* const found = result.find((pair) => {
    // console.log(pair); // [ true, 'Too Short' ]
    // console.log(pair[0]); // true

    return pair[0];
  });
  console.log(found); // [ true, 'Too Short' ] */

  // Destructuring array
  // const found = result.find(([, condition]) => {
  /* const found = result.find(([condition]) => {
    // rahim islam => false true
    // console.log(condition);
    return condition;
  });
  console.log(found); */

  return found ? found[1] : "Available";
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
console.log(validateUsername("RahimAdmin"));
