//------------------------------ Chapter 1 ------------------------------//

// Task 1

//  alert("Welcome to my website!");



// Task 2

// alert( "Error! Please enter a valid password." );



// Task 3

// alert("Welcome to Js Land... \nHappy Coding");



// Task 4

// alert("Welcome to Js Land...");
// alert("Happy Coding!")



// Task 5

// console.log(alert("Hello... I can run JS through my web browser's console"));



// Task 6

//  Placement of <script></script> element Working... :)




//------------------------------ Chapter 2 ------------------------------//

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




//------------------------------ Chapter 3 ------------------------------//

// Task 1

// var age = 23;
// alert("I am " + age + " years old");



// Task 2

// var visit= 14;
// alert("You have visited this site " + visit + " times");



// Task 3
// var birthYear=1995;
// document.write("My birth year is" + " " + birthYear + "</br> " + "Data type of my declared variable is Number" );

// task 4

// var name=prompt("Enter your name");
// var product=prompt("Enter product name you want");
// var quantity=+prompt("Enter quantity ");
// alert(name+ " " + "Ordered" + " " +quantity + " " +   product + " " +"in XYZ Clothing store" );

                                        // Chapter # 4
    //    Task1                                 
// var name=asif,  fname=abdul_rasheed,  qualification=master;
// task2
//  legal variables
// var name=asif,,,
// var name=$ayoub;
// var name=ali_mughal;
// var name=asif90;
// var name=as90if;
// //  illegal variables
// var name=9asif;
// var name=asif ali;
// var name=$ali mughal;
// var name=ali $mughal;
// task3
// // document.write("Rules for naming JS variable");
// document.write("Variable names can only contain numbers $ and _. For example $my_1stVariable </br>");
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name</br>");
// document.write("Variable names are case senstive</br>");
// document.write("Variable names should not be JS keywords");
                                        // Chapter # 5


// //  task 1                                       
// var val1=+prompt("Enter first number");
// var val2=+prompt("Enter second number");
// var sum= (+val1)+ (+val2);
// document.write("The Sum of"+" "+ (+val1) +" "+ "and"+" "+ (+val2) +" "+"is"+" "+((+val1)+(+val2)));

// task 2

//  var val1= +prompt("Enter first number");
//  var sign=prompt("Enter an operator");
//  var val2=+prompt("Enter second number");
//  if (sign=='-'){
//      document.write("The subtraction of "+" "+ val1 +" " +"and"+" " +val2+" " + "is"+" " + (val1-val2));
//  }
//  else if (sign=='*'){
//     document.write("The subtraction of "+" "+ val1 +" " +"and"+" " +val2+" " + "is"+" " + (val1*val2));
// }
// else if (sign=='/'){
//     document.write("The subtraction of "+" "+ val1 +" " +"and"+" " +val2+" " + "is"+" " + (val1/val2));
// }
// else if (sign=='%'){
//     document.write("The subtraction of "+" "+ val1 +" " +"and"+" " +val2+" " + "is"+" " + (val1%val2));
// }

// // task3
// var x=+prompt("Enter value");
// document.write("The value after variable declaration is"+ " " + x +"</br> "+ (" The value after increment is")+" " + ++x +"</br>");
// var y=+prompt("Enter a number to add ")
// document.write("The value after addintion is " + " "+ ((+x)+(+y))+"</br>The value after decrement is"+( --x+y)+ "</br>");
// document.write("The remainder after dividing by 3 is  "+ (x+y)%3);

// task4

// var cost=600;
// var ticket=+prompt("Enter number of tickets");
// document.write("The total cost to buy"+" "+ticket+" "+"tickets is"+" "+ cost*ticket +"PKR");

// task5

// var tab=+prompt("Enter table number");
// document.write("The table of"+" "+tab+" "+"is </br>");
// for(i=1;i<=10;i++){
    
//     document.write(tab +"*"+i +"="+ tab*i +"</br>");
// }

// task6
// var cel=+prompt("Enter temperature in celcius");
// document.write("The temperatur"+" "+cel+" "+ "in forenheit is" +" "+((cel*9/5)+32)+ "</br>");
// var foren=+prompt("Enter temperature in foren");
// document.write("The temperatur"+" "+foren+" "+ "in celcius is" +" "+((foren-32)*5/9));

// task 7

