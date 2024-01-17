'use strict';

let areaOfTriangle;
let a = 5,
  b = 6,
  c = 7;

// semi-perimeter
let semiPerimeter = (a + b + c) / 2;

areaOfTriangle = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - a) *
    (semiPerimeter - b) *
    (semiPerimeter - c)
);
console.log(areaOfTriangle);
