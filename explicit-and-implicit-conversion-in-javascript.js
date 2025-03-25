/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
//Part 1: Debugging Challenge
// explicit type conversation Number() needs to be used
console.log("This is Part 1!")
let result = Number("5") - 2; //using the number() conversion explicitly converts 5 into a number before subtraction
console.log("The result is: " + result); //output is 3

//Boolean conversion of non-empty string
let isValid = Boolean("false" === "true");//explicitly comparing to avoid a "false" Truth value
if (isValid) {
    console.log("This is valid!");
} else {
  console.log ("This is not valid!"); // output is "This is not valid"
}

//make sure variable age is treated as a number for the operation
let age = "25";
let totalAge = Number(age) + 5; //using the number() conversion explicitly converts 25 into a number before addition
console.log("Total Age: " + totalAge); //output is 30



          //Part 2: Write Your Own Examples

          console.log("This is Part 2!")
          let implicitEx = "19" - 20; //javascript automatically defines "19" as a number
          console.log(implicitEx); //output is "-1"
          console.log(typeof implicitEx + " is the output."); //output is "number"

          let explicitEX = "19" + "20";
          console.log(explicitEX);
          console.log(typeof explicitEX + " is the output before."); //output is string

          let convertedNum = Number(explicitEX); //convert string to number
          console.log(convertedNum); //output is 1920
          console.log(typeof convertedNum + " is the output after."); //output is number