// var p_item1=650;
// var p_item2=100;
// var ship=100;
// var q_item1=+prompt("Enter the Quantity of Item 1 you want");
// var q_item2=+prompt("Enter the Quantity of Item 2 you want");
// document.write("The price of Item1 price is"+" " + p_item1*q_item1 +"</br>");
// document.write("The price of Item2 price is" +" "+ p_item2*q_item2 +"</br>");
// document.write("Shipping charges are" + ship +"</br>");
// document.write(  "The total cost of your order is"+" " +( (+ p_item1*q_item1 )  +  (+ p_item2*q_item2 ) + (+ship)  ) );

// task8
// var o_marks=+prompt("Enter the marks you obtained" );
// var t_marks=+prompt("Enter the total marks" );
// document.write(  "Percentage of marks is"+" "+ o_marks/t_marks*100 + "%" );

// // task9
// var usd=104.80;
// var riyal=28;
// total=10*usd+28*25;
// document.write("Total currency in PKR"+" "+ total);

// // task 10
// var num=10;
// document.write("All Calculation in single Expression is"+" "+((num+5)*10)/2)

// // task 11
// var dob=+prompt("Enter Your date of birth");
// var current_y=+prompt("Enter Current year");
// age=current_y-dob;
// document.write("Your age is"+ " " +age);

// // task 12
// var radius=+prompt("Enter Radius of a circle");
// pi=3.142;
// circum=2*pi*radius;
// area=pi*radius*radius;
// document.write("The Radius is"+" "+radius+"</br>")
// document.write("The Circumference is"+" "+circum +"</br>");
// document.write("The Area is"+" "+area);

// // task 13
// var snack=prompt("Enter your favourite snack");
// var c_age=+prompt("Enter your current age");
// var e_age=+prompt("Enter your estimate age");
// var amount=+prompt("Enter estimated amount per day");
// need=  (e_age-c_age)*amount;
// document.write("You will need"+" "+need+" "+snack+" "+"to last you until ripe old age of"+" "+e_age );

                            // Chapter # 6-9 
// task 1
// var num=+prompt("Enter a number");
// document.write("The Value of a is:"+" "+num+"</br>");
// document.write("The value of ++a is"+" "+(++num)+"</br>");
// document.write("Now The value of a is"+" "+(num)+"</br>");
// document.write("The value of a++ is"+" "+(num++)+"</br>");
// document.write("Now The value of a is"+" "+num+"</br>");
// document.write("The value of --a is"+" "+(--num)+"</br>");
// document.write("Now The value of a is"+" "+num+"</br>");
// document.write("The value of a-- is"+" "+(num--)+"</br>");
// document.write("Now The value of a is"+" "+num+"</br>");

// // task 2
// var a=2 ,b=1;
// document.write("The value of a is"+" "+a+"</br>");
// document.write("The value of b is"+" "+b+"</br>");
// var result=(--a)-(--b)+(++b)+(b--);
// document.write("The Result of Expression is"+" "+result );

// // task 3
// var name=prompt("Enter your name");
// document.write("Welcome dear"+" "+name);

// task 4 is missing in assignment

// task 5
// var num=+prompt("Enter a table number");
// if(num>0)
// {
// for(i=1;i<=10;i++)
// {
//     document.write(num +"*"+i +"="+ num*i +"</br>");
// }
// }
// else
// {
// document.write("The table of 5 is"+" </br>");

// {
//     for(i=1;i<=10;i++)
// {
// document.write(5 +"*"+i +"="+ 5*i +"</br>");
// }
// }
// }

// Task 6
// var sub1=prompt("Enter first subject name") 
// var sub2=prompt("Enter second subject name");
// var sub3=prompt("Enter third subject name");
// var o_marks1=+prompt("Enter obtained marks in sub 1");
// var o_marks2=+prompt("Enter obtained marks in sub 2");
// var o_marks3=+prompt("Enter obtained marks in sub 3");
// var t_marks=100;
// document.write(sub1+"</br> "+o_marks1+" "+t_marks+" "+((o_marks1/t_marks)*100)+"%"+"</br>");
// document.write(sub2+"</br> "+o_marks2+" "+t_marks+" "+((o_marks2/t_marks)*100)+"%"+"</br>");
// document.write(sub3+"</br> "+o_marks3+" "+t_marks+" "+((o_marks3/t_marks)*100)+"%"+"</br>");
// var total=t_marks*3;
// var m_total=o_marks1+o_marks2+o_marks3;
// var percent=((m_total/total)*100);
// document.write(total+" "+(o_marks1+o_marks2+o_marks3)+" "+percent+"%"+"</br>");

// task 7 is missing from the assignment file


                                                    // Chapter # 9-11
//  task 1
// var city=prompt("Enter City name");
// if (city==="karachi") {
//     document.write("Welcome to city of lights");
// } else {
//     document.write("Welcome to "+" "+city);
// }

