// ------------------------------Chapter 38-44 ------------------------------//

// Task 1

// function power(a, b) {
//     var i = 0;
//     var c = 1;

//     while (i < b) {
//         var c = c * a;
//         i++;
//     }
//     return c;
// }

// var res = power(2,3);
// document.write("2 raised to 3 = " + res);



// Task 2

// var year = prompt("Enter Year");

// function leapYear(y) {
//     var isLeapYear = false;

//     if (y % 4 == 0) {
//         if (y % 100 == 0) {
//             if (y % 400 == 0) {
//                 isLeapYear = true;
//             }
//         }
//         else {
//             isLeapYear = true;
//         }
//     }
//     return isLeapYear;
// }

// var input = leapYear(year);

// if(input == true) {
//     alert(year + " is a leap Year");
// }
// else {
//     alert(year + " is not a leap Year");
// }



// Task 3

// function areaOfTriangle(a,b,c) {

//     var S = sides(a,b,c);
//     var area = S*(S-a)*(S-b)*(S-c);

//     return area;
// }

// function sides(a,b,c) {

//     var S = (a + b + c) / 2;
//     return S;
// }

// var res = areaOfTriangle(2,3,4);
// document.write("Area of Triangle = " + res);



// Task 4

// function mainFunction(sub1,sub2,sub3) {

//     var aver = average(sub1,sub2,sub3);
//     var per = percentage(sub1,sub2,sub3);

//     document.write("Marks 1: " + sub1 + "<br>");
//     document.write("Marks 2: " + sub2 + "<br>");
//     document.write("Marks 3: " + sub3 + "<br><br>");
//     document.write("Average: " + aver + "<br>");
//     document.write("Percentage: " + per + " %<br>");

// }

// function average(sub1,sub2,sub3) {
//     var res = (sub1 + sub2 + sub3) / 3;
//     return res;
// }

// function percentage(sub1,sub2,sub3) {
//     var res = ((sub1 + sub2 + sub3) / 300) * 100;
//     return res;
// }

// mainFunction(58,75,88);



// Task 5

// function indexOfFunc(str,sentence) {

//     var Arr = sentence.split('');

//     for(var i=0; i<Arr.length; i++) {
//         if(Arr[i] == str) {
//             return i;
//         }
//     }
// }

// var index = indexOfFunc("W","Hello World");
// document.write("Index = " + index);



// Task 6

// function removeVowels(str){
//     return str.replace(/[aeiouAEIOU]/g, "");
// }

// var sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo saepe nesciunt molestiae, veritatis quisquam cum cumque nulla suscipit quis ipsam debitis magni sequi ex, at sed aperiam consequuntur distinctio.";
// var remVowels = removeVowels(sentence);
// document.write("Sentence: " + sentence + "<br>");
// document.write("Removed Vowels: " + remVowels);



// Task 7


// function findVowel(str) {

//     str = str.toLowerCase();
//     var count = 0;
//     var vowel = false;
//     var res = "";

//     for (var i = 0; i < str.length; i++) {

//         switch (str.charAt(i)) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (vowel) {
//                         var res = str.charAt(i-1) + str.charAt(i);
//                         document.write(res + ", ")
//                         count++;
//                         vowel = false;
//                     }
//                     else {
//                         vowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 res = "";
//                 vowel = false;
//         }
//     }

//     return "<br>Count: " + count;
// }

// document.write(findVowel("Pleases read this application and give me gratuity"));



// Task 8

// var distance = +prompt("Enter distance between two cities (in km)");

// function meters(dist) {
//     var res = dist * 1000;
//     return res;
// }

// function feet(dist) {
//     var res = dist * 3281;
//     return res;
// }

// function inches(dist) {
//     var res = dist * 39370;
//     return res;
// }

// function centimeters(dist) {
//     var res = dist * 100000;
//     return res;
// }

// document.write("Distance in km: " + distance + "<br>");
// document.write("Distance in meters: " + meters(distance) + "<br>");
// document.write("Distance in feet: " + feet(distance) + "<br>");
// document.write("Distance in inches: " + inches(distance) + "<br>");
// document.write("Distance in centimeters: " + centimeters(distance) + "<br>");



// Task 9

// var working_hours = +prompt("Enter the working hours");

// if (working_hours > 40) {
//     var overtime = working_hours - 40;
//     var rate = overtime * 12.00;
//     document.write("Total Working Hours: " + working_hours + "<br>" + "Overtime: " + overtime + "<br>" + "Employee's overtime pay: " + rate);
// }
// else {
//     document.write("Total Working Hours: " + working_hours + "<br>" + "Employee works less than 40 hours / No Overtime");
// }



// Task 10

// var cash = prompt("Enter amount to withdraw!!");

// var hundred = parseInt(cash / 100);
// var fifty = parseInt((cash % 100) / 50);
// var ten = parseInt(((cash % 100) % 50) / 10);
// var remaining = parseInt(((cash % 100) % 50) % 10);

// document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.");
// document.write("<br>Remaining Amount is " + remaining);




