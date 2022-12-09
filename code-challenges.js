// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// input: number
// output: function containing conditional statements indicated whether temp is below, above, or at boiling point

// input: <212
// output: "42 is below boiling point."

// input: >212
// output: "350 is above boiling point."

// input:  212
// output: "212 is at boiling point."

// Process
// create a function called boilingPointTemp that takes in a number called temp
// if temp is less than 212, return a message `${temp} is belowing boiling point.`
// if temp is greater than 212, return a message `${temp} is above boiling point.`
// if temp is exactly at 212, return a message "212 is at boiling point"

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPointTemp = (temp) => {
    if(temp < 212){
        return `${temp} is below boiling point.`
} else if(temp > 212){
    return `${temp} is above boiling point.`
} else if(temp === 212){
    return `${temp} is at boiling point."`
}
}

console.log(boilingPointTemp(temp2))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// input: numbers, variables
// output: function containing combined total of both variables together

// input:  padres1984WorldSeriesRuns, padres1998WorldSeriesRuns
// output: 9

// Process
// create a new function called padresWorldSeriesRunTotal that takes in the test variables
// use the first variable(padres1984WorldSeriesRuns) with the accessor method of .concat() with the second variable(padres1998WorldSeriesRuns)
// using concat., combine the two variables together into the new function(padresWorldSeriesRunsTotal)
// 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresWorldSeriesRunsTotal = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(padresWorldSeriesRunsTotal.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// input: variables, mutators, and accessors
// output: a new string with "Hotel 2022" reversed

// input: var splitCohort = currentCohort.split("")
// output: ['H', 'o', 't', 'e','l', ' ', '2', '0', '2', '2']

// input: var reverseCohort = splitCohort.reverse()
// output: '2', '2', '0', '2', ' ', 'l', 'e', 't', 'o', 'H'

// input:  var joinCohort = reverseCohort.join("")
// output: 2202 letoH

// Process
// because we want to reverse a string, we would first have to first turn the string into an array
// we can accomplish turning a string into an array by using the accessor .(split). this will take every letter in the string, and place it in array, with every character seperated within quotations and commas.
// declare a new variable to contain our given variable currentCohort so we can attached the .split accessor
// after this has been accomplished, we can go ahead and use the array mutator of .reverse to reverse all our values within our newly formed array. do this by declaring another new variable to contain our last created variable and use .reverse at the end
// lastly, we will use the accessor .join to rejoin all the split characters so that it reads, "2202 letoH". do this by creating a final variable to contain the aforementioned variable followed by .join

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

var splitCohort = currentCohort.split("")
var reverseCohort = splitCohort.reverse()
var joinCohort = reverseCohort.join("")
console.log(joinCohort)


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// input: variables, numbers, and accessor
// output: a number representing the last index of the given value from the specified array

// input: myNumbers.lastIndexOf(givenValue1)
// output: 7

// input: myNumbers.lastIndexOf(givenValue2)
// output: 8

// Process
// since there are multples of the same number, using the given variable of myNumbers, use the accessor .lastIndexOf to get the index value of the specified variable givenValue1
// start off with writing out console.log()
// in the paranthesis, include the given variable followed by the accessor .lastIndexOf
// in the next set up paranthesis put in the number or the variable that you want to know the index number of. in this case, since we are given a variable, plug that in there
// repeat steps for givenValue2


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

console.log(myNumbers.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// input: variable and mutators
// output: an array with San Diego summer and winter weather temperatures listed from largest to smallest

// input: sanDiegoSummerTemperatures.sort(), sanDiegoSummerTemperatures.reverse()
// output: [82, 80, 79, 77, 76, 73, 72]

// input: sanDiegoWinterTemperatures.sort(), sanDiegoWinterTemperatures.reverse()
// output: [68, 67, 66, 66, 62, 59, 59]


// Process
// use mutators to sort the listed numbers in the array from biggest to smallest.
// start with using the variable sanDiegoSummerTemperatures with the mutator .sort() to get your numbers in the array sorted from smallest to greatest
// after numbers have been sorted, follow up with the mutator .reverse() to have the terminal list it from largest to smallest
// repeat for the variable sanDiegoWinterTemperatures

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort()
sanDiegoSummerTemperatures.reverse()
console.log(sanDiegoSummerTemperatures)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort()
sanDiegoWinterTemperatures.reverse()
console.log(sanDiegoWinterTemperatures)