// task 2
// var gender=prompt("Enter your gender male or female");
// if (gender==="male"||gender==="Male"||gender==="MALE")
//  {
//     document.write("Good morning Sir");
// } 
// else 
// {
//     document.write("Good morning  Ma'am");
// }

// task 3
// var color=prompt("Enter Color");
// if (color==="red") {
//     document.write("Must Stop");
// } else if(color==="yellow") {
//     document.write("Ready to move");
// }
// else {
//     document.write("Move Now");
// }

// task 4
// var fuel=+prompt("Enter Fuel in litres");
// if(fuel<0.25){
//     document.write("Please refill the fuel in your car");
// }

// task 5
// a
// var a=4;
// if(++a===5){
// alert("Given condition for variable a is true");
// }
// b
// var b=82;
// if(b++===8){
//     alert("Given condition for variable b is true");

// }
// c

// var c=12;
// if(c++===13)
// {
//     alert("Condition 1 is true");
// }
// if(c===13){
// alert("Condition 2 is true");
// }
// if(++c<14){
// alert("Condition 3 is true");
// }
// if(c===14){
// alert("Condition 4 is true");
// }
// d
// var materialCost=20000;
// var laborCost=2000;
// var totalCost=materialCost+laborCost;
// if(totalCost===materialCost+laborCost){
//     alert("The cost equals");
// }
// e
// if(true)
// {
//     alert("true");
// }
// if(false)
// {
//     alert("False");
// }

// // f
// if("car" < "cat")
// { alert("car is smaller than cat")};

// // task 6
// var sub1=+prompt("Enter subject 1 marks");
// var sub2=+prompt("Enter subject 2 marks");
// var sub3=+prompt("Enter subject 3 marks");
// var total=+prompt("Enter total marks");
// var obtained=sub1+sub2+sub3;
// var percent=(obtained/total)*100;
// if(percent>=80){
//     document.write("A one grade"+" "+"Excellent");
// }
// else if(percent>=70){
//     document.write("A  grade"+" "+"Good");
// }
// else if(percent>=60){
//     document.write("B grade"+" "+"You need to improve");
// }
// else(percent<60)
// {
//     document.write("Fail"+" "+"Sorry" +"</br>");
// }

// document.write("Total Marks"+" "+total+"</br>");
// document.write("Marks Obtained"+"  "+obtained+"</br>");
// document.write("Percentage"+"  "+percent+"%"+"</br>");
// document.write("Grade"+"  "+grade+"</br>");

// task 7
// var num=5;
// var num1=+prompt("Enter a number");
// if(num1===num){
//     document.write("Bingo! Correct answer");
// }

// task 8
// var num=+prompt("Enter a number");
// if(num%3===0){
//     document.write(num+" "+"Number is divisible by 3");
// }

// task 9
// var num=+prompt("Enter a number");
// if (num%2===0) {
//     document.write(num+" "+"is Even number")
// } else {
//     document.write(num+" "+"is Odd number")
// }

// task 10
// var T=+prompt("Enter temperatur");
// if (T>40) {
//     document.write("It is very hot today");
// } else if(T>30) {
//     document.write("The weather today is normal");
// }
// else if(T>20) {
//     document.write("Today's weather is cool");
// }
// else if(T>10) {
//     document.write("OMG! Today's weather is so cool");
// }

// task 11
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var sign=prompt("Enter an operator"+" "+"+"+" "+"-"+" "+"*"+" "+"/"+" "+"%")
// if(sign=== "+")
// {
//     document.write(num1+" +"+num2+"="+ ((+num1)+(+num2)));
// }
// if(sign=== "-")
// {
//     document.write(num1+" -"+num2+"="+ (num1-num2));
// }
// if(sign=== "*")
// {
//     document.write(num1+" *"+num2+"="+ (num1*num2));
// }
// if(sign=== "/")
// {
//     document.write(num1+" /"+num2+"="+ (num1/num2));
// }
// if(sign=== "%")
// {
//     document.write(num1+" %"+num2+"="+ (num1%num2));
// }

                            // Chapter # 12-13
// task 1
// var num=prompt("Enter a number or character");
// if (num>=65 && num<=90|| num>="A" && num<="Z") {
//     document.write("It is an upperCase letter");
// } else if (num>=97 && num<=122 ||  num>="a" && num<="z") {
//     document.write("It is a lowerCase letter");
// }
// else{
//     document.write("It is a number");
// }

