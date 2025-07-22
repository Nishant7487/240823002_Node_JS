/**
 * mathOperations.js
 *
 * This file contains a collection of common mathematical and logical operations.
 * Each operation is implemented as a separate, self-contained function.
 * These functions are designed to be easily imported and used in other Node.js modules.
 *
 * The goal is to make the code as clear and understandable as possible,
 * especially for beginners learning programming logic.
 */

/**
 * Checks if a given number is Even or Odd.
 *
 * How it works:
 * - An even number is any integer that can be divided by 2 with no remainder.
 * - An odd number is any integer that, when divided by 2, leaves a remainder of 1.
 * - We use the modulo operator (%) to find the remainder of a division.
 *
 * @param {number} num - The integer number to check.
 * @returns {string} Returns "Even" if the number is even, otherwise returns "Odd".
 * Returns an "Error" message if the input is not a valid integer.
 */
function checkEvenOrOdd(num) {
  // First, we check if the input 'num' is actually a number and a whole number (integer).
  // If it's not, we return an error message to prevent unexpected behavior.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer (a whole number).";
  }

  // The core logic:
  // If 'num' divided by 2 has a remainder of 0, it's even.
  if (num % 2 === 0) {
    return "Even";
  } else {
    // Otherwise, it's odd.
    return "Odd";
  }
}

/**
 * Finds the Maximum of Two Numbers.
 *
 * How it works:
 * - This function compares two numbers and returns the one with the larger value.
 * - It uses the built-in `Math.max()` function, which is a simple way to find the largest
 * among a set of numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number|string} Returns the larger of the two numbers.
 * Returns an "Error" message if either input is not a valid number.
 */
function findMaxOfTwoNumbers(num1, num2) {
  // We ensure both inputs are valid numbers before proceeding.
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Error: Both inputs must be numbers.";
  }

  // Math.max() directly returns the largest of the two numbers.
  return Math.max(num1, num2);
}

/**
 * Checks if a given year is a Leap Year.
 *
 * How it works (Leap Year Rules):
 * 1. A year is a leap year if it is perfectly divisible by 4.
 * 2. EXCEPTION: If the year is divisible by 100, it is NOT a leap year...
 * 3. ...UNLESS it is also perfectly divisible by 400.
 *
 * @param {number} year - The integer representing the year to check.
 * @returns {string} Returns "Leap Year" or "Not a Leap Year" based on the rules.
 * Returns an "Error" message if the input is not a positive integer.
 */
function checkLeapYear(year) {
  // Validate input: It must be a whole number and not negative.
  if (typeof year !== 'number' || !Number.isInteger(year) || year < 0) {
    return "Error: Input must be a positive integer representing a year.";
  }

  // Apply the leap year rules:
  // (Divisible by 4 AND not divisible by 100) OR (Divisible by 400)
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

/**
 * Calculates the Sum of the First 'n' Natural Numbers.
 *
 * How it works:
 * - Natural numbers are positive integers starting from 1 (1, 2, 3, ...).
 * - This function calculates the sum of all natural numbers from 1 up to 'n'.
 * - It uses a well-known mathematical formula: `n * (n + 1) / 2`. This is very efficient
 * compared to adding numbers one by one, especially for large 'n'.
 *
 * @param {number} n - The upper limit (inclusive) for the sum. Must be a non-negative integer.
 * @returns {number|string} Returns the sum of natural numbers up to 'n'.
 * Returns an "Error" message if the input is not a non-negative integer.
 */
function sumOfNaturalNumbers(n) {
  // Validate input: Must be a whole number and not negative.
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return "Error: Input must be a non-negative integer (0 or a positive whole number).";
  }

  // Apply the formula to calculate the sum directly.
  return (n * (n + 1)) / 2;

  /*
  // Alternative (Iterative Approach - for understanding loops, but less efficient for large 'n'):
  // You could also calculate the sum by looping:
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum += i; // Add each number from 1 to n
  // }
  // return sum;
  */
}

