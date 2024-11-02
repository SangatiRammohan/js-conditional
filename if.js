/* const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`); */

// ouput:- Your grade is: B

//---------------------------------------------------------------------------------------------------------------------//



/* const age = 48;

const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult); */


// You are an adult

//----------------------------------------------------------------------------------------------------------------------//


/*3.
You have a variable day that contains the name of a day (e.g., "Monday", "Tuesday", etc.). 
Write an if-else statement to determine if the day is a weekend. The weekend is defined as either Saturday or Sunday.*/

// var day = prompt("enter the day")
// if( day==="saturday" || day==="sunday"){
//     console.log(`this is ${day}`)
//     alert(`this is ${day}`)
// }else{
//     console.log("This is not a weekend")
//     alert("This is not a weekend")
// }


//------------------------------------------------------------------------------------------------//

/*4.
You have a variable age representing a person's age and a boolean variable citizenship indicating whether they are a citizen 
(true for citizen, false for non-citizen). Write an if-else statement to check if the person is eligible to vote. 
A person is eligible to vote if they are at least 18 years old and a citizen.*/

// var age = prompt("Enter your age")
// var citizenship =prompt("Give only Ture or False only")
// if(age>=18 && (citizenship === "true" || citizenship==="True" || citizenship==="TRUE")){
//     alert( "You are eligible for voting")
//     console.log("Your citizenship is Indian")
// }else{
//     alert("You are not eligable for voting")
//     alert("You are not an indian")
// }


//---------------------------------------------------------------------------------------------------------------------------//

/* 5.
You have a simple login form where users enter their username and password. 
You want to check if the username is "admin" and the password is "12345". 
The username can be entered in any case (e.g., "Admin", "ADMIN", "admin"), while the password must be checked strictly.*/

var userName=prompt("Enter your User name")
var password =prompt("Enter your password")
if((userName==="Admin" || userName==="admin" || userName==="ADMIN") && password==="1234"){
    console.log("Login successfully completed")
    alert("Login Successfull")
}else{
    console.log("login failed")
    alert("login failed")
}
