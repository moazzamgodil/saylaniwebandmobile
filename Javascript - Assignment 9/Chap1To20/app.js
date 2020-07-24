// ------------------------------Chapter 1 ------------------------------//

// Task 1

// alert("Welcome to my website!");



// Task 2

// alert("Error! Please enter a valid password.");



// Task 3

// alert("Welcome to Js Land... \nHappy Coding");



// Task 4

// alert("Welcome to Js Land...");
// alert("Happy Coding!")



// Task 5

// console.log(alert("Hello... I can run JS through my web browser's console"));



// Task 6

// Placement of < script ></script > element Working... :)




// ------------------------------Chapter 2 ------------------------------//

// Task 1

// var username;



// Task 2

// var myName = "Moazzam Ahmed Godil";



// Task 3

// var message;
// message = "Hello World";
// alert(message);



// Task 4

// var name = "Moazzam Ahmed Godil";
// var age = "23";
// var course = "Certified Mobile Application Development";

// alert(name);
// alert(age);
// alert(course);



// Task 5

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizza);



// Task 6

// var email = "moazzamgodil@gmail.com";
// alert("My email address is " + email);



// Task 7

// var book = "A Smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);



// Task 8

// document.write("Yah! I can write HTML content through JavaScript");



// Task 9

// alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");




// ------------------------------Chapter 3 ------------------------------//

// Task 1

// var age = 23;
// alert("I am " + age + " years old");



// Task 2

// var visit = 14;
// alert("You have visited this site " + visit + " times");



// Task 3
// var birthYear = 1996;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");



// Task 4

// var name = prompt("Enter your name");
// var product = prompt("Enter product title");
// var quantity = +prompt("Enter quantity");
// document.write(name + " ordered " + quantity + " " + product + " on XYZ Clothing store");




// ------------------------------Chapter 4 ------------------------------//

// Task 1

// var name, age, education;



// Task2

// Legal Variables

// var moazzam;
// var $moazzam;
// var moazzam_ahmed;
// var _moazzam;
// var moazzam12;

// Illegal Variables

// var 10moazzam;
// var moazzam ahmed;
// var * moazzam *;
// var moazzam $ahmed;
// var 10 moazzam



// Task 3

// document.write("<h1>Rules for naming JS variables</h1> <br>");
// document.write("Variable names can only contain numbers $ and _. For example : $my_1stVariable <br>");
// document.write("Variables must begin with a letter, $ or _. For example : $name, _name or name <br>");
// document.write("Variable names are case senstive <br>");
// document.write("Variable names should not be JS keywords");




// ------------------------------Chapter 5 ------------------------------//

// Task 1

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);



// Task 2

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter an operator");
// var num2 = +prompt("Enter second number");

// if (operator == '-') {
//     var res = num1 - num2;
//     document.write("Subtraction of " + num1 + " and " + num2 + " is " + res);
// }
// else if (operator == '*') {
//     var res = num1 * num2;
//     document.write("Multiplication of " + num1 + " and " + num2 + " is " + res);
// }
// else if (operator == '/') {
//     var res = num1 / num2;
//     document.write("Division of " + num1 + " and " + num2 + " is " + res);
// }
// else if (operator == '%') {
//     var res = num1 % num2;
//     document.write("Modulus of " + num1 + " and " + num2 + " is " + res);
// }



// Task 3

// var num;
// document.write("Value after variable declaration is " + num + "<br>");
// num = 5;
// document.write("Initial Value: " + num + "<br>");
// ++num;
// document.write("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");
// --num;
// document.write("Value after decrement is: " + num + "<br>");
// num = num % 3;
// document.write("The remainder is:  " + num);



// Task 4

// var price = 600;
// var cost = price * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + cost + " PKR");



// Task 5

// var num = +prompt("Enter number");
// document.write("Table of " + num + "<br>");

// for (i = 1; i <= 10; i++) {
//     document.write(num + " * " + i + " = " + num * i + "<br>");
// }



// Task 6

// var celsius = +prompt("Enter temperature in Celsius");
// var F = (celsius * 9 / 5) + 32;
// document.write(celsius + "˚C is " + F + "˚F <br>");

// var fahrenheit = +prompt("Enter temperature in Fahrenheit");
// var C = (fahrenheit - 32) * (5 / 9);
// document.write(fahrenheit + "˚F is " + C + "˚C <br>");



// Task 7

// var item1 = 650;
// var item2 = 100;
// var shipping_charges = 100;

// var quantity1 = +prompt("Enter the Quantity of Item 1");
// var quantity2 = +prompt("Enter the Quantity of Item 2");

// document.write("<h1>Shopping Cart</h1> <br>");
// document.write("Price of item 1 is " + item1 + "<br>");
// document.write("Quantity of item 1 is " + quantity1 + "<br>");
// document.write("Price of Item 2 is " + item2 + "<br>");
// document.write("Quantity of item 2 is " + quantity2 + "<br>");
// document.write("Shipping Charges " + shipping_charges + "<br><br>");

// var total = (item1 * quantity1) + (item2 * quantity2) + 100;

// document.write("Total cost of your order is " + total);



// Task 8

// var total_marks = +prompt("Enter the total marks");
// var obtained_marks = +prompt("Enter the obtained marks");
// var percent = (obtained_marks / total_marks) * 100;

// document.write("<h1>Marks Sheet</h1> <br>")
// document.write("Total marks: " + total_marks + "<br>");
// document.write("Marks obtained: " + obtained_marks + "<br>");
// document.write("Percentage: " + percent + "%");



// Task 9

// var usd = 10;
// var riyal = 25;
// var total = (usd * 104.80) + (28 * riyal);
// document.write("<h1>Currency in PKR</h1> <br>");
// document.write("Total Currency in PKR: " + total);



// Task 10

// var number = 5;
// document.write(((number + 5) * 10) / 2);



// Task 11

// var year = +prompt("Enter the current year");
// var birth_year = +prompt("Enter your birth year");

// age = year - birth_year;

// document.write("<h1>Age Calculator</h1> <br>");
// document.write("Current Year " + year + "<br>");
// document.write("Birth Year " + birth_year + "<br>");
// document.write("Your Age is " + age);



// Task 12

// var radius = +prompt("Enter Radius");
// pi = 3.142;
// circumference = 2 * pi * radius;
// area = pi * radius * radius;

// document.write("<h1>The Geometrizer</h1> <br>");
// document.write("Radius of a circle: " + radius + "<br>")
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);



// Task 13

// var snack = prompt("Enter your favourite snack");
// var current_age = +prompt("Enter your current age");
// var maximum_age = +prompt("Enter your estimate age");
// var est_amount = +prompt("Enter estimated amount per day (as a number)");
// total = (maximum_age - current_age) * est_amount;

// document.write("<h1>The Lifetime Supply Calculator</h1> <br>");
// document.write("Favourite Snack: " + snack + "<br>");
// document.write("Current age: " + current_age + "<br>");
// document.write("Estimated Maximum age: " + maximum_age + "<br>");
// document.write("Amount of snacks per day: " + est_amount + "<br>");
// document.write("You will need " + total + " to last you until the ripe old age of " + maximum_age);




// ------------------------------Chapter 6 - 9 ------------------------------//

// Task 1

// var num = +prompt("Enter a number");
// document.write("Result: <br>");
// document.write("The value of a is: " + num + "<br>");
// document.write("............................ <br>");

// document.write("The value of ++a is: " + (++num) + "<br>");
// document.write("Now the value of a is: " + (num) + "<br><br>");

// document.write("The value of a++ is: " + (num++) + "<br>");
// document.write("Now the value of a is: " + num + "<br><br>");

// document.write("The value of --a is: " + (--num) + "<br>");
// document.write("Now the value of a is: " + num + "<br><br>");

// document.write("The value of a-- is: " + (num--) + "<br>");
// document.write("Now The value of a is: " + num + "<br>");



// Task 2

// var a = 2, b = 1;
// document.write("Value of a is " + a + "<br>");
// document.write("Value of b is " + b + "<br>");
// var result = (--a) - (--b) + (++b) + (b--);
// document.write("Result is " + result);

// Explanation
// --a; => 1
// --a - --b; => 1
// --a - --b + ++b; => 2
// --a - --b + ++b + b--; => 3



// Task 3

// var name = prompt("Enter your name");
// document.write("Welcome " + name);



// Task 4 ??



// Task 5

// var num = +prompt("Enter a table number");
// if (num > 0) {
//     document.write("Table of " + num + "<br><br>");

//     for (i = 1; i <= 10; i++) {
//         document.write(num + " * " + i + " = " + num * i + "<br>");
//     }
// }
// else {
//     document.write("Default Table of 2 <br><br>");

//     for (i = 1; i <= 10; i++) {
//         document.write(2 + " * " + i + " = " + 2 * i + "<br>");
//     }

// }



// Task 6

// var sub1 = prompt("Enter first subject")
// var sub2 = prompt("Enter second subject");
// var sub3 = prompt("Enter third subject");

// var total_marks = 100;

// var obtained1 = +prompt("Enter obtained marks in subject 1");
// var obtained2 = +prompt("Enter obtained marks in subject 2");
// var obtained3 = +prompt("Enter obtained marks in subject 3");

// var total = total_marks * 3;
// var total_obtained = obtained1 + obtained2 + obtained3;
// var percent = ((total_obtained / total) * 100);

// document.write(`
// <table>
// <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
// </tr>
// `);

// document.write(`

// <tr>
// <td>` + sub1 + `</td>
// <td>` + total_marks + `</td>
// <td>` + obtained1 + `</td>
// <td>` + ((obtained1 / total_marks) * 100) + `</td>
// </tr>

// <tr>
// <td>` + sub2 + `</td>
// <td>` + total_marks + `</td>
// <td>` + obtained2 + `</td>
// <td>` + ((obtained2 / total_marks) * 100) + `</td>
// </tr>

// <tr>
// <td>` + sub3 + `</td>
// <td>` + total_marks + `</td>
// <td>` + obtained3 + `</td>
// <td>` + ((obtained3 / total_marks) * 100) + `</td>
// </tr>
// `);

// document.write(`

// <tr>
// <td></td>
// <td>` + total + `</td>
// <td>` + total_obtained + `</td>
// <td>` + percent + `</td>
// </tr>

// </table>
// `);




// ------------------------------Chapter 9 - 11 ------------------------------//

// Task 1

// var city = prompt("Enter City");
// city = city.toLowerCase();

// if (city === "karachi") {
//     document.write("Welcome to city of lights");
// } else {
//     document.write("Welcome to " + city);
// }



// Task 2

// var gender = prompt("Enter your gender");
// gender = gender.toLowerCase();

// if (gender === "male") {
//     document.write("Good morning Sir");
// }
// else if(gender === "female") {
//     document.write("Good morning Ma'am");
// }



// Task 3

// var color = prompt("Enter Color");
// color.toLowerCase();

// if (color === "red") {
//     document.write("Must Stop");
// }
// else if (color === "yellow") {
//     document.write("Ready to move");
// }
// else {
//     document.write("Move Now");
// }



// Task 4

// var fuel = +prompt("Enter Fuel in litres");

// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }



// Task 5

// (a) => Displayed
// var a = 4;
// if (++a === 5) {
//     alert("Given condition for variable a is true");
// }

// (b) => Not Displayed
// var b = 82;
// if (b++ === 8) {
//     alert("Given condition for variable b is true");
// }

// (c) => Displayed
// var c = 12;
// if (c++ === 13) {
//     alert("Condition 1 is true");
// }
// if (c === 13) {
//     alert("Condition 2 is true");
// }
// if (++c < 14) {
//     alert("Condition 3 is true");
// }
// if (c === 14) {
//     alert("Condition 4 is true");
// }

