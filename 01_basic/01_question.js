/* 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let currentDay = new Date();
let day = new Date(currentDay).toLocaleString('en-us', { weekday: 'long' });

console.log(`Today is: ${day}.`);

let time = new Date();
console.log(
  `Current time is : ${time.getHours()} ${
    time.getHours() <= 12 ? 'AM' : 'PM'
  } : ${time.getMinutes()} : ${time.getSeconds()}`
);
