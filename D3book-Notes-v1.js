// Interactive Data Visualization for the Web
// Scott Murray
// O'Reilly
// http://chimera.labs.oreilly.com/books/1230000000345/index.html

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Chapter 3

/*
Avoiding conflicts among global variables:
Solutions:
- Declare variables only within other functions.
- Declare a single global object, and attach all of your would-be global variables to that object. For example:
*/
var Vis = {};  //Declare empty global object
Vis.zebras = "still pretty amazing";
Vis.monkeys = "too funny LOL";
Vis.fish = "you know, not bad";

/*
Creating your won functions:
Murray uses this way:
*/
var calculateGratuity = function(bill) {
    return bill * 0.2;
};
// Instead of this way:
function calculateGratuity(bill) {
	return bill * 0.2;
}

/* 
Variable hoisting can account for conflicts between vars in functions.
Variable declarations are actually hoisted & executed at the top of a function, so not in the order you wrote them necessarily. Be careful.
*/

// --- STOPPED @ CH3.SVG
// http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#SVG_3