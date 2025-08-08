// Exercise 1: Variables and Data Types
// Complete each function according to the instructions

/**
 * Task 1: Create Person Info
 * Create and return an object with the following properties:
 * - name: "Alex Johnson"
 * - age: 28
 * - city: "New York"
 * - isEmployed: true
 */
function createPersonInfo() {
  // TODO: Create and return an object with the specified properties
   const person = {
    name: "Alex Johnson",
    age: 28,
    city: "New York",
    isEmployed: true
  };
  return person;
}

/**
 * Task 2: Calculate Age
 * Given a birth year, calculate and return the current age
 * Assume current year is 2024
 * @param {number} birthYear - The year the person was born
 * @returns {number} The calculated age
 */
function calculateAge(birthYear) {
  // TODO: Calculate age by subtracting birth year from 2024
  const currentYear = 2024;
  return currentYear - birthYear;
}

/**
 * Task 3: Format Full Name
 * Combine first and last name with proper formatting
 * @param {string} Alex - The first name
 * @param {string} Johnson - The last name
 * @returns {string} Full name in format "Alex Johnson"
 */
function formatFullName(Alex, Johnson) {
  // TODO: Combine first and last name with a space between them
  return Alex + " " + Johnson; 
}

/**
 * Task 4: Check Adult Status
 * Determine if a person is an adult (18 years or older)
 * @param {number} age - The person's age
 * @returns {boolean} true if adult (18+), false otherwise
 */
function checkAdult(age) {
  // TODO: Return true if age is 18 or greater, false otherwise
  return age >= 18;
}

/**
 * Task 5: Convert Temperature
 * Convert temperature from Celsius to Fahrenheit
 * Formula: F = (C × 9/5) + 32
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
function convertTemperature(celsius) {
  // TODO: Convert Celsius to Fahrenheit using the formula
  return (celsius * 9/5) + 32;
}

/**
 * Task 6: Create Greeting
 * Generate a personalized greeting message
 * @param {string} name - The person's name
 * @param {string} timeOfDay - "morning", "afternoon", or "evening"
 * @returns {string} Greeting in format "Good [timeOfDay], [name]!"
 */
function createGreeting(name, timeOfDay) {
  // TODO: Create a greeting message using template literals or string concatenation
  return `Good ${timeOfDay}, ${name}!`;
}

// DO NOT MODIFY: Export functions for testing
module.exports = {
  createPersonInfo,
  calculateAge,
  formatFullName,
  checkAdult,
  convertTemperature,
  createGreeting
};
