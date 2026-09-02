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
}

//Question No. 3 - Username Gatekeeper
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

//Question No. 4 - Dhaka CNG Fare Meter

// const getCngFare = (distance, isNight = false, waitingMinutes = 0) => (50 + Math.max(0, distance - 2) * 15 + waitingMinutes * 2) * (isNight ? 1.2 : 1);

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  // Step 1: Calculate the base fare
  let fare = 50; // Minimum fare for the first 2 km

  // Step 2: Add distance charge for every km after the first 2 km
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  // Step 3: Add waiting charge
  fare = fare + waitingMinutes * 2;

  // Step 4: Apply night charge if applicable
  if (isNight) {
    // 20 / 100 = 0.2 and increase 1 + 0.2 = 1.2, if decrease 1 - 0.2 = 0.8
    fare *= 1.2; // Add 20% to the total fare
    // fare = fare * (1 + 20 / 100);
  }

  /* const extraDistance = distance > 2 ? distance - 2 : 0;
  const waitingCharge = waitingMinutes * 2;

  fare += extraDistance * 15 + waitingCharge;
  fare = isNight ? fare * 1.2 : fare; */

  return fare;
}

//Question No. 5 - Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  // Step 1: Calculate runs needed
  const runsNeeded = target - scored;

  // Step 2: Check if the match is already won
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  }

  // if (runsNeeded <= 0) return "Won";
  // if (ballsLeft <= 0) return "Lost";

  // Step 3: Calculate the required run rate
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  // Step 4: Determine the verdict based on the required rate
  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  // const verdict = runsNeeded <= ballsLeft ? "Comfortable" : runsNeeded <= ballsLeft * 2 ? "Tough" : "Almost Impossible";

  // Step 5: Return the final sentence
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
