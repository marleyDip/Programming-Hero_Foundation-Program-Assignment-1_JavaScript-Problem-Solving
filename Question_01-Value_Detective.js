/* Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

<type of the value> | <truthy or falsy>

Examples:
    Call	                    Returns
    describeValue("hello")	    "string | truthy"
    describeValue("")	        "string | falsy"
    describeValue(25)	        "number | truthy"
    describeValue(0)	        "number | falsy"
    describeValue(true)	        "boolean | truthy"
    describeValue(null)	        "object | falsy"
    describeValue(undefined)	"undefined | falsy"

Watch out for these three. Think before you answer:
    describeValue("0") — a string that looks like zero
    describeValue(NaN) — what does typeof NaN give?
    describeValue(null) — remember the strange thing we saw in class

Hint: you do not need a long if chain to find the type. typeof gives it to you. And a value can be put straight inside an if to test truthy or falsy.

*/

// const describeValue = (value) => `${typeof value} | ${Boolean(value) ? "Truthy" : "falsy"}`;

function describeValue(value) {
  // console.log("The value is ->", value, "& The type is =>", typeof value);
  // console.log("Boolean conversion:", Boolean(value));

  // Get the type of the value using typeof operator
  const type = typeof value;

  // A value is truthy if it evaluates to true in a boolean context, otherwise it's falsy.
  // A value is falsy if it is one of the following: false, 0, -0, 0n, "", null, undefined, or NaN.
  const truthiness = value ? "truthy" : "falsy";

  // Return the formatted string with type and truthiness
  return `${type} | ${truthiness}`;

  // Using a array and join method to convert the type and boolean value to a string.
  // return [typeof value, Boolean(value) ? "truthy" : "falsy"].join(" | ");

  // Used an extra variable to store the result and returned it using string concatenation instead of template literals. This is a traditional if-else statement.
  /* let status;

  if (Boolean(value)) {
    status = "truthy";
  } else {
    status = "falsy";
  }

  return typeof value + " | " + status; */

  // Using a single if statement to check the truthiness of the value and return the appropriate string.
  /* if (value) {
    return typeof value + " | truthy";
  }

  return typeof value + " | falsy"; */
}

// Truthy values to test
console.log("Truthy values: \n");
console.log(describeValue(true)); // "boolean | truthy"
console.log(describeValue("hello")); // "string | truthy"
console.log(describeValue(25)); // "number | truthy"
console.log(describeValue(-1)); // "number | truthy"
console.log(describeValue(3.14)); // "number | truthy"
console.log(describeValue("0")); // "string | truthy"

console.log(describeValue([])); // "object | truthy"
console.log(describeValue({})); // "object | truthy"
console.log(describeValue(function () {})); // "function | truthy"

console.log();

// Falsy values to test
console.log("Falsy values: \n");
console.log(describeValue(false)); // "boolean | falsy"
console.log(describeValue(0)); // "number | falsy"
console.log(describeValue(-0)); // "number | falsy"
console.log(describeValue(BigInt(0))); // "bigint | falsy"
console.log(describeValue("")); // "string | falsy"
console.log(describeValue(null)); // "object | falsy"
console.log(describeValue(undefined)); // "undefined | falsy"
console.log(describeValue(NaN)); // "number | falsy"

console.log();

// Additional test cases
console.log("Additional test cases: \n");
console.log(describeValue(new String("test"))); // "object | truthy"
console.log(describeValue(Symbol("sym"))); // "symbol | truthy"
console.log(describeValue(BigInt(10))); // "bigint | truthy"
console.log(describeValue(new Date())); // "object | truthy"
console.log(describeValue(/regex/)); // "object | truthy"
console.log(describeValue(new Map())); // "object | truthy"
console.log(describeValue(new Set())); // "object | truthy"
