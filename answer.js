//Question No. 1 - Value Detective

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

//Question No. 2 - Bangladesh Weekend Machine
function getDayType(day) {
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

//Question No. 3 - Username Gatekeeper

//Question No. 4 - Dhaka CNG Fare Meter
