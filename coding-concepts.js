// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: From reading prior notes, this should log 10.
// b) Verify and explain: After running it through terminal, it logs back with the answer 10. At first glance, one may think it would yield back 9, but because it includes the space, it comes back as 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It should come with back with the index value of that string. In this case, it should be the letter, "O" from hello.
// b) Verify and explain: After running it though terminal, it logs back the response of "O". This is because it goes off zero indexing, so assigning the begininng of the string with the value 0 and going up from there. Although the "O" is technically the 5th letter, it is given the value of 4 due to zero indexing.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: I believe this should yield yield the answer "Ruby"
// b) Verify and explain: After running it through terminal, it logged "Ruby". I believe it did this because where the previous questions, they were logged in as string, this question logged it as an array. Since we have two variables set, one being the array, and another with the number, "1", when we run it through terminal, it brings back the value with index 1 assigned to it because we designated we wanted the value that was in the 1 position.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: This should come back with "SATURDAY", "SUNDAY".
// b) Verify and explain: After running it thtough terminal, I realized my assumption was incorrect. It actually told me there was an error in a code. I did researched and realized it gave me an error because .toUpperCase can only be used in a string, and if I would like to use it with an array, it would first have to be put into a function.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: I took a guess with this one, because I'm unsure and don't recall learning about the "typeof", but I believe it will yield the answer "3".
// b) Verify and explain: After running it, I was incorrect. Upon doing research, I learned that the "typeof" is actually an operator that returns what type of variable it is. In this instance, because we are asking for the .length of our variable, .length brings back a numeric value, so in terminal it logs, "number".