/**
 * Calculates the Factorial of a Number.
 *
 * How it works:
 * - The factorial of a non-negative integer 'n' (written as n!) is the product
 * of all positive integers less than or equal to 'n'.
 * For example, 4! = 4 * 3 * 2 * 1 = 24.
 * - A special case: 0! (factorial of zero) is defined as 1.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number|string} Returns the factorial of 'n'.
 * Returns an "Error" message if the input is not a non-negative integer.
 */
function factorialOfNumber(n) {
  // Validate input: Must be a whole number and not negative.
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return "Error: Input must be a non-negative integer.";
  }

  // Handle the base case: Factorial of 0 is 1.
  if (n === 0) {
    return 1;
  }

  // Initialize a variable to store the product (factorial). We start with 1.
  let factorial = 1;
  // Loop from 1 up to 'n'.
  for (let i = 1; i <= n; i++) {
    // In each step, multiply 'factorial' by the current number 'i'.
    factorial *= i; // This is a shorthand for: factorial = factorial * i;
  }
  // After the loop finishes, 'factorial' will hold the final product.
  return factorial;
}

/**
 * Prints the Multiplication Table of a Number up to 10.
 *
 * How it works:
 * - It generates the products of the input number with integers from 1 to 10.
 * - It stores each line (e.g., "3 x 1 = 3") in an array and then joins them
 * with newline characters to form a multi-line string.
 *
 * @param {number} num - The integer number for which to generate the table.
 * @returns {string} Returns a formatted string representing the multiplication table.
 * Returns an "Error" message if the input is not a valid integer.
 */
function printMultiplicationTable(num) {
  // Validate input: Must be a whole number.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer.";
  }

  // An array to hold each line of the multiplication table.
  let tableLines = [];
  // Loop from 1 to 10.
  for (let i = 1; i <= 10; i++) {
    // Calculate the product and format the string for each line.
    tableLines.push(`${num} x ${i} = ${num * i}`);
  }
  // Join all the lines in the array with a newline character (\n)
  // so they appear on separate lines when printed.
  return tableLines.join('\n');
}

/**
 * Reverses the Digits of a Number.
 *
 * How it works:
 * - Converts the number to a string.
 * - Splits the string into an array of individual characters (digits).
 * - Reverses the order of elements in this array.
 * - Joins the array back into a string.
 * - Converts the reversed string back into a number.
 * - Handles negative numbers by reversing the absolute value and then re-applying the negative sign.
 *
 * @param {number} num - The integer number to reverse.
 * @returns {number|string} Returns the number with its digits reversed.
 * Returns an "Error" message if the input is not a valid integer.
 */
function reverseNumber(num) {
  // Validate input: Must be a whole number.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer.";
  }

  // Step 1: Get the absolute value of the number to handle negative signs later.
  // Convert the absolute number to a string.
  const numAsString = String(Math.abs(num));

  // Step 2: Split the string into an array of characters (digits).
  const arrayOfDigits = numAsString.split(''); // e.g., "1234" becomes ['1', '2', '3', '4']

  // Step 3: Reverse the order of elements in the array.
  arrayOfDigits.reverse(); // e.g., ['1', '2', '3', '4'] becomes ['4', '3', '2', '1']

  // Step 4: Join the array back into a single string.
  const reversedString = arrayOfDigits.join(''); // e.g., ['4', '3', '2', '1'] becomes "4321"

  // Step 5: Convert the reversed string back to an integer.
  const reversedInteger = parseInt(reversedString, 10); // "4321" becomes 4321

  // Step 6: If the original number was negative, make the reversed number negative too.
  return num < 0 ? -reversedInteger : reversedInteger;
}

/**
 * Checks if a Number is a Palindrome.
 *
 * How it works:
 * - A palindrome is a number that reads the same forwards and backwards (e.g., 121, 505).
 * - This function reverses the input number and then compares the reversed number
 * with the original number.
 *
 * @param {number} num - The integer number to check.
 * @returns {string} Returns "Palindrome" if the number is a palindrome, otherwise "Not a Palindrome".
 * Returns an "Error" message if the input is not a valid integer.
 */
function palindromeCheck(num) {
  // Validate input: Must be a whole number.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer.";
  }

  // Store the original number to compare with later.
  const originalNum = num;
  // Initialize a variable to build the reversed number.
  let reversedNum = 0;
  // Use a temporary variable to manipulate the number without changing the original.
  // We use Math.abs() to handle negative numbers correctly, as -121 reversed is -121, but
  // the palindrome check is usually on the digits themselves.
  let tempNum = Math.abs(num);

  // Loop as long as 'tempNum' is greater than 0.
  while (tempNum > 0) {
    // Get the last digit of 'tempNum' using the modulo operator (%).
    const lastDigit = tempNum % 10; // e.g., for 123, lastDigit = 3

    // Build the reversed number:
    // Shift existing digits to the left (multiply by 10) and add the new lastDigit.
    reversedNum = reversedNum * 10 + lastDigit; // e.g., 0*10+3=3; 3*10+2=32; 32*10+1=321

    // Remove the last digit from 'tempNum' by integer division (Math.floor).
    tempNum = Math.floor(tempNum / 10); // e.g., 123/10=12; 12/10=1; 1/10=0
  }

  // Compare the absolute value of the original number with the reversed number.
  if (Math.abs(originalNum) === reversedNum) {
    return "Palindrome";
  } else {
    return "Not a Palindrome";
  }
}

/**
 * Checks if a number is a Prime Number.
 *
 * How it works:
 * - A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself (e.g., 2, 3, 5, 7, 11).
 * - We check for divisibility by numbers from 2 up to the square root of the input number.
 * If any number in this range divides the input number evenly, it's not prime.
 *
 * @param {number} num - The non-negative integer to check.
 * @returns {string} Returns "Prime" if the number is prime, otherwise "Not Prime".
 * Returns an "Error" message if the input is not a non-negative integer.
 */
function checkPrimeNumber(num) {
  // Validate input: Must be a non-negative whole number.
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return "Error: Input must be a non-negative integer.";
  }

  // Numbers less than or equal to 1 are not prime by definition.
  if (num <= 1) {
    return "Not Prime";
  }

  // Loop from 2 up to the square root of 'num'.
  // We only need to check up to the square root because if 'num' has a divisor
  // greater than its square root, it must also have a divisor smaller than its square root.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If 'num' is perfectly divisible by 'i' (meaning no remainder), then 'num' is not prime.
    if (num % i === 0) {
      return "Not Prime";
    }
  }

  // If the loop completes without finding any divisors, the number is prime.
  return "Prime";
}

/**
 * Counts the Digits in a Number.
 *
 * How it works:
 * - Converts the number to its absolute string representation.
 * - The length of this string is the count of its digits.
 *
 * @param {number} num - The integer number to count digits for.
 * @returns {number|string} Returns the count of digits.
 * Returns an "Error" message if the input is not a valid integer.
 */
function countDigitsInNumber(num) {
  // Validate input: Must be a whole number.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer.";
  }
  // Convert the absolute value of the number to a string.
  // Using Math.abs() ensures that a negative sign doesn't count as a digit.
  const numAsString = String(Math.abs(num));
  // The length of the string is the number of digits.
  return numAsString.length;
}

/**
 * Calculates the Sum of Digits in a Number.
 *
 * How it works:
 * - Extracts each digit of the number one by one.
 * - Adds each extracted digit to a running total.
 * - This is done by repeatedly taking the number modulo 10 (to get the last digit)
 * and then dividing the number by 10 (to remove the last digit).
 *
 * @param {number} num - The integer number whose digits are to be summed.
 * @returns {number|string} Returns the sum of its digits.
 * Returns an "Error" message if the input is not a valid integer.
 */
