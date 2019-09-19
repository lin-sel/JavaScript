
/*

(1) A programming language uses control statements to control the flow of execution of the program based on certain conditions. These are used to cause the flow of 
execution to advance and branch based on changes to the state of a program.

(2) JavaScript’s conditional statements:

1. if
2. if-else
3. nested-if
4. if-else-if

These statements allow you to control the flow of your program’s execution based upon conditions known only during run time.

*/


// if statement

let myAge = 22;

if(myAge > 18){
    console.log("You can apply for Voter ID.");
}


// if - else

if(myAge > 18){
    console.log("You can apply for Voter ID.");
}
else {
    console.log("You can not apply for Voter ID.");
}


// nested-if

if(myAge > 18){
    if(myAge < 23){
        console.log("You can apply for Voter ID and also for Indian Army.");
    }
}
else {
    console.log("You can not apply for Voter ID.");
}


// if-else-if

var i = 20; 
  
if (i == 10) 
  document.wrte("i is 10"); 
else if (i == 15) 
  document.wrte("i is 15"); 
else if (i == 20) 
  document.wrte("i is 20"); 
else
  document.wrte("i is not present"); 