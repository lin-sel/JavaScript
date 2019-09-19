

// Function Declaration. (regular function)
function sampleExample(){
    console.log('Hello Function there');
    return 23;
}

// calling function.
let sam = sampleExample();
console.log(sam);

// Function Expression.
const speak = function(){
    return "Return value";
};

// function expression calling.
console.log(speak());

// Difference between function expression and function declation.
// function declare any where in the file automatically hoist at the top of the file. but is not happend with function expression.
// we can call function before declaration but we can do it with function expression.


//----------------------------------------------------------------------------------------------------------------------------------//

// Function parameters.

// for function argument we don't need to use let or var keyword to declare variable.
function wishGuest( name, time){
    console.log(`good ${time} ${name} have fun.`);
}
wishGuest("John","Night");


// we can also pass default parameter. if we are not passing parameter with function calling then function use there default parameter.
function wishsGuest( name = "Alex", time = "night"){
    console.log(`good ${time} ${name} have fun.`);
}

wishsGuest();


//-------------------------------------------------------------------------------------------------------------------------------------//

// Arrow Function.

/*


-> Two significant benefits of using arrow functions are:

    (1) arrow functions are less verbose than traditional functions
    (2) arrow functions take the this from their surroundings (lexical binding)

*/

// declaration (Arrow Function).
let sum = (a,b) => a + b;

// traditional function declaration.
function sumab(a,b){
    return a + b;
}

// declaration of arrow function with one argument.
let areaCircle = radius => 3.14 * radius**2;




//------------------------------------------------------------------------------------------------//

// Callback function.


const prints = func => {
    let value = 40;
    func(value);
}

// here we are passing function as arguments to another function.
prints(value => {
    console.log(value);
});


// foreach function (method).
let object = ["Alex", "Reany", "Cassy", "Nilesh", "George"];

object.forEach(name => {
    console.log(name);
})