function sumOfDigits(num) {
  // Validate input: Must be a whole number.
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "Error: Input must be an integer.";
  }

  let sum = 0;
  // Use a temporary variable for calculations, working with the absolute value.
  let tempNum = Math.abs(num);

  // Loop as long as 'tempNum' is greater than 0.
  while (tempNum > 0) {
    // Get the last digit: tempNum % 10.
    const lastDigit = tempNum % 10;
    // Add the last digit to our running sum.
    sum += lastDigit; // This is a shorthand for: sum = sum + lastDigit;

    // Remove the last digit from tempNum: Math.floor(tempNum / 10).
    tempNum = Math.floor(tempNum / 10);
  }
  // Return the total sum of digits.
  return sum;
}

/**
 * Checks if a Number is an Armstrong Number.
 *
 * How it works:
 * - An Armstrong number (also known as a narcissistic number) is a number that is
 * equal to the sum of its own digits, each raised to the power of the number of digits.
 * For example, 153 is an Armstrong number because:
 * Number of digits = 3
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
 *
 * @param {number} num - The non-negative integer to check.
 * @returns {string} Returns "Armstrong" if it is, otherwise "Not Armstrong".
 * Returns an "Error" message if the input is not a non-negative integer.
 */
function checkArmstrongNumber(num) {
  // Validate input: Must be a non-negative whole number.
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    return "Error: Input must be a non-negative integer.";
  }

  // Convert the number to a string to easily get its digits and count.
  const numStr = String(num);
  // Get the number of digits, which will be the power for each digit.
  const numDigits = numStr.length;
  let sumOfPowers = 0; // Initialize sum to 0.

  // Loop through each character (digit) in the number string.
  for (let i = 0; i < numDigits; i++) {
    // Convert the character digit back to an integer.
    const digit = parseInt(numStr[i], 10);
    // Raise the digit to the power of 'numDigits' and add it to the sum.
    sumOfPowers += Math.pow(digit, numDigits);
  }

  // Compare the calculated sum with the original number.
  if (sumOfPowers === num) {
    return "Armstrong";
  } else {
    return "Not Armstrong";
  }
}

/**
 * Generates the First 'n' Fibonacci Numbers.
 *
 * How it works:
 * - The Fibonacci sequence starts with 0 and 1.
 * - Each subsequent number is the sum of the two preceding ones.
 * (e.g., 0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), ...)
 *
 * @param {number} n - The number of Fibonacci terms to generate. Must be a non-negative integer.
 * @returns {string|string} Returns a string of Fibonacci numbers separated by spaces.
 * Returns an "Error" message if the input is not a non-negative integer.
 */
function generateFibonacciSeries(n) {
  // Validate input: Must be a non-negative whole number.
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return "Error: Input must be a non-negative integer.";
  }

  // Handle edge cases for n = 0 and n = 1.
  if (n === 0) {
    return ""; // No numbers in the series if n is 0.
  }
  if (n === 1) {
    return "0"; // The first term is 0.
  }

  // Initialize the series with the first two Fibonacci numbers.
  let series = [0, 1];
  // Loop from the third term (index 2) up to 'n'.
  for (let i = 2; i < n; i++) {
    // Calculate the next Fibonacci number by adding the previous two.
    const nextFib = series[i - 1] + series[i - 2];
    // Add the new number to the series.
    series.push(nextFib);
  }
  // Join all numbers in the array with a space to form a single string.
  return series.join(' ');
}

/**
 * Checks if a Character is a Vowel or Consonant.
 *
 * How it works:
 * - Determines if a single given alphabet character is one of the vowels (a, e, i, o, u).
 * - It is case-insensitive (handles both 'A' and 'a').
 *
 * @param {string} char - The single alphabet character to check.
 * @returns {string} Returns "Vowel" if it's a vowel, otherwise "Consonant".
 * Returns an "Error" message if the input is not a single alphabet character.
 */
