document.getElementById("questions-list").style.display = "none";
document.getElementById("results").style.display = "none";
var subject = "";
var i = 0;
var interval = 0;
var points = 0;

var ques = document.getElementById("ques-contain");
var ans = document.getElementById("answers-options");
var button = document.getElementById("button-next");



const maths = [
  {
    question: "What is 45 x 12?",
    answers: {
      a: "620",
      b: "540",
      c: "480",
      d: "590"
    },
    correctAnswer: "b"
  },
  {
    question: "How many edges does a cube have?",
    answers: {
      a: "6",
      b: "10",
      c: "8",
      d: "12"
    },
    correctAnswer: "d"
  },
  {
    question: "What % of 45 is 36?",
    answers: {
      a: "8",
      b: "25",
      c: "20",
      d: "80"
    },
    correctAnswer: "d"
  },
  {
    question: "A student scored 180 out of 900 marks, his percentage is _______.",
    answers: {
      a: "34",
      b: "18",
      c: "20",
      d: "None of these"
    },
    correctAnswer: "c"
  },
  {
    question: "if x = 5 and y = 10; Then what is (3 * x) + (2 * y)?",
    answers: {
      a: "35",
      b: "40",
      c: "25",
      d: "45"
    },
    correctAnswer: "a"
  }
];



