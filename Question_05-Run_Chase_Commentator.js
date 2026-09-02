/* Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

Steps:
1. runsNeeded = target - scored
2. If runsNeeded is 0 or less, the match is already won → return "Won"
3. Otherwise, if ballsLeft is 0 or less, there is no ball left to score → return "Lost"
4. Otherwise, work out the required run rate: requiredRate = (runsNeeded / ballsLeft) * 6

5. Pick the verdict from the rate:
Required rate	        Verdict
6 or less	            "Comfortable"
more than 6, up to 12	"Tough"
more than 12	        "Almost Impossible"

6. Return this exact sentence:

Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
Always write runs and balls, even when the number is 1.

Call	                        Returns
getChaseVerdict(200, 200, 12)	"Won"
getChaseVerdict(200, 190, 0)	"Lost"
getChaseVerdict(100, 90, 12)	"Need 10 runs in 12 balls | Comfortable"
getChaseVerdict(100, 80, 12)	"Need 20 runs in 12 balls | Tough"
getChaseVerdict(100, 70, 12)	"Need 30 runs in 12 balls | Almost Impossible"
getChaseVerdict(150, 149, 1)	"Need 1 runs in 1 balls | Comfortable"

Hint: use a template string for the sentence. Write it as const getChaseVerdict = (target, scored, ballsLeft) => { ... };

*/

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

console.log(getChaseVerdict(200, 200, 12)); // "Won"
console.log(getChaseVerdict(200, 190, 0)); // "Lost"

console.log(getChaseVerdict(100, 90, 12)); // "Need 10 runs in 12 balls | Comfortable"
console.log(getChaseVerdict(100, 80, 12)); // "Need 20 runs in 12 balls | Tough"
console.log(getChaseVerdict(100, 70, 12)); // "Need 30 runs in 12 balls | Almost Impossible"
console.log(getChaseVerdict(150, 149, 1)); // "Need 1 runs in 1 balls | Comfortable"

console.log(getChaseVerdict(120, 105, 18)); // "Need 50 runs in 18 balls | Comfortable"
console.log(getChaseVerdict(120, 90, 18)); // "Need 50 runs in 18 balls | Tough"
console.log(getChaseVerdict(120, 70, 18)); // "Need 50 runs in 18 balls | Almost Impossible"
