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

var year = prompt("Enter Year");

function leapYear(y) {
    var isLeapYear = false;

    if (y % 4 == 0) {
        if (y % 100 == 0) {
            if (y % 400 == 0) {
                isLeapYear = true;
            }
        }
        else {
            isLeapYear = true;
        }
    }
    return isLeapYear;
}

var input = leapYear(year);

if(input == true) {
    alert(year + " is a leap Year");
}
else {
    alert(year + " is not a leap Year");
}



// Task 3

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>Index of 'n': " + index);



// Task 4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("String: " + word + "<br>Last index of 'l': " + lastIndex);



// Task 5

// var word = "Pakistani";
// var charAtIndex = word.charAt(3);
// document.write("String: " + word + "<br>Character at index 3: " + charAtIndex);



// Task 6

// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullName = fname.concat(" " + lname);
// document.write("Hello " + fullName);



// Task 7

// var city = "Hyderabad";
// var cityReplace = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br>After replacement: " + cityReplace);



// Task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement = message.replace(/and/g,"&");
// document.write("Message: " + message + "<br>Replacement: " + replacement);



// Task 9

// var stringVal = "472";
// var numVal = parseInt(stringVal);
// document.write("Value: " + stringVal + "<br>Type: " + typeof(stringVal) + "<br>Value: " + numVal + "<br>Type: " + typeof(numVal));



// Task 10

// var userInput = prompt("Enter something to convert to capital letters");
// var upper = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>Upper case: " + upper);



// Task 11

// var userInput = prompt("Enter something to convert to title case");
// var title = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write("User input: " + userInput + "<br>Title case: " + title);



// Task 12

// var num = 35.36;
// var toStr = num.toString();
// var str = toStr.replace(".","")
// document.write("Number: " + num + "<br>Result: " + str);



// Task 13

// var username = prompt("Enter username");

// for(var i = 0; i < username.length; i++) {

//     if(username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64) {
//         alert("Please enter a valid username");
//     }
// }



// Task 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// search = search.toLowerCase();

// if (A.indexOf(search) !== -1) {
//     document.write(search + " is <b>available</b> at index " + A.indexOf(search) + " in our bakery")
// } else {
//     document.write("We are sorry. " + search + " is <b>not available</b> in our bakery");
// }



// Task 15

// var password = prompt("Enter a valid password");
// var number = alphabet = false;
// for(var i=0; i<password.length; i++) {

//     if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//         number = true;
//     }
//     else if((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//         alphabet = true;
//     }
// }

// if(password.length < 6) {
//     var res = "Password must at least 6 characters long<br>Please enter a valid password";
// }

// else if(number == alphabet == false) {
//     var res = "Password should contain alphabets and numbers<br>Please enter a valid password";
// }

// else if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     var res = "Password should not start with a number<br>Please enter a valid password";
// }
// else {
//     var res = "Entered Password is Valid";
// }

// document.write(res);



// Task 16

// var university = "University of Karachi";
// var arr = university.split("");

// for(i = 0; i < university.length; i++) {
//     document.write(arr[i] + "<br>");
// }



// Task 17

// var userInput = prompt("Enter Something")
// var lastChar = userInput.charAt(userInput.length-1);
// document.write("User input: " + userInput + "<br>Last character of input: " + lastChar);



// Task 18

// var message = "The quick brown fox jumps over the lazy dog";
// var countArr = message.toLowerCase().split(" ");
// var counting = 0;

// for(var i = 0; i < countArr.length; i++) {
//     if(countArr[i] == "the") {
//         counting+=1;
//     }
// }
// document.write("Text: " + message + "<br>There are " + counting + " occurrence(s) of word 'the'");




// ------------------------------Chapter 26-30 ------------------------------//

// Task 1

// var num = prompt("Enter positive number");
// var roundOff = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write("number: " + num + "<br>round off value: " + roundOff + "<br>floor value: " + floor + "<br>ceil value: " + ceil);



// Task 2

// var num = prompt("Enter negative number");
// var roundOff = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write("number: " + num + "<br>round off value: " + roundOff + "<br>floor value: " + floor + "<br>ceil value: " + ceil);



// Task 3

// var val = prompt("Enter any number (+ve / -ve)");
// var abs = Math.abs(val);
// document.write("The absolute value of " + val + " is " + abs);



// Task 4

// var num = (Math.random() * 6) + 1;
// var dice = parseInt(num);
// document.write("random dice value: " + dice);



// Task 5

// var num = (Math.random() * 2) + 1;
// var coin = parseInt(num);
// var arr = ["", "Tails", "Heads"];

// document.write(coin + "<br>random coin value: " + arr[coin]);



// Task 6

// var ran = (Math.random() * 100) + 1;
// var num = parseInt(ran);
// document.write("random number between 1 and 100: " + num);



// Task 7

// var weight = prompt("Enter your weight in kilograms");
// var num = parseFloat(weight);
// document.write("The weight of user is " + num + " kilograms");



// Task 8

// var randomNum = (Math.random() * 10) + 1;
// var num = parseInt(randomNum);
// var userInput = +prompt("Enter a number between 1 and 10");

// if(userInput === num) {
//     alert("Congratulation! You guess the correct number");
// }
// else {
//     alert("Try again!");
// }




// ------------------------------Chapter 31-34 ------------------------------//

// Task 1

// var today = new Date();
// document.write(today);



// Task 2

// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var today = new Date();
// var currentMonth = months[today.getMonth()];
// document.write("Current month: " + currentMonth);



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