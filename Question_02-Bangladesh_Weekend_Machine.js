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
  const lowerCaseDay = day.trim().toLowerCase();
  // console.log("Input day (lowercase):", lowerCaseDay);

  // This updates the local parameter "day" within the function scope.
  // day = day.toLowerCase();

  // Use a switch statement to determine the type of day
  // switch (day) {
  /* switch (lowerCaseDay) {
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
  } */

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

  // Using if / else if / else statements
  /* if (lowerCaseDay === "friday" || lowerCaseDay === "saturday") {
    return "Weekend";
  } else if (
    lowerCaseDay === "sunday" ||
    lowerCaseDay === "monday" ||
    lowerCaseDay === "tuesday" ||
    lowerCaseDay === "wednesday" ||
    lowerCaseDay === "thursday"
  ) {
    return "Working Day";
  } else {
    return "Invalid Day";
  } */

  // Using nested ternary operator with array includes method
  return ["friday", "saturday"].includes(lowerCaseDay)
    ? "Weekend"
    : ["sunday", "monday", "tuesday", "wednesday", "thursday"].includes(
          lowerCaseDay,
        )
      ? "Working Day"
      : "Invalid Day";

  // Using lookup object
  const daysObject = {
    friday: "Weekend",
    saturday: "Weekend",
    sunday: "Working Day",
    monday: "Working Day",
    tuesday: "Working Day",
    wednesday: "Working Day",
    thursday: "Working Day",
  };

  // return daysObject[lowerCaseDay] || "Invalid Day";
  return daysObject[day.trim().toLowerCase()] ?? "Invalid Day";

  // Using filter method with array and single if
  const weekend = ["friday", "saturday"];
  const workingDays = ["sunday", "monday", "tuesday", "wednesday", "thursday"];

  if (weekend.filter((day) => day === lowerCaseDay).length > 0) {
    return "Weekend";
  }

  if (workingDays.filter((day) => day === lowerCaseDay).length > 0) {
    return "Working Day";
  }

  return "Invalid Day";

  // Using find method with array of objects - simple
  const daysArrayOfObjects = [
    { name: "friday", type: "Weekend" },
    { name: "saturday", type: "Weekend" },
    { name: "sunday", type: "Working Day" },
    { name: "monday", type: "Working Day" },
    { name: "tuesday", type: "Working Day" },
    { name: "wednesday", type: "Working Day" },
    { name: "thursday", type: "Working Day" },
  ];

  const dayFound = daysArrayOfObjects.find((d) => d.name === lowerCaseDay);
  return dayFound ? dayFound.type : "Invalid Day";

  // Using find method with array of arrays - harder
  const daysArrayOfArrays = [
    ["friday", "Weekend"],
    ["saturday", "Weekend"],
    ["sunday", "Working Day"],
    ["monday", "Working Day"],
    ["tuesday", "Working Day"],
    ["wednesday", "Working Day"],
    ["thursday", "Working Day"],
  ];

  const dayResult = daysArrayOfArrays.find((item) => item[0] === lowerCaseDay);
  return dayResult ? dayResult[1] : "Invalid Day";
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
