'use strict';

let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

// in mm-dd-yyyy format
console.log(`${month}-${date}-${year}`);

// in mm/dd/yyyy format
console.log(currentDate.toLocaleDateString());

// in dd-mm-yyyy format
console.log(`${date}-${month}-${year}`);

// in dd/mm/yyyy format
console.log(`${date}/${month}/${year}`);