// ------------------------------Chapter 43-48 ------------------------------//

// Task 1 >> Html Document



// Task 2 >> Html Document



// Task 3

// function del(a) {
//     var delRow = a.parentNode.parentNode.rowIndex;
//     document.getElementById("students").deleteRow(delRow);
// }



// Task 4

// function pic1() {
//     document.getElementById("image").src = "mobile1.png";
// }
// function pic2() {
//     document.getElementById("image").src = "mobile2.png";
// }



// Task 5

// var counting = 0;
// function increase() {
//     counting += 1;
//     document.getElementById("count").innerHTML = counting;
// };

// function decrease() {
//     counting -= 1;
//     document.getElementById("count").innerHTML = counting;
// };




// ------------------------------Chapter 49-52 ------------------------------//

// Task 1

// function displayData() {
//     var fname = "First name: " + document.getElementById("fname").value;          
//     var lname = "Last name: " + document.getElementById("lname").value;
//     var email = "Email: " + document.getElementById("email").value;
//     var city = "City: " + document.getElementById("city").value;
//     var result = fname + "<br>" + lname + "<br>" + email + "<br>" + city;
//     document.getElementById('data').innerHTML = result;
// }



// Task 2

// function read() {
//     var more = document.getElementById("more");
//     var para2 = document.getElementById("para2");

//     if (para2.style.display === "none") {
//         para2.style.display = "inline";
//         more.innerHTML = "Read Less";
//     } else {
//         para2.style.display = "none";
//         more.innerHTML = "Read More";
//     }
// }



// Task 3

// var today = new Date();
// var daytoString = today.toString();
// var day = daytoString.slice(0,3);
// document.write("Today is " + day);



// Task 4

// var today = new Date();
// var day = today.getDay();

// if(day === 6 || day === 7) {
//     document.write("It's Fun day");
// }



// Task 5

// var today = new Date();
// var currentDate = today.getDate();

// if(currentDate < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }



// Task 6

// var today = new Date();
// var time = today.getTime();
// var min = time/(1000*60);

// document.write("Current Date: " + today + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + time + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + min);



// Task 7

// var today = new Date();
// var time = today.getHours();

// if(time < 12) {
//     document.write("It's AM");
// }
// else {
//     document.write("It's PM");
// }



// Task 8

// var laterDate = new Date();
// var setDate = laterDate.setFullYear(2020,11,31);

// document.write("Later date: " + laterDate);



// Task 9

// var today = new Date();
// var ramadan = new Date();
// var setDate = ramadan.setFullYear(2020,3,25);

// var todayGet = today.getTime();
// var ramadanGet = ramadan.getTime();

// var passedDays = (todayGet - ramadanGet)/(1000*60*60*24);

// document.write(passedDays + " days have passed since 1st Ramadan, 2020");



// Task 10

// var today = new Date();
// var beginning = new Date();
// var setDate = beginning.setFullYear(2020,0,1);

// var todayGet = today.getTime();
// var beginGet = beginning.getTime();

// var passedDays = (todayGet - beginGet)/(1000);

// document.write("On reference date " + today + ", " + passedDays + " seconds had passed since beginning of 2020");



// Task 11

// var today = new Date();
// var hoursDate = new Date();
// var hour = today.getHours();
// var oneHour = hour - 1;
// var ahead = hoursDate.setHours(oneHour);
// document.write("Current date: " + today + "<br>1 hour ago, it was " + hoursDate);



// Task 12

// var today = new Date();
// var hundred = new Date();
// var year = today.getFullYear();
// var hundredYears = year - 100;
// var ahead = hundred.setFullYear(hundredYears);
// alert("Current date: " + today + "\n100 years back, it was " + hundred);



// Task 13

// var age = prompt("Enter your age");
// var today = new Date();
// var year = today.getFullYear();
// var birthYear = year - age;

// document.write("Your age is " + age + "<br>Your birth year is " + birthYear);



// Task 14

// var customer = prompt("Enter customer name");
// var month = prompt("Enter month");
// var numOfUnits = +prompt("Enter number of units");
// var chargesPerUnit = +prompt("Enter charges per unit");
// var lateCharge = 350;

// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + lateCharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: <b>" + customer + "</b><br>");
// document.write("Month: <b>" + month + "</b><br>");
// document.write("Number of units: <b>" + numOfUnits + "</b><br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");

// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
// document.write("Late payment surcharge: <b>" + lateCharge + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");




// ------------------------------Chapter 35-38 ------------------------------//

// Task 1

// function currentDate() {
//     var today = new Date();
//     document.write(today);
// }

// currentDate();



// Task 2

// function greet(fname, lname) {
//     var greeting = fname + " " + lname;
//     document.write("Hello " + greeting);
// }

// greet("Moazzam","Ahmed");



// Task 3

// function addition(num1,num2) {
//     var sum = num1 + num2;
//     return sum;
// }

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// var res = addition(num1,num2);
// document.write(res);



// Task 4

// function calculator(num1,opr,num2) {

