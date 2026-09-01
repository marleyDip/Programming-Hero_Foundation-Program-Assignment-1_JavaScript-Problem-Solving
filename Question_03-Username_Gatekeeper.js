/* Write a function validateUsername that takes a username and checks it against these rules, in this order:

    1. Shorter than 4 characters → return "Too Short"
    2. Contains a space → return "No Space Allowed"
    3. Contains the word admin anywhere, in any letter case → return "Reserved Word"
    4. Otherwise → return "Available"
    
The order matters. Look at the third example carefully.
Call	Returns	Why
validateUsername("rahim123")	"Available"	passes every rule
validateUsername("ab")	        "Too Short"	only 2 characters
validateUsername("a b")	"Too Short"	it has a space, but the length rule is checked first
validateUsername("abcd")	"Available"	exactly 4 is allowed
validateUsername("rahim islam")	"No Space Allowed"	
validateUsername("superadmin99")	"Reserved Word"	admin is in the middle
validateUsername("Admin_Rahim")	"Reserved Word"	capital A must also be caught

Hint: .length, .includes(), and .toLowerCase().

*/