const pakStudies = [
  {
    question: "How many states are there in Pakistan?",
    answers: {
      a: "Four",
      b: "Five",
      c: "Three",
      d: "Six"
    },
    correctAnswer: "a"
  },
  {
    question: "Which city is called heart of Pakistan?",
    answers: {
      a: "Karachi",
      b: "Islamabad",
      c: "Lahore",
      d: "Sialkot"
    },
    correctAnswer: "c"
  },
  {
    question: "Who gave Pakistan, nuclear weapons?",
    answers: {
      a: "Dr. Abdus Salam",
      b: "Chaudhary Rehmat Ali",
      c: "Muhammad Ali Jinnah",
      d: "Dr. Abdul Qadeer Khan"
    },
    correctAnswer: "d"
  },
  {
    question: "Who made Pakistani flag?",
    answers: {
      a: "Ahmed Ghulamali Chagla",
      b: "Hafeez Jalandhari",
      c: "Syed Amir uddin Kedwaii",
      d: "None of these"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the national animal of Pakistan?",
    answers: {
      a: "Markhor",
      b: "Tiger",
      c: "Kangaroo",
      d: "Elephant"
    },
    correctAnswer: "a"
  }
];



const english = [
  {
    question: "Their relationship was plagued by _______ problems.",
    answers: {
      a: "Perpetual",
      b: "Perpechual",
      c: "Purpetual",
      d: "Perptual"
    },
    correctAnswer: "a"
  },
  {
    question: "Identify the misspelt word in the list below.",
    answers: {
      a: "Irresistable",
      b: "Indivisible",
      c: "Indispensable",
      d: "Irresponsible"
    },
    correctAnswer: "a"
  },
  {
    question: "The judge granted the reluctant witness complete ____________ from prosecution for his part in the crime.",
    answers: {
      a: "amnasty",
      b: "amnesty",
      c: "anmesty",
      d: "emnesty"
    },
    correctAnswer: "b"
  },
  {
    question: "Can you take it to the ______? Peter is in there, cooking dinner.",
    answers: {
      a: "breakfast nook",
      b: "dining room",
      c: "sitting room",
      d: "kitchen"
    },
    correctAnswer: "d"
  },
  {
    question: "Choose the correct spelling of the word from the options below.",
    answers: {
      a: "Adress",
      b: "Addrress",
      c: "Address",
      d: "Addres"
    },
    correctAnswer: "b"
  }
];



const science = [
  {
    question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
    answers: {
      a: "Oxygen",
      b: "Hydrogen sulphide",
      c: "Carbon dioxide",
      d: "Nitrogen"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is used in pencils?",
    answers: {
      a: "Graphite",
      b: "Silicon",
      c: "Charcoal",
      d: "Phosphorous"
    },
    correctAnswer: "a"
  },
  {
    question: "Heavy water is ________.",
    answers: {
      a: "PH7",
      b: "rain water",
      c: "deuterium oxide",
      d: "tritium oxide"
    },
    correctAnswer: "c"
  },
  {
    question: "What is laughing gas?",
    answers: {
      a: "Hydrogen peroxide",
      b: "Sulphur dioxide",
      c: "Carbon monoxide",
      d: "Nitrous Oxide"
    },
    correctAnswer: "d"
  },
  {
    question: "The average salinity of sea water is ________.",
    answers: {
      a: "3%",
      b: "3.5%",
      c: "2.5%",
      d: "2%"
    },
    correctAnswer: "b"
  }
];



function startQuiz(e) {
  var quizSelect = e.getAttribute("id");
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("questions-list").style.display = "flex";

  switch (quizSelect) {
    case "quiz1":
      quiz(0, "maths");
      break;
    case "quiz2":
      quiz(0, "pakStudies");
      break;
    case "quiz3":
      quiz(0, "english");
      break;
    case "quiz4":
      quiz(0, "science");
      break;
    default:
    // code block
  }

}


function quiz(i, subject) {

  if (interval == 0) {
    interval = setInterval(timer, 1000);
  }


  switch (subject) {
    case "maths":
      myQuestions = maths;
      break;
    case "pakStudies":
      myQuestions = pakStudies;
      break;
    case "english":
      myQuestions = english;
      break;
    case "science":
      myQuestions = science;
      break;
  }


  // Question

  var question = document.createElement("h3");
  var questionText = document.createTextNode("Q" + (i + 1) + ". " + myQuestions[i].question);
  question.appendChild(questionText);
  ques.appendChild(question);

  // Answers
  for (x in myQuestions[i].answers) {

    var li = document.createElement("li");
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "option");
    radio.setAttribute("value", x);
    var ans1 = document.createTextNode(myQuestions[i].answers[x]);
    li.appendChild(radio);
    li.appendChild(ans1);
    ans.appendChild(li);

  }

  // button

  var btn = document.createElement("button");
  var btnText = document.createTextNode("Next >>");
  btn.setAttribute("class", "next-btn");
  btn.setAttribute("onclick", "verify()");
  btn.appendChild(btnText);
  button.appendChild(btn);

}


// Timer

var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var min = 1;
var sec = 60;

function timer() {
  sec--;

  if (sec < 10 && sec >= 0) {
    seconds.innerHTML = 0 + "" + sec;
  }
  else {
    seconds.innerHTML = sec;
  }


  if (min < 10 && min >= 0) {
    minutes.innerHTML = 0 + "" + min;
  }
  else {
    minutes.innerHTML = min;
  }


  if (sec <= 0) {
    min--;
    sec = 60;
  }
  else if (min < 0) {
    clearInterval(interval);
    minutes.innerHTML = 0 + "" + 0;
    seconds.innerHTML = 0 + "" + 0;
    result(false);
  }

  if (min < 1) {
    minutes.style.color = "red";
    minutes.style.fontWeight = "bold";
    seconds.style.color = "red";
    seconds.style.fontWeight = "bold";
  }
}



function verify() {
  var checked = false;
  var answer = document.getElementsByName("option");
  // var answer = document.querySelector('input[name="option"]:checked').value;

  for (var k = 0; k < answer.length; k++) {
    if (answer[k].checked == true) {

      if (answer[k].value == myQuestions[i].correctAnswer) {
        points++;
      }

      checked = true;
    }
  }

  if (checked == false) {
    alert("Select Answer");
    checked = true;
  }
  else {

    ques.innerHTML = "";
    ans.innerHTML = "";
    button.innerHTML = "";

    i++;
    if (myQuestions.length > i) {
      quiz(i);
    }
    else {
      result(true);
    }

  }

}

function result(e) {

  var timeend = min + ":" + sec;

      document.getElementById("questions-list").style.display = "none";
      var result = document.getElementById("final-result");

      if(e == false) {
        var timeover = document.createElement("h2");
        var timeoverText = document.createTextNode("Time Over :(");
        timeover.appendChild(timeoverText);
        result.appendChild(timeover);
        timeend = "00:00";
      }

      var h2 = document.createElement("h2");
      var h22 = document.createElement("h2");
      var h4 = document.createElement("h4");
      var h2Text = document.createTextNode(points + " Out of " + myQuestions.length + " Correct");
      var per = (points / myQuestions.length) * 100;
      per = per.toFixed(2);
      var h2Text2 = document.createTextNode("You got " + per + " %");
      var h4Text = document.createTextNode("Quiz Completed in " + timeend + " time remaining");
      h2.appendChild(h2Text);
      h22.appendChild(h2Text2);
      h4.appendChild(h4Text);
      var btnRes = document.createElement("button");
      var btnResText = document.createTextNode("Exit");
      btnRes.appendChild(btnResText);
      btnRes.setAttribute("class", "end-btn");
      btnRes.setAttribute("onclick", "end()");

      result.appendChild(h2);
      result.appendChild(h22);
      result.appendChild(h4);
      result.appendChild(btnRes);

      document.getElementById("results").style.display = "flex";

}


function end() {
  clearInterval(interval);
  interval = 0;
  min = 1;
  sec = 60;
  document.getElementById("questions-list").style.display = "none";
  document.getElementById("results").style.display = "none";
  document.getElementById("start-screen").style.display = "flex";
}