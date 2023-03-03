const quizdata = [
  {
    questions: "which language is web browser",
    a: "java",
    b: "c",
    c: "phyton",
    d: "javascrpit",
    correct: "d",
  },
  {
    questions: "what is family guy",
    a: "show",
    b: "dude",
    c: "nutjob",
    d: "a phone",
    correct: "a",
  },
  {
    questions: "who is elon mask",
    a: "scientist",
    b: "inventor",
    c: "engineer",
    d: "bussinesman",
    correct: "b",
  },
  {
    questions: "how many letters in the alphbets",
    a: "40",
    b: "30",
    c: "26",
    d: "100",
    correct: "c",
  },
  {
    questions: "How many people were in the Tv show fridends",
    a: "8",
    b: "4",
    c: "5",
    d: "11",
    correct: "b",
  },
  {
    questions: "who are the big three",
    a: "one piece,demon slayer,one punch man",
    b: "dragon ball,bleach,one piece",
    c: "bleach,one piece,narouto",
    d: "god of highschool,mob phyco,yuyu hakushow",
    correct: "c",
  },
  {
    questions: "who is or was the stmartes man alive",
    a: "nathan leopold",
    b: "Ainan cawley",
    c: "nikola tesla",
    d: "johann goethe",
    correct: "d",
  },
  {
    questions: "who is asura",
    a: "A god of war",
    b: "taitan",
    c: "demon",
    d: "demigod",
    correct: "b",
  },
  {
    questions: "who made the internet",
    a: "elon mask",
    b: "jeff bezos",
    c: "larry page",
    d: "vinton cref and bob kahn",
    correct: "d",
  },
  {
    questions: "who is the wihte death",
    a: "Greatest sniper",
    b: "larry ellison",
    c: "mark zukerberg",
    d: "adolf hitler",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionsEl = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbutton = document.getElementById("submit");

var currentquiz = 0;
var score = 0;

function loadquiz() {
  console.log(answerEls);
  deleteAnswer();
  var currentquizdata = quizdata[currentquiz];
  questionsEl.innerText = currentquizdata.questions;
  a_text.innerText = currentquizdata.a;
  b_text.innerText = currentquizdata.b;
  c_text.innerText = currentquizdata.c;
  d_text.innerText = currentquizdata.d;
}
loadquiz();

function deleteAnswer() {
  answerEls.forEach((i) => (i.checked = false));
}

function getselected() {
  var myanswer;
  answerEls.forEach((i) => {
    if (i.checked) {
      myanswer = i.id;
    }
  });
  return myanswer;
}

submitbutton.addEventListener("click", () => {
  const finalanswer = getselected();
  console.log(finalanswer);

  if (finalanswer) {
    if (finalanswer === quizdata[currentquiz].correct) {
      score += 1;
    }
    currentquiz += 1;

    if (currentquiz < quizdata.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `<h2> answer ${score}/${quizdata.length} correct</h2>
      <button onclick="location.reload()">reload </button>
      `;
    }
  }
});
