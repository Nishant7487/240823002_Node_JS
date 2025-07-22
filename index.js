/**
 * main.js
 * This file demonstrates how to import and use the functions
 * from the 'mathOperations.js' file in a Node.js project.
 * It uses the 'readline' module to make the functions interactive,
 * allowing the user to select which operation to perform from a menu.
 *
 * To run this file:
 * 1. Make sure you have Node.js installed.
 * 2. Save 'mathOperations.js' and 'main.js' in the same directory.
 * 3. Open your terminal or command prompt in that directory.
 * 4. Run the command: node main.js
 */

// Import the readline module for interactive input
const readline = require('readline');
// Import all functions from mathOperations.js
const mathOps = require('./mathOperations');

// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Promisified version of rl.question to use with async/await.
 * @param {string} query - The question to ask the user.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 */
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

/**
 * Displays the main menu of available operations.
 */
function displayMenu() {
  console.log("\n--- Choose an Operation ---");
  console.log(" 1. Check Even or Odd");
  console.log(" 2. Find the Maximum of Two Numbers");
  console.log(" 3. Check Leap Year");
  console.log(" 4. Sum of Natural Numbers");
  console.log(" 5. Factorial of a Number");
  console.log(" 6. Print Multiplication Table");
  console.log(" 7. Reverse a Number");
  console.log(" 8. Palindrome Check (Number)");
  console.log(" 9. Check Prime Number");
  console.log("10. Count Digits in a Number");
  console.log("11. Sum of Digits");
  console.log("12. Check Armstrong Number");
  console.log("13. Generate Fibonacci Series");
  console.log("14. Check Vowel or Consonant");
  console.log("15. Simple Calculator");
  console.log("16. Find GCD (HCF)");
  console.log("17. Check Perfect Number");
  console.log("18. Print All Divisors");
  console.log("19. Number is Positive, Negative or Zero");
  console.log("20. Find Power (Exponentiation)");
  console.log("21. Exit");
  console.log("---------------------------\n");
}

/**
 * Handles the user's choice and calls the corresponding function.
 * @param {number} choice - The user's menu choice.
 */