// task 2
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// if (num1>num2) {
//     document.write(num1+" "+"is the greater number");
// } else if(num2>num1) {
//     document.write(num2+" "+"is the greater number");
// }
// else{
//     document.write(num1+"="+num2+" "+"Equal number");
// }

// task 3
// var num=+prompt("Enter a number");
// if (num>0) {
//     document.write(num+" "+"is Positive number");
// } else if (num<0) {
//     document.write(num+" "+"is Negative number");
// }
// else{
//     document.write(num+" "+"is Zero number");
// }

// task 4
// var string=prompt("Enter a string of length 1");
// if (string==="A"||string==="E"||string==="I"||string==="O"||string==="U"||string==="a"||string==="e"||string==="i"||string==="o"||string==="u") {
//     document.write("True");
// } else {
//     document.write("False");
// }

// task 5
// var pass=prompt("Enter Your Password");
// var pass1=123456;
// if(pass==pass1)
//  {
//     document.write("Correct! matches the original password");
// }

//  else if (pass!=pass1) {
//     document.write("Wrong! Please enter correct password");
// } 
// else
// {
//     document.write(" Please enter a password");
// }

// task 6
// var greeting;
// var hour=13;
// if (hour<18) {
//     document.write("Good Day");
// } else {
//     document.write("Good Evening");
// }

// task 7
// var time=+prompt("Enter time in 24 hour format");
// if (time===1) {
//     document.write(time+" "+"It is 1 AM");
// }
// else if (time===2) {
//     document.write(time+" "+"It is 2 AM");
// } 
// else if (time===3) {
//     document.write(time+" "+"It is 3 AM");
// } 
// else if (time===4) {
//     document.write(time+" "+"It is 4 AM");
// } 
// else if (time===5) {
//     document.write(time+" "+"It is 5 AM");
// } 
// else if (time===6) {
//     document.write(time+" "+"It is 6 AM");
// } 
// else if (time===7) {
//     document.write(time+" "+"It is 7 AM");
// } 
// else if (time===8) {
//     document.write(time+" "+"It is 8 AM");
// } 
// else if (time===9) {
//     document.write(time+" "+"It is 9 AM");
// } 
// else if (time===10) {
//     document.write(time+" "+"It is 10 AM");
// } 
// else if (time===11) {
//     document.write(time+" "+"It is 11 AM");
// } 
// else if (time===12) {
//     document.write(time+" "+"It is 12 AM");
// } 
// else if (time===13) {
//     document.write(time+" "+"It is 1 PM");
// } else if(time===14) {
//     document.write(time+" "+"It is 2 PM");
// }
// else if(time===15) {
//     document.write(time+" "+"It is 3 PM");
// }
// else if(time===16) {
//     document.write(time+" "+"It is 4 PM");
// }
// else if(time===17) {
//     document.write(time+" "+"It is 5 PM");
// }
// else if(time===18) {
//     document.write(time+" "+"It is 6 PM");
// }
// else if(time===19) {
//     document.write(time+" "+"It is 7 PM");
// }
// else if(time===20) {
//     document.write(time+" "+"It is 8 PM");
// }
// else if(time===21) {
//     document.write(time+" "+"It is 9 PM");
// }
// else if(time===22) {
//     document.write(time+" "+"It is 10 PM");
// }
// else if(time===23) {
//     document.write(time+" "+"It is 11 PM");
// }
// else if(time===24) {
//     document.write(time+" "+"It is 12 PM");
// }

                                        // Chapter 14-16
//  task 1
// var array=[];                   
// task 2
// var person = {firstName:"Asif", lastName:"Ali", age:25};
// task 3
// var names=["Asif","Ali","yasir"];

// task 4
// var num=[1,2,3];

// task 5
// var myArr = [];
//          var value = 2;
//          for(var i = 0; i < value; i++) {
//             myArr.push(false);
//          }
//          alert(myArr);

// task 6
// var arr=['Asif','yasir',123];

// // task 7
// var education=['Hsc','SSc','Bcs','Bs','Bcom','MA','Mphil','PHD'];
// document.write(education );

// task 8
// var students=['Asif','Ali','Ghous'];
// var marks=[320,230,480];
// var total=500;
// document.write("Marks of"+" "+students[0]+" "+"are"+" "+marks[0]+". "+"Percentage"+" "+marks[0]/total*100+"</br>");
// document.write("Marks of"+" "+students[1]+" "+"are"+" "+marks[1]+". "+"Percentage"+" "+marks[1]/total*100+"</br>");
// document.write("Marks of"+" "+students[2]+" "+"are"+" "+marks[2]+". "+"Percentage"+" "+marks[2]/total*100+"</br>");

