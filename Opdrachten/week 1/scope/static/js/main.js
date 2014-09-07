//local scope
(function(){
	var iterator = 1;
	var max = 10;
	var min = 5;

	console.log(iterator, max, min);

})();

//global scope
var iterator = 'test';
var max = 50;
var min = 20;

console.log(iterator, max, min);

//A closure is an inner function that has access to the outer (enclosing) function’s variables

function init() {
    var name = "Sjaak"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();

//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures