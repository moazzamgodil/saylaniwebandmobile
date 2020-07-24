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

// function insertData() {
//     var name = document.getElementById("name").value;
//     var classNo = document.getElementById("classno").value;
//     var insert =
//       `<tr>
//         <td id="name">` + name + `</td>
//         <td id="classNo">` + classNo + `</td>
//         <td><button onclick="edit(this)">Edit</button></td>
//         <td><button onclick="del(this)">Delete</button></td>
//         <td><span id="hiddenForm"></span></td>
//       </tr>`;
//     document.getElementById('students').innerHTML += insert;
//     document.getElementById("name").value = "";
//     document.getElementById("classno").value = "";
//   }

//   function del(a) {
//     var delRow = a.parentNode.parentNode.rowIndex;
//     document.getElementById("students").deleteRow(delRow);
//   }

//   function edit(a) {
//     var editRow = a.parentNode.parentNode.rowIndex;
//     console.log(editRow);

//     var cell1 = document.getElementById('students').rows[editRow].cells[0].innerHTML;
//     var cell2 = document.getElementById('students').rows[editRow].cells[1].innerHTML;

//     document.getElementById("data").innerHTML = `Name: <input type="text" id="name1" name="name"> Class: <input type="text" id="classno1" name="classno"> <input id="submit" type="submit" value="Update" onclick="change(`+editRow+`)">`;
//     document.getElementById("name1").value = cell1;
//     document.getElementById("classno1").value = cell2;
//   }

//   function change(b) {
//     console.log(b);
//     var name1 = document.getElementById("name1").value;
//     var classno1 = document.getElementById("classno1").value;
//     document.getElementById('students').rows[b].cells[0].innerHTML = name1;
//     document.getElementById('students').rows[b].cells[1].innerHTML = classno1;
//     document.getElementById("data").innerHTML = "";
//   }




// ------------------------------Chapter 53-58 ------------------------------//

// Task 1

// var images = document.getElementById('imagesContain');
// var imagesPath = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

// for (var i = 0; i < imagesPath.length; i++) {
//     images.innerHTML += '<img src="' + imagesPath[i] + '" onclick="modalOpen(this)">';
// }

// function modalOpen(a) {
//     var modal = document.getElementById('modal');
//     var imgmodal = document.getElementById('imgmodal');
//     imgmodal.classList.add('modal-open');
//     imgmodal.classList.remove('modal-close');
//     modal.style.display = "block";
//     imgmodal.src = a.src;
// }

// function onClosedImagModal() {
//     imgmodal.classList.add('modal-close');
//     imgmodal.classList.remove('modal-open');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }



// Task 2

// var para = document.getElementById("para");
// var fontSize = 16;

// function zoomin() {
//     fontSize += 10;
//     para.style.fontSize = fontSize + "px";
// }

// function zoomout() {
//     fontSize -= 10;
//     para.style.fontSize = fontSize + "px";
// }




// ------------------------------Chapter 58-67 ------------------------------//

// Task 1

// (i)
// var maincontent = document.getElementById("main-content");

// (ii)
// var e = maincontent.childNodes;
// var elements = "";

// for (var i = 0; i < e.length; i++) {
//     elements = elements + e[i].nodeName + "\n";
// }
// console.log(elements);

// (iii)
// var x = document.getElementsByClassName("render");
// var toBrowser = document.getElementById("toBrowser");
// var i;
// for (i = 0; i < x.length; i++) {
//     toBrowser.innerHTML += x[i].innerHTML;
// }

// (iv)
// var firstname = document.getElementById("first-name");
// firstname.value = "Moazzam";

// (v)
// var lastname = document.getElementById("last-name");
// var email = document.getElementById("email");
// lastname.value = "Ahmed";
// email.value = "moazzamgodil@gmail.com";



// Task 2

// (i)
// var formcontent = document.getElementById("form-content").nodeType;
// document.getElementById("res").innerHTML = "Node Type: " + formcontent;

// (ii)
// var lastname = document.getElementById("lastName");
// var a = lastname.nodeType;
// var b = lastname.childNodes[0].nodeType;
// document.getElementById("res").innerHTML = "Node Type: " + a + "<br>";
// document.getElementById("res").innerHTML += "Node Type: " + b;

// (iii)
// var lastname = document.getElementById("lastName");
// var text = document.createTextNode("Updated node");
// lastname.replaceChild(text, lastname.childNodes[0]);

// (iv)
// var lastChild = document.getElementById("main-content").lastChild.innerHTML;
// var firstChild = document.getElementById("main-content").firstChild.innerHTML;
// document.getElementById("res").innerHTML = "First Child: " + firstChild + "<br>";
// document.getElementById("res").innerHTML += "Last Child: " + lastChild;

// (v)
// var lastName = document.getElementById("lastName");
// var previous = lastName.previousSibling.innerHTML;
// var next = lastName.nextSibling.innerHTML;
// document.getElementById("res").innerHTML = "Previous Sibling: " + previous + "<br>";
// document.getElementById("res").innerHTML += "Next Sibling: " + next;

// (vi)
// var email = document.getElementById("email");
// var a = email.parentNode.nodeName;
// var b = email.nodeType;
// document.getElementById("res").innerHTML = "Parent Node: " + a + "<br>";
// document.getElementById("res").innerHTML += "Node type: " + b;


// ------------------------------ DONE ------------------------------//