function checkVowelOrConsonant(char) {
  // Validate input: Must be a string of length 1 and an alphabet character.
  if (typeof char !== 'string' || char.length !== 1 || !/[a-zA-Z]/.test(char)) {
    return "Error: Input must be a single alphabet character (e.g., 'a', 'B').";
  }

  // Convert the character to lowercase to make the check case-insensitive.
  const lowerChar = char.toLowerCase();
  // Define an array of vowels.
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Check if the lowercase character is present in the 'vowels' array.
  if (vowels.includes(lowerChar)) {
    return "Vowel";
  } else {
    return "Consonant";
  }
}

/**
 * Performs Simple Calculator Operations (+, -, *, /).
 *
 * How it works:
 * - Takes two numbers and an operator as input.
 * - Uses a `switch` statement to perform the chosen arithmetic operation.
 * - Includes a check for division by zero.
 *
 * @param {number} num1 - The first number.
 * @param {string} operator - The arithmetic operator ('+', '-', '*', '/').
 * @param {number} num2 - The second number.
 * @returns {number|string} Returns the result of the operation.
 * Returns an "Error" message for invalid inputs or division by zero.
 */
function simpleCalculator(num1, operator, num2) {
  // Validate number inputs.
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Error: Both numbers must be valid.";
  }
  // Validate operator input.
  if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
    return "Error: Invalid operator. Please use '+', '-', '*', or '/'.";
  }

  // Use a switch statement to perform the correct operation based on the operator.
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // Special check for division by zero.
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      // This case should ideally not be reached due to the operator validation above.
      return "Error: Unknown operator encountered.";
  }
}

/**
 * Finds the Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two numbers.
 *
 * How it works (Euclidean Algorithm):
 * - The GCD is the largest positive integer that divides both numbers without a remainder.
 * - The Euclidean algorithm is an efficient method to compute the GCD.
 * - It repeatedly applies the property: `GCD(a, b) = GCD(b, a % b)` until `b` becomes 0.
 * At that point, `a` is the GCD.
 *
 * @param {number} num1 - The first non-negative integer.
 * @param {number} num2 - The second non-negative integer.
 * @returns {number|string} Returns the GCD of the two numbers.
 * Returns an "Error" message if inputs are not non-negative integers.
 */
function findGCD(num1, num2) {
  // Validate inputs: Must be non-negative whole numbers.
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || !Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return "Error: Both inputs must be non-negative integers.";
  }

  // Implement the Euclidean algorithm.
  // The loop continues as long as num2 is not zero.
  while (num2 !== 0) {
    // Store the current value of num2 in a temporary variable.
    let temp = num2;
    // Update num2 to be the remainder of num1 divided by num2.
    num2 = num1 % num2;
    // Update num1 to be the old value of num2 (stored in temp).
    num1 = temp;
  }
  // When num2 becomes 0, num1 holds the GCD.
  return num1;
}

/**
 * Checks if a Number is a Perfect Number.
 *
 * How it works:
 * - A perfect number is a positive integer that is equal to the sum of its proper positive divisors
 * (divisors excluding the number itself).
 * For example, 28 is a perfect number because its divisors are 1, 2, 4, 7, 14.
 * And 1 + 2 + 4 + 7 + 14 = 28.
 *
 * @param {number} num - The positive integer to check.
 * @returns {string} Returns "Perfect" if it is, otherwise "Not Perfect".
 * Returns an "Error" message if the input is not a positive integer.
 */