//     switch(opr) {
//         case "+":
//             var solve = num1 + num2;
//             var res = num1 + " + " + num2 + " = " + solve;
//             break;
//         case "-":
//             var solve = num1 - num2;
//             var res = num1 + " - " + num2 + " = " + solve;
//             break;
//         case "*":
//             var solve = num1 * num2;
//             var res = num1 + " * " + num2 + " = " + solve;
//             break;
//         case "/":
//             var solve = num1 / num2;
//             var res = num1 + " / " + num2 + " = " + solve;
//             break;
//         case "%":
//             var solve = num1 % num2;
//             var res = num1 + " % " + num2 + " = " + solve;
//             break;
//         default:
//             var solve = "Incorrect Operator";
//     }

//     return res;
// }

// var num1 = +prompt("Enter first number");
// var opr = prompt("Enter operator");
// var num2 = +prompt("Enter second number");

// var calc = calculator(num1,opr,num2);
// document.write("<h1>Calculator</h1>");
// document.write(calc);



// Task 5

// function square(num) {
//     num = num * num;
//     return num;
// }

// var num = +prompt("Enter number");
// document.write("Square of " + num + " is " + square(num));



// Task 6

// function fact(num) {

//     for(var i=num-1; i >= 1; i--) {
//         num = num * i
//     }

//     return num;
// }

// var number = +prompt("Enter number");
// var res = fact(number);

// document.write("Factorial of " + number + " is " + res);



// Task 7

// function counting(start,end) {

//     var res = start;

//     for(var i=start+1; i <= end; i++) {
//         res = res + ", " + i;
//     }

//     return res;
// }

// var startNum = +prompt("Enter start number");
// var endNum = +prompt("Enter end number");

// var A = counting(startNum,endNum);

// document.write(A);



// Task 8

// function calculateHypotenuse(base,perp) {

//     function calculateSquare(numSqr) {
//         numSqr = numSqr * numSqr;
//         return numSqr;
//     }

//     var base2 = calculateSquare(base);
//     var perp2 = calculateSquare(perp);

//     var hyp2 = base2 + perp2;
//     var hypotenuse = Math.sqrt(hyp2);

//     return hypotenuse;
// }

// var base = +prompt("Enter Base");
// var perp = +prompt("Enter Perpendicular");

// var res = calculateHypotenuse(base,perp);
// document.write(res);



// Task 9

// function area(w,h) {

//     var A = w * h;
//     return A;
// }

// var width = 100;
// var height = 50;

// var res1 = area(100,50);
// var res2 = area(width,height);

// document.write("Arguments as value: " + res1 + "<br>");
// document.write("Arguments as variables: " + res2 + "<br>");



// Task 10

// function palindrome(strInput) {

//     str = strInput.toLowerCase();
//     str_length = str.length-1;
//     str2 = "";

//     for(i=str_length; i>=0; i--) {
//         var str2 = str2 + str.charAt(i);
//     }

//     if(str === str2) {
//         return strInput + " is Palindrome.";
//     }
//     else {
//         return strInput + " is not Palindrome.";
//     }

// }

// var strInput = prompt("Enter string");

// var res = palindrome(strInput);
// document.write(res);



// Task 11

// function capitalize(str) {

//     var spl = str.split(" ");
//     var res = [];

//     for (i = 0; i < spl.length; i++) {

//         spl[i] = spl[i].replace((spl[i].charAt(0)), (spl[i].charAt(0)).toUpperCase());
//     }

//     res = spl.join(" ");
//     return res;
// }

// var str = "the quick brown fox";
// var cap = capitalize(str);

// document.write("String: " + str + "<br>Output: " + cap);



// Task 12

// function longest(str) {
//     var word = str.split(" ");
//     var long = 0;
//     var longestWord = "";

//     for (var i = 0; i < word.length; i++) {

//         if (word[i].length > long) {
//             long = word[i].length;
//             longestWord = word[i];
//         }
//     }

//     return longestWord;
// }

// var str = "Web Development Tutorial";
// var res = longest(str);
// document.write("String: " + str + "<br>Output: " + res);



// Task 13

// function count(str, letter) {

//     var strLowerCase = str.toLowerCase();
//     var letterLowerCase = letter.toLowerCase();
//     var counting = 0;

//     for (var i = 0; i < strLowerCase.length; i++) {
//         if (strLowerCase.charAt(i) == letterLowerCase) {
//             counting += 1;
//         }
//     }

//     return counting;
// }

// var str = "JSResourceS.com"
// var letter = "o";

// var res = count(str,letter);

// document.write("Text: " + str + "<br>There are " + res + " occurrence(s) of letter " + letter);



// Task 14

// var pi = 3.142;

// function calcCircumference(rad) {
//     var circum = 2 * pi * rad;
//     return "The circumference is " + circum;
// }

// function calcArea(rad) {
//     var area = pi * rad * rad;
//     return "The area is " + area;
// }

// var C = calcCircumference(5);
// var A = calcArea(12);

// document.write(C + "<br>" + A);


// ------------------------------ DONE ------------------------------//