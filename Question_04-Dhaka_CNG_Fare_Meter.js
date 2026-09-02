/* Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

Fare rules:

    1. The minimum fare is 50 taka, and it covers the first 2 km.
    2. Every km after the first 2 km costs 15 taka.
    3. Waiting charge: 2 taka for every waiting minute.
    4. At night, the driver adds 20% on the whole fare — that means on the distance charge and the waiting charge together.
    5. isNight should default to false and waitingMinutes should default to 0, so getCngFare(5) must work on its own.

Return the number, do not round it and do not add the word "taka".

Call	      Returns	Working
getCngFare(2)	50	minimum fare
getCngFare(1)	50	still the minimum, never less
getCngFare(5)	95	50 + (3 × 15)
getCngFare(10)	170	50 + (8 × 15)
getCngFare(5, false, 10)	115	95 + (10 × 2)
getCngFare(5, true)	114	95 + 20%
getCngFare(5, true, 10)	138	115 + 20%

Hint: build the fare step by step in a let variable, then apply the night charge at the very end.

Base fare = 50 + extra-distance charge + waiting charge
Night fare = base fare × 1.20

*/

// const getCngFare = (distance, isNight = false, waitingMinutes = 0) => (50 + Math.max(0, distance - 2) * 15 + waitingMinutes * 2) * (isNight ? 1.2 : 1);

// Using a helper function
const getDistanceFare = function (distance) {
  if (distance <= 2) {
    return 50;
  }

  return 50 + (distance - 2) * 15;
};

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  // let fare = 50 + Math.max(0, distance - 2) * 15 + waitingMinutes * 2;
  // if (isNight) fare *= 1.2;

  // let fare = getDistanceFare(distance);

  // Step 1: Calculate the base fare
  let fare = 50; // Minimum fare for the first 2 km

  // Step 2: Add distance charge for every km after the first 2 km
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  // fare += distance > 2 ? (distance - 2) * 15 : 0;

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

  // Using an array and reduce()
  let fare1 = [50, Math.max(0, distance - 2) * 15, waitingMinutes * 2].reduce(
    (total, charge) => total + charge,
    0,
  );

  return isNight ? fare1 * 1.2 : fare1;
}

console.log(getCngFare(2)); // 50
console.log(getCngFare(1)); // 50
console.log(getCngFare(5)); // 95
console.log(getCngFare(10)); // 170
console.log(getCngFare(5, false, 10)); // 115
console.log(getCngFare(5, true)); // 114
console.log(getCngFare(5, true, 10)); // 138
