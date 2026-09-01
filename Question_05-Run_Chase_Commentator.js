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
