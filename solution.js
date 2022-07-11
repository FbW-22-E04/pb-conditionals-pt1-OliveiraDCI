// 1
let int1 = 42;
let int2 = 53;
if (int1 >= 50 && int1 <= 99) {
  console.log("1. ", "true");
} else if (int2 >= 50 && int2 <= 99) {
  console.log("1. ", "true");
}

// 2
let int3 = 50;
if (int1 >= 50 && int1 <= 99) {
  console.log("2. ", "true");
} else if (int2 >= 50 && int2 <= 99) {
  console.log("2. ", "true");
} else if (int3 >= 50 && int3 <= 99) {
  console.log("2. ", "true");
}

// 3
let a = 40;
let b = 50;
let c = 80;

if (a > b && a > c) {
  console.log("3.a ", a);
} else if (b > a && b > c) {
  console.log("3.a ", b);
} else if (c > a && c > b) {
  console.log("3.a ", c);
}

if (int1 > int2 && int1 > int3) {
  console.log("3.b ", int1);
} else if (int2 > int1 && int2 > int3) {
  console.log("3.b ", int2);
} else if (int3 > int1 && int3 > int2) {
  console.log("3.b ", int3);
}

// 4
let str = "thon";
if (str[0] == "P" && str[1] == "y") {
  console.log("4. ", str);
} else {
  console.log("4. ", "Py".concat(str));
}

// 5
const sum = int1 + int2;
if (sum >= 50 && sum <= 80) {
  console.log("5. ", 65);
} else {
  console.log("5. ", 80);
}

// 6
let int4 = 50;
let int5 = 15;
const sumValues = int4 + int5;
const subtractedValues = int4 - int5;
if (sumValues == 8) {
  console.log("6. ", true);
} else if (subtractedValues == 8) {
  console.log("6. ", true);
} else {
  console.log("6. ", false);
}
// 7
if (int4 == 15 || int5 == 15 || sumValues == 15) {
  console.log("7. ", true);
} else {
  console.log("7. ", false);
}

// 8
if (int4 % 7 == 0 || int4 % 11 == 0 || int5 % 7 == 0 || int5 % 11 == 0) {
  console.log("8. ", true);
} else {
  console.log("8. ", false);
}

// 9
const sumResult = int4 + int5;
if (int4 == int5) {
  console.log("9. ", sumResult * 3);
} else {
  console.log("9. ", sumResult);
}

// 10
const difResult = int5 - 19;
if (int5 > 19) {
  console.log("10. ", difResult * 2);
} else {
  console.log("10. ", difResult);
}

// 11
const firstName = "Oliveira";
const age = 36;
if (age < 13) {
  console.log("11. ", firstName + " is a child");
} else if (age >= 13 && age < 20) {
  console.log("11. ", firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("11. ", firstName + " is a young adult");
} else {
  console.log("11. ", firstName + " is a adult");
}

// 12
console.log("12. ", "ok");