function checkPerfectNumber(num) {
  // Validate input: Must be a positive whole number.
  if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
    return "Error: Input must be a positive integer.";
  }
  // 1 is not considered a perfect number.
  if (num === 1) {
    return "Not Perfect";
  }

  let sumOfDivisors = 1; // Start sum with 1, as 1 is a divisor of all positive integers.

  // Loop from 2 up to the square root of 'num'.
  // This optimizes the search for divisors.
  for (let i = 2; i * i <= num; i++) {
    // If 'i' divides 'num' evenly:
    if (num % i === 0) {
      sumOfDivisors += i; // Add 'i' to the sum.
      // If 'i' is not the square root of 'num' (meaning 'i' and 'num/i' are different divisors),
      // add the other divisor (num / i) as well.
      if (i * i !== num) {
        sumOfDivisors += num / i;
      }
    }
  }

  // Compare the sum of divisors with the original number.
  if (sumOfDivisors === num) {
    return "Perfect";
  } else {
    return "Not Perfect";
  }
}

/**
 * Prints All Positive Divisors of a Number.
 *
 * How it works:
 * - Iterates from 1 up to the number itself.
 * - If a number in this range divides the input number evenly, it's a divisor.
 * - Collects all such divisors and returns them as a space-separated string.
 *
 * @param {number} num - The positive integer for which to find divisors.
 * @returns {string|string} Returns a string of space-separated divisors.
 * Returns an "Error" message if the input is not a positive integer.
 */
function printAllDivisors(num) {
  // Validate input: Must be a positive whole number.
  if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
    return "Error: Input must be a positive integer.";
  }

  let divisors = []; // An array to store the found divisors.
  // Loop from 1 up to the number itself.
  for (let i = 1; i <= num; i++) {
    // If 'num' is perfectly divisible by 'i' (remainder is 0), then 'i' is a divisor.
    if (num % i === 0) {
      divisors.push(i); // Add 'i' to our list of divisors.
    }
  }
  // Join all the divisors in the array with a space.
  return divisors.join(' ');
}

/**
 * Checks if a Number is Positive, Negative, or Zero.
 *
 * How it works:
 * - Compares the input number to 0 to determine its sign.
 *
 * @param {number} num - The number to check.
 * @returns {string} Returns "Positive", "Negative", or "Zero".
 * Returns an "Error" message if the input is not a valid number.
 */
function checkPositiveNegativeOrZero(num) {
  // Validate input: Must be a number.
  if (typeof num !== 'number') {
    return "Error: Input must be a number.";
  }

  // Check the value against zero.
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    // If it's not greater than 0 and not less than 0, it must be 0.
    return "Zero";
  }
}

/**
 * Computes Power (Exponentiation): 'a' raised to the power 'b' (a^b).
 *
 * How it works:
 * - Calculates the result of a base number raised to an exponent.
 * - Uses the built-in `Math.pow()` function for direct calculation.
 *
 * @param {number} base - The base number (a). Can be any number.
 * @param {number} exponent - The integer exponent (b). Must be a whole number.
 * @returns {number|string} Returns the result of a^b.
 * Returns an "Error" message if inputs are invalid.
 */
function findPower(base, exponent) {
  // Validate inputs: base can be any number, exponent must be a whole number.
  if (typeof base !== 'number' || typeof exponent !== 'number' || !Number.isInteger(exponent)) {
    return "Error: Base must be a number, exponent must be an integer (a whole number).";
  }
  // Use the Math.pow() function to calculate base raised to the power of exponent.
  return Math.pow(base, exponent);
}


// Export all the functions from this file.
// This makes them available to other JavaScript files that 'require' this module.
module.exports = {
  checkEvenOrOdd,
  findMaxOfTwoNumbers,
  checkLeapYear,
  sumOfNaturalNumbers,
  factorialOfNumber,
  printMultiplicationTable,
  reverseNumber,
  palindromeCheck,
  checkPrimeNumber,
  countDigitsInNumber,
  sumOfDigits,
  checkArmstrongNumber,
  generateFibonacciSeries,
  checkVowelOrConsonant,
  simpleCalculator,
  findGCD,
  checkPerfectNumber,
  printAllDivisors,
  checkPositiveNegativeOrZero,
  findPower
};