// task 9
// var colors=['black','white','blue','red','yellow'];
// document.write(colors);
// // a
// var enter=prompt("Enter color name you want to enter at the start");
// colors.splice(0,1,enter);
// document.write(colors);

// // b
// var enter=prompt("Enter color name you want to enter at the end");
// colors.push(enter);
// document.write(colors);

// c
// var enter=prompt("Enter two more color name you want to enter at the start");
// colors.unshift(enter);
// document.write(colors);

// // d
// colors.push('greenyellow');
// document.write(colors);

// // e
// colors.pop();
// document.write(colors);

// // f
// var enter=prompt("Enter the index at which you want to enter a color");
// colors.splice([],enter);
// document.write(colors);

// // g
// var enter=prompt("Enter the index at which you want to enter a color");
// colors.pop([],enter);
// document.write(colors);

// // task 10
// var score=[320,230,480,120];
// document.write("Scores of students"+" "+score+"</br>");
// score.sort(function(a, b){return a - b});
// document.write("Ordered Scores of students"+" "+score+"</br>");

// // task 11
// var city=['Lahore','Karacki','Islamabad','Multan','Mianwali'];
// document.write("City array"+"</br> "+city+"</br>");
// var CopyCity=city.slice(0,3);
// document.write("Selected cities array"+"</br> "+CopyCity);

// // task 12
// var arr = ["This","is","my","cat"];
// document.write(arr+"</br>");
// document.write(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]);

// task 13
// var arr= ['user name','Password','Email']
// document.write(arr+"</br>");
// document.write("Value according to FIFO"+"</br> ");
// document.write(arr[0]+"</br>");
// document.write(arr[1]+"</br>");
// document.write(arr[2]+"</br>");

// task 14
// var arr= ['user name','Password','Email']
// document.write(arr+"</br>");
// document.write("Value according to LIFO"+"</br> ");
// document.write(arr[2]+"</br>");
// document.write(arr[1]+"</br>");
// document.write(arr[0]+"</br>");

// task 15
// var arr=['Apple','Samsung','Motorola','Nokia','Sony','Haier']
// document.write("<select>")
// for(var i=0;i<arr.length;i++){
//     document.write("<option>"+arr[i]+"</option>")
// }
// document.write("</select>")

                                            //  Chapter # 17-20
// task 1
// 2d array
// var Arr=[[1,2],[3,4],[5,6]];

// // task 2
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr[0]+"</br>");
// document.write(arr[1]+"</br>");
// document.write(arr[2]+"</br>");

// task 3
// for(var i=0;i<=10;i++){
//     document.write(i+"</br>")
// }

// task 4
// var num=+prompt("Enter a table number");
// var len=+prompt("Enter length of table");

// document.write("Table of"+" "+num+" "+"is </br>");
// for(var i=1;i<=len;i++){
// document.write(num+"*"+i+"="+num*i+"</br>");
// }

// // task 5
// var fruit=['apple','banana','mango','orange','Strawberry']
// for(var i=0;i<=4;i++){
//     document.write(fruit[i]+"</br>");
// }

// document.write("Element at index 0 is"+" "+fruit[0]+"</br>");
// document.write("Element at index 1 is"+" "+fruit[1]+"</br>");
// document.write("Element at index 2 is"+" "+fruit[2]+"</br>");
// document.write("Element at index 3 is"+" "+fruit[3]+"</br>");
// document.write("Element at index 4 is"+" "+fruit[4]+"</br>");


// task 6
// a
// for(var i=0;i<=10;i++){
//     document.write(i+" ")
// }

// b
// for(var i=10;i>=0;i--){
//     document.write(i+" ")
// }

// c
// for(var i=0;i<=20;i=i+2){
//     document.write(i+"  ");
// }

// // // d
// for(var i=1;i<=20;i=i+2){
//     document.write(i+" ")
// }

// // e
// for(var i=2000;i<=20000;i=i+2000){
//     document.write(i+" ")
// }

// task 7
// var items=['Cake','Apple pie','Cookie','Chips','Patties'];
// var search=prompt("Enter item you want to search in our bakery");
// items=items.toUpperCase;
// if (items.indexOf(search) !== -1) {
//     alert(search+" "+"is found in our backery")
// } else {
//     alert(search+" "+"did not found in our bakery");
// }

// task 8
// var arr = [24,53,78,91,12];
// var largest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write(largest);

// task 9
// var arr = [24,53,78,91,12];
// var smallest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// document.write(smallest);

// task 10
// for(var i=5;i<=100;i=i+5){
//     document.write(i+",")
// }
