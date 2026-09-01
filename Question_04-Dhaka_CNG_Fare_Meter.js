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

*/
