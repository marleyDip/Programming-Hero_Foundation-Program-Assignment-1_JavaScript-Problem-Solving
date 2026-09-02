// ==========================================
// QUESTION 01 - VALUE DETECTIVE
// ==========================================

function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return `${type} | ${truthiness}`;
}

// ==========================================
// QUESTION 02 - BANGLADESH WEEKEND MACHINE
// ==========================================

function getDayType(day) {
  const lowerCaseDay = day.toLowerCase();

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

// ==========================================
// QUESTION 03 - USERNAME GATEKEEPER
// ==========================================

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

// ==========================================
// QUESTION 04 - DHAKA CNG FARE METER
// ==========================================

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  // Minimum fare
  let fare = 50;

  // Distance charge after 2 km
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  // Waiting charge
  fare += waitingMinutes * 2;

  // Night charge
  if (isNight) {
    fare *= 1.2;
  }

  return fare;
}

// ==========================================
// QUESTION 05 - RUN CHASE COMMENTATOR
// ==========================================

const getChaseVerdict = (target, scored, ballsLeft) => {
  // Calculate runs needed
  const runsNeeded = target - scored;

  // Already won
  if (runsNeeded <= 0) {
    return "Won";
  }

  // No balls left
  if (ballsLeft <= 0) {
    return "Lost";
  }

  // Required run rate
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// ==========================================
// HELPER FUNCTION
// ==========================================

function showResult(elementId, message, type = "success") {
  const resultBox = document.getElementById(elementId);

  const resultText = resultBox.querySelector(".result-text");

  resultText.textContent = message;

  resultBox.classList.remove("success", "error");

  resultBox.classList.add(type);
}

// ==========================================
// QUESTION 01 - RUN
// ==========================================

document.getElementById("runValue").addEventListener("click", () => {
  const input = document.getElementById("valueInput");

  const value = input.value;

  if (value === "") {
    showResult("valueResult", "Please enter a value.", "error");

    return;
  }

  /*
      Convert the text input into
      common JavaScript values.

      This lets the user test:
      0
      false
      null
      undefined
      numbers
      strings
    */

  let parsedValue = value;

  if (value === "null") {
    parsedValue = null;
  } else if (value === "undefined") {
    parsedValue = undefined;
  } else if (value === "true") {
    parsedValue = true;
  } else if (value === "false") {
    parsedValue = false;
  } else if (value === "NaN") {
    parsedValue = NaN;
  } else if (value !== "" && !isNaN(value)) {
    parsedValue = Number(value);
  }

  const result = describeValue(parsedValue);

  showResult("valueResult", result);
});

// ==========================================
// QUESTION 02 - RUN
// ==========================================

document.getElementById("runDay").addEventListener("click", () => {
  const day = document.getElementById("dayInput").value;

  if (day === "") {
    showResult("dayResult", "Please enter a day.", "error");

    return;
  }

  const result = getDayType(day);

  showResult("dayResult", result);
});

// ==========================================
// QUESTION 03 - RUN
// ==========================================

document.getElementById("runUsername").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value;

  if (username === "") {
    showResult("usernameResult", "Please enter a username.", "error");

    return;
  }

  const result = validateUsername(username);

  showResult("usernameResult", result);
});

// ==========================================
// QUESTION 04 - RUN
// ==========================================

document.getElementById("runCng").addEventListener("click", () => {
  const distance = Number(document.getElementById("distanceInput").value);

  const waitingMinutes = Number(
    document.getElementById("waitingInput").value || 0,
  );

  const isNight = document.getElementById("nightInput").checked;

  if (document.getElementById("distanceInput").value === "") {
    showResult("cngResult", "Please enter the distance.", "error");

    return;
  }

  if (distance < 0 || waitingMinutes < 0) {
    showResult(
      "cngResult",
      "Distance and waiting time cannot be negative.",
      "error",
    );

    return;
  }

  const fare = getCngFare(distance, isNight, waitingMinutes);

  showResult("cngResult", `৳ ${fare.toFixed(2)}`);
});

// ==========================================
// QUESTION 05 - RUN
// ==========================================

document.getElementById("runChase").addEventListener("click", () => {
  const target = Number(document.getElementById("targetInput").value);

  const scored = Number(document.getElementById("scoredInput").value);

  const ballsLeft = Number(document.getElementById("ballsInput").value);

  const targetInput = document.getElementById("targetInput").value;

  const scoredInput = document.getElementById("scoredInput").value;

  const ballsInput = document.getElementById("ballsInput").value;

  if (targetInput === "" || scoredInput === "" || ballsInput === "") {
    showResult("chaseResult", "Please fill in all fields.", "error");

    return;
  }

  if (target < 0 || scored < 0 || ballsLeft < 0) {
    showResult("chaseResult", "Values cannot be negative.", "error");

    return;
  }

  const result = getChaseVerdict(target, scored, ballsLeft);

  showResult("chaseResult", result);
});

// ==========================================
// ENTER KEY SUPPORT
// ==========================================

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const card = input.closest(".problem-card");

    const button = card.querySelector(".run-button");

    button.click();
  });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("🚀 JavaScript Problem Solving Playground Loaded Successfully!");

console.log("✅ 5/5 Problems Ready");
