function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(3);
console.log('hours to minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var math1 = addAndMultiplyBy5(10, 5);
console.log('math1:', math1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var math2 = multiplyAndDivideBy5(35, 10);
console.log('math2:', math2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var math3 = subtractTwoNumbers(22, 7);
console.log('math3:', math3);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Joseph', 'Bravo');
console.log('full name:', fullName);

function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log('cubed:', cubed);