async function handleChoice(choice) {
  let result;
  let num1, num2, year, n, char, operator, base, exponent;

  switch (choice) {
    case 1: // Check Even or Odd
      num1 = parseInt(await askQuestion("Enter an integer: "), 10);
      result = mathOps.checkEvenOrOdd(num1);
      console.log(`Result: ${result}`);
      break;
    case 2: // Find the Maximum of Two Numbers
      num1 = parseFloat(await askQuestion("Enter the first number: "));
      num2 = parseFloat(await askQuestion("Enter the second number: "));
      result = mathOps.findMaxOfTwoNumbers(num1, num2);
      console.log(`Result: ${result}`);
      break;
    case 3: // Check Leap Year
      year = parseInt(await askQuestion("Enter a year (e.g., 2020): "), 10);
      result = mathOps.checkLeapYear(year);
      console.log(`Result: ${result}`);
      break;
    case 4: // Sum of Natural Numbers
      n = parseInt(await askQuestion("Enter a non-negative integer (n): "), 10);
      result = mathOps.sumOfNaturalNumbers(n);
      console.log(`Result: ${result}`);
      break;
    case 5: // Factorial of a Number
      n = parseInt(await askQuestion("Enter a non-negative integer (n): "), 10);
      result = mathOps.factorialOfNumber(n);
      console.log(`Result: ${result}`);
      break;
    case 6: // Print Multiplication Table
      num1 = parseInt(await askQuestion("Enter a number for its multiplication table: "), 10);
      result = mathOps.printMultiplicationTable(num1);
      console.log(`Result:\n${result}`);
      break;
    case 7: // Reverse a Number
      num1 = parseInt(await askQuestion("Enter an integer to reverse: "), 10);
      result = mathOps.reverseNumber(num1);
      console.log(`Result: ${result}`);
      break;
    case 8: // Palindrome Check (Number)
      num1 = parseInt(await askQuestion("Enter an integer to check if it's a palindrome: "), 10);
      result = mathOps.palindromeCheck(num1);
      console.log(`Result: ${result}`);
      break;
    case 9: // Check Prime Number
      num1 = parseInt(await askQuestion("Enter a non-negative integer to check if it's prime: "), 10);
      result = mathOps.checkPrimeNumber(num1);
      console.log(`Result: ${result}`);
      break;
    case 10: // Count Digits in a Number
      num1 = parseInt(await askQuestion("Enter an integer to count its digits: "), 10);
      result = mathOps.countDigitsInNumber(num1);
      console.log(`Result: ${result}`);
      break;
    case 11: // Sum of Digits
      num1 = parseInt(await askQuestion("Enter an integer to sum its digits: "), 10);
      result = mathOps.sumOfDigits(num1);
      console.log(`Result: ${result}`);
      break;
    case 12: // Check Armstrong Number
      num1 = parseInt(await askQuestion("Enter a non-negative integer to check if it's an Armstrong number: "), 10);
      result = mathOps.checkArmstrongNumber(num1);
      console.log(`Result: ${result}`);
      break;
    case 13: // Generate Fibonacci Series
      n = parseInt(await askQuestion("Enter the number of Fibonacci terms to generate: "), 10);
      result = mathOps.generateFibonacciSeries(n);
      console.log(`Result: ${result}`);
      break;
    case 14: // Check Vowel or Consonant
      char = await askQuestion("Enter a single alphabet character: ");
      result = mathOps.checkVowelOrConsonant(char);
      console.log(`Result: ${result}`);
      break;
    case 15: // Simple Calculator
      num1 = parseFloat(await askQuestion("Enter the first number: "));
      operator = await askQuestion("Enter an operator (+, -, *, /): ");
      num2 = parseFloat(await askQuestion("Enter the second number: "));
      result = mathOps.simpleCalculator(num1, operator, num2);
      console.log(`Result: ${result}`);
      break;
    case 16: // Find GCD (HCF)
      num1 = parseInt(await askQuestion("Enter the first non-negative integer: "), 10);
      num2 = parseInt(await askQuestion("Enter the second non-negative integer: "), 10);
      result = mathOps.findGCD(num1, num2);
      console.log(`Result: ${result}`);
      break;
    case 17: // Check Perfect Number
      num1 = parseInt(await askQuestion("Enter a positive integer to check if it's a perfect number: "), 10);
      result = mathOps.checkPerfectNumber(num1);
      console.log(`Result: ${result}`);
      break;
    case 18: // Print All Divisors
      num1 = parseInt(await askQuestion("Enter a positive integer to print its divisors: "), 10);
      result = mathOps.printAllDivisors(num1);
      console.log(`Result: ${result}`);
      break;
    case 19: // Number is Positive, Negative or Zero
      num1 = parseFloat(await askQuestion("Enter a number: "));
      result = mathOps.checkPositiveNegativeOrZero(num1);
      console.log(`Result: ${result}`);
      break;
    case 20: // Find Power (Exponentiation)
      base = parseFloat(await askQuestion("Enter the base number: "));
      exponent = parseInt(await askQuestion("Enter the integer exponent: "), 10);
      result = mathOps.findPower(base, exponent);
      console.log(`Result: ${result}`);
      break;
    case 21: // Exit
      console.log("Exiting program. Goodbye!");
      rl.close();
      process.exit(0); // Terminate the process
    default:
      console.log("Invalid choice. Please enter a number between 1 and 21.");
  }
}

/**
 * Main function to start the interactive menu.
 */
async function startProgram() {
  console.log("Welcome to the Programming Logic Demonstrations!");
  let running = true;
  while (running) {
    displayMenu();
    const choice = parseInt(await askQuestion("Enter your choice: "), 10);
    await handleChoice(choice);
    // Add a small delay or prompt before showing the menu again
    if (choice !== 21) {
        await askQuestion("Press Enter to continue...");
    }
  }
}

// Start the program
startProgram();
