/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// const firstName = "Joseph";
// const lastName = "Joestar";
// const thisYear = 1990;
// const birthYear = 1965;
// const fullName = firstName + " " + lastName
// const age = thisYear - birthYear

// const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old."



// Add your code right below, good luck!
const firstName = "Joseph";
const lastName = "Joestar";
const thisYear = 1990;
const birthYear = 1965;
const fullName = firstName + " " + lastName
const age = thisYear - birthYear

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`

// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