// (d) => Displayed
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === materialCost + laborCost) {
//     alert("The cost equals");
// }

// (e) => Displayed
// if (true) {
//     alert("true");
// }
// if (false) {
//     alert("False");
// }

// (f) => Displayed
// if ("car" < "cat") {
// alert("car is smaller than cat")
// };



// Task 6

// var grade, remarks;

// var subject1 = +prompt("Enter subject 1 marks");
// var subject2 = +prompt("Enter subject 2 marks");
// var subject3 = +prompt("Enter subject 3 marks");
// var total = +prompt("Enter total marks");

// var obtained = subject1 + subject2 + subject3;
// var percent = (obtained / total) * 100;

// if (percent >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percent >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percent >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percent < 60)
// {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1> <br>");
// document.write("Total Marks: " + total + "<br>");
// document.write("Marks Obtained: " + obtained + "<br>");
// document.write("Percentage: " + percent + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");



// Task 7

// var num = 7;
// var guess = +prompt("Enter a number (ranging from 1 to 10)");
// if (guess === num) {
//     document.write("Bingo! Correct answer");
// }
// else if(guess === num+1 || guess === num-1) {
//     document.write("Close enough to the correct answer");   
// }



// Task 8

// var num = +prompt("Enter a number");
// if (num % 3 === 0) {
//     document.write(num + " is divisible by 3");
// }



// Task 9

// var num = +prompt("Enter a number");
// if (num % 2 === 0) {
//     document.write(num + " is Even number")
// } else {
//     document.write(num + " is Odd number")
// }



// Task 10

// var T = +prompt("Enter temperature");
// if (T > 40) {
//     document.write("It is too hot outside.");
// }
// else if (T > 30) {
//     document.write("The Weather today is Normal.");
// }
// else if (T > 20) {
//     document.write("Today’s Weather is cool.");
// }
// else if (T > 10) {
//     document.write("OMG! Today's weather is so cool.");
// }



// Task 11

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter an operator");
// var num2 = +prompt("Enter second number");

// if (operator == '+') {
//     var res = num1 + num2;
// }
// else if (operator == '-') {
//     var res = num1 - num2;
// }
// else if (operator == '*') {
//     var res = num1 * num2;
// }
// else if (operator == '/') {
//     var res = num1 / num2;
// }
// else if (operator == '%') {
//     var res = num1 % num2;
// }

// document.write(num1 + " " + operator + " " + num2 + " = " + res);




// ------------------------------Chapter 12 - 13 ------------------------------//

// Task 1

// var temp = prompt("Enter a number or character");
// temp = temp.charCodeAt(0);

// if (temp >= 65 && temp <= 90) {
//     document.write("It is an uppercase letter");
// } else if (temp >= 97 && temp <= 122) {
//     document.write("It is a lowercase letter");
// }
// else {
//     document.write("It is a number");
// }



// Task 2

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// if (num1 > num2) {
//     document.write(num1 + " is the greater than " + num2);
// }
// else if (num2 > num1) {
//     document.write(num2 + " is the greater than " + num1);
// }
// else {
//     document.write(num1 + " is equals to " + num2);
// }



// Task 3

// var num = +prompt("Enter a number");
// if (num > 0) {
//     document.write(num + " is Positive");
// }
// else if (num < 0) {
//     document.write(num + " is Negative");
// }
// else {
//     document.write(num is Zero");
// }



// Task 4

// var string = prompt("Enter a single character");
// string.toLowerCase;
// if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u") {
//     document.write("True");
// } else {
//     document.write("False");
// }



// Task 5

// var correct = "saylani";
// var password = prompt("Enter Your Password");

// if(password == "") {
//     document.write("Please enter a password");
// }
// else if (password == correct) {
//     document.write("Correct! The password you entered matches the original password");
// }
// else if (password != correct) {
//     document.write("Incorrect password");
// }



// Task 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write(greeting);



// Task 7

// var time = +prompt("Enter time in 24 hour format (like: 1300 for 1pm)");

// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening");
// }
// else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night");
// }




// ------------------------------Chapter 14 - 16 ------------------------------//

// Task 1

// var student_names = [];



// Task 2

// var student_names = {};



// Task 3

// var fruits = ["apple", "mango", "banana"];



// Task 4

// var numbers = [1, 2, 3, 4, 5, 6];



// Task 5

// var bolean_array = [true, false];



// Task 6

// var temp = ["Moazzam", true, 123];



// Task 7

// var qualifications = ['HSC', 'SSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
// document.write("<h3>Qualifications:</h3> <br>");

// for(i=0; i < qualifications.length; i++) {
//     document.write(i+1 + ") " + qualifications[i] + "<br>");
// }



// Task 8

// var students = ["Michael","John","Tony"];
// var marks = [320, 230, 480];
// var total = 500;

// for(i=0; i < students.length; i++) {
//     document.write("Score of " + students[i] + " is " + marks[i] + ". Percentage: " + marks[i] / total * 100 + "% <br>");
// }



// Task 9

// var colors = ['black', 'green', 'blue', 'white', 'yellow', 'red'];
// document.write(colors + "<br>");

// (a)
// var user = prompt("Enter color you wants to add to the beginning");
// colors.splice(0, 0, user);
// document.write(colors + "<br>");

// (b)
// var user = prompt("Enter color name you wants to add to the end");
// colors.push(user);
// document.write(colors + "<br>");

// (c)
// var user = prompt("Enter two or more color names you want to add to the beginning of the array");
// colors.unshift(user);
// document.write(colors + "<br>");

// (d)
// colors.splice(0,1)
// document.write(colors + "<br>");

// (e)
// colors.pop();
// document.write(colors + "<br>");

// (f)
// var user_index = +prompt("Enter the index at which you want to add a color");
// var user_color = prompt("Enter color name");
// colors.splice(user_index,0, user_color);
// document.write(colors + "<br>");

// (g)
// var user_index = +prompt("Enter the index at which you want to delete a color");
// var user_quan = prompt("Enter how many colors you want to delete");
// colors.splice(user_index, user_quan);
// document.write(colors + "<br>");



// Task 10

// var score = [320, 230, 480, 120];
// document.write("Scores of students: " + score + "<br>");
// score.sort();
// document.write("Ordered Scores of Students: " + score + "<br>");



// Task 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// document.write("Cities List: <br>" + cities + "<br><br>");
// var selectedCities = cities.slice(0, 3);
// document.write("Selected cities list: <br>" + selectedCities);



// Task 12

// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr + "<br><br>");

// var arr_joins = arr.join(" ");
// document.write("String: <br>" + arr_joins);



// Task 13

// var arr = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("Devices: <br>" + arr + "<br><br>");
// document.write("Out: <br>" + arr[0] + "<br>");
// document.write("Out: <br>" + arr[1] + "<br>");
// document.write("Out: <br>" + arr[2] + "<br>");
// document.write("Out: <br>" + arr[3] + "<br>");



// Task 14

// var arr = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("Devices: <br>" + arr + "<br><br>");
// document.write("Out: <br>" + arr[3] + "<br>");
// document.write("Out: <br>" + arr[2] + "<br>");
// document.write("Out: <br>" + arr[1] + "<br>");
// document.write("Out: <br>" + arr[0] + "<br>");



// Task 15

// var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
// document.write("<select>")
// for (var i = 0; i < arr.length; i++) {
//     document.write("<option>" + arr[i] + "</option>")
// }
// document.write("</select>")




// ------------------------------Chapter 17 - 20 ------------------------------//

// Task 1

// var arr = [[1, 2], [3, 4], [5, 6]];



// Task 2

// var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(arr[0] + "<br>");
// document.write(arr[1] + "<br>");
// document.write(arr[2] + "<br>");



// Task 3

// for (var i = 0; i <= 10; i++) {
//     document.write(i + "<br>")
// }



// Task 4

// var table = +prompt("Enter a number to show its multiplication table");
// var lengthofTable = +prompt("Enter length of multiplication table");

// document.write("Multiplication table of " + table + "<br>");
// document.write("Length " + lengthofTable + "<br><br>");

// for (var i = 1; i <= lengthofTable; i++) {
//     document.write(table + " * " + i + " = " + table * i + "<br>");
// }



// Task 5

// var fruit = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i = 0; i <= 4; i++) {
//     document.write(fruit[i] + "<br>");
// }

// document.write("<br>");
// document.write("Element at index 0 is " + fruit[0] + "<br>");
// document.write("Element at index 1 is " + fruit[1] + "<br>");
// document.write("Element at index 2 is " + fruit[2] + "<br>");
// document.write("Element at index 3 is " + fruit[3] + "<br>");
// document.write("Element at index 4 is " + fruit[4] + "<br>");



// Task 6

// (a)

// document.write("Counting: <br><br>")
// for (var i = 0; i <= 15; i++) {
//     document.write(i + ", ")
// }

// (b)
// document.write("<br><br>Reverse counting: <br><br>")
// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ")
// }

// (c)
// document.write("<br><br>Even: <br><br>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ", ");
// }

// (d)
// document.write("<br><br>Odd: <br><br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ", ")
// }

// (e)
// document.write("<br><br>Series: <br><br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k, ")
// }



// Task 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// search = search.toLowerCase();

// if (A.indexOf(search) !== -1) {
//     alert(search + " is available at index " + A.indexOf(search) + " in our bakery")
// } else {
//     alert("We are sorry. " + search + " is not available in our bakery");
// }



// Task 8

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (largest < A[i]) {
//         largest = A[i];
//     }
// }
// document.write("Array items: " + A + "<br>The largest number is " + largest);



// Task 9

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (smallest > A[i]) {
//         smallest = A[i];
//     }
// }
// document.write("Array items: " + A + "<br>The smallest number is " + smallest);



// Task 10

// for (var i = 5; i <= 100; i = i + 5) {
//     document.write(i + ", ")
// }


// ------------------------------ DONE ------------------------------//
