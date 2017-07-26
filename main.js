// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  var max1 = Math.max(num1, num2)
  return max1
}

console.log(max(7,9));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(){
  var max = Math.max(num1, num2, num3);
  return max;
}

console.log(maxOfThree(20,3,5));
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(letter1){
    if (letter1 === "a") {
    return true
  } else if (letter1 === "e") {
    return true
  } else if (letter1 === "i") {
    return true
  } else if (letter1 === "o") {
    return true
  } else if (letter1 === "u") {
    return true
  } else {
    return false
  }
  }

console.log(isVowel("t"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2) {
  var add = num1+num2
  return add
}

console.log(sum(3,9));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3) {

  return ((num1 + num2 + num3)/3)
  }


console.log(avg(4,6,2));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x) {
  return x.length
}

console.log(getLength("Hello"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
    if (num1 < num2) {
      return true
    } else {
      return false
    }
}

console.log(greaterThan(3,9));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet (x) {
  return ("Hello, " + x)
}

console.log(greet("AJ!"));




// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (a, b, c, d){
  return a+b+c+d
}

console.log(madlib("quick brown ", "fox jumps ", "over the", " fence"));
