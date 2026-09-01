/* Write a function getDayType that takes a day name and returns:

Input day                                      Returns
Friday, Saturday                              "Weekend"
Sunday, Monday, Tuesday, Wednesday, Thursday  "Working Day"
anything else                                 "Invalid Day"

You must solve this with switch case, not with if / else.

It must also work when the student enters the day in any letter case:
Call Returns
getDayType("Friday") "Weekend"
getDayType("friday") "Weekend"
getDayType("MONDAY") "Working Day"
getDayType("Bandarban") "Invalid Day"

Hint: two case lines can share one result if you do not put break between them. And a string method can fix the letter case before the switch starts.

*/

function getDayType(day) {
  // Validate that the input is a valid string and not empty
  //   if (typeof day !== "string" || day.trim() === "") {
  //     return "Invalid";
  //   }

  // check if the input is a string
  if (typeof day !== "string") {
    return "Invalid";
  }

  // Convert the input day to lowercase to handle case insensitivity
  const lowerCaseDay = day.toLowerCase();
  // console.log("Input day (lowercase):", lowerCaseDay);

  // This updates the local parameter "day" within the function scope.
  // day = day.toLowerCase();

  // Use a switch statement to determine the type of day
  // switch (day) {
  switch (lowerCaseDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }

  // Declare a extra variable to store the result of the witch statement and return it at the end of the function.
  /* let result;

  switch (day.toUpperCase()) {
    case "FRIDAY":
    case "SATURDAY":
      result = "Weekend";
      break;

    case "SUNDAY":
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
      result = "Working Day";
      break;

    default:
      result = "Invalid Day";
  }

  return result; */
}

// Test cases
console.log(getDayType("Friday")); // Expected output: "Weekend"
console.log(getDayType("friday")); // Expected output: "Weekend"
console.log(getDayType("MONDAY")); // Expected output: "Working Day"
console.log(getDayType("  monday  ")); // Expected output: "Working Day"
console.log(getDayType("Bandarban")); // Expected output: "Invalid Day"
console.log(getDayType(""));

// Edge Case
console.log(getDayType([]));
console.log(getDayType({}));
console.log(getDayType(123));
console.log(getDayType(null));
console.log(getDayType(undefined));
console.log(getDayType(true));
console.log(getDayType(false));
