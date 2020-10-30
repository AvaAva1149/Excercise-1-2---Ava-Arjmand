//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jubTilte = `Adminisrator`
let city =`NorthYork`
let income =`24000`
let address = `AryaEyeClinic`
console.log(` The Fortune Teller`)
console.log(`You will be a ${jubTilte} in ${city}, making $${income} per year for ${address}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
console.log(` The Age Calculator`)
let birthYear = `1976`
let currentYear = `2020`
let age = `2020-1981`

console.log (`They are ${currentYear-birthYear} years old` )


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
console.log(` The Lifetime Supply Calculator`)

let maximumAge = 80
let currentAge = 39
let estimateAmount = 30


console.log (`You will need $${(maximumAge-currentAge)*estimateAmount} to drink coffee every couple day in your life until the ripe old age of ${maximumAge} years old.`)


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
console.log(` The Geometrizer`)


let radius =`360`
const pi = `3.141592`
let circumference = 2*(pi * radius)
let area = pi * radius * radius

console.log(`The circumference is ${circumference}.`)
console.log (`The area is  ${area}.`)



//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

console.log(` The Temperature Converter`)

let celsius = 0 
let fahrenheit = 32
let result = (0 * 9/5) + 32
console.log(`${celsius}°C is ${result}°F.`)

//(32°F − 32) × 5/9 = 0°C
//(0°C × 9/5) + 32 = 32°F

console.log(`${result}F is ${celsius}°C.`)










//lab 2

// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."



function squareNumber(num){
    console.log(`The square root of the number is${num ** 2}`)
     return num ** 2
}
 
 squareNumber(3)
 squareNumber(4)
 squareNumber(5)
 squareNumber(6)


 //or

/* function squareNumbwr(num){
   return num **2 
}
console.log(`the square root of number is ${halfnumber(5)} `)*/



// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


function halfNumber(num){
   console.log(`Half of  ${num} is ${num/2}`)
    return num / 2

}

halfNumber(5)
halfNumber(10)
halfNumber(15)




// EXERCISE 8 
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


function percentof(a,b){
console.log(`${a} is ${a/b*100} % of ${b}.`)
return a/b*100
}
percentof(2,4)
percentof(2,8)  
percentof(6,10)  
percentof(5,10)    



// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


function areaOfCircle(radnum){

   console.log(`The area for a circle with radius ${radnum} is ${3.14*radnum*2}`)
   return 3.14*radnum*2 

}

areaOfCircle(2)



//A=πr2








// EXERCISE 10
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result.
//      3. Calculate the area of a circle with the result of #2 as the radius. 
//      4. Calculate what percentage that area (#3) is of the squared result (#2).


console.log(`All function:`)
 function allFunctions(num){
   console.log(`percentOf`)
  
   let half = halfNumber(num)
   let sqaure = squareNumber(half)
   let area = areaOfCircle(sqaure)
   let percentOf = percentof(sqaure, area)
   return percentof
    
      }
     
  allFunctions(30)
  
 
