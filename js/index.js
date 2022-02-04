window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  const submit = document.querySelector('#btnSubmit');
  const reset = document.querySelector('#Resetbtn')
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    myFunction()
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'How many states in Australia?',
      o: ['Seven', 'Six', 'Eight', 'Four'],
      a: 1,
    },
    {
      q: 'Which is the biggest state in Australia?',
      o: ['Sydney', 'Western Australia', 'Melbourne', 'LA'],
      a: 1,
    },
  ];
  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };
  // Calculate the score
  const calculateScore = () => {
    console.log("Calculate score called")
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);
        if (quizItem.a == i) {
          //change background color of li element here
          document.getElementById(id = li).style.backgroundColor = "  Yellow";
        }
        if (radioElement.checked) {
          // code for task 1 goes here
          if (i == quizItem.a) {
            console.log("Question ", i, "PASSED")
            score = score + 1;
          }
        }
      }
    });
    console.log("Calculate score DONE with score", score)
    if (score == 5) {
      console.log("All QUESTIONS Passed")
    }
    alert("You scored " + score + " out of 5 ");
    return score;
  };
  const resetfunction = () => {
    console.log("reload ")
    location.reload();
  }
  submit.addEventListener('click', calculateScore);
  reset.addEventListener('click', resetfunction);
  var seconds = 0, stop = 15, counterStarted = false, counter;
  function myFunction() {
    if (counterStarted === false) {
      counterStarted = true;
      counter = setInterval(function () {
        if (seconds <= stop) {
          document.getElementById('time').innerHTML = seconds;
          seconds++;
          console.log('TIMER RUNNING' + seconds)
        } else {
          document.getElementById('time').setAttribute("disabled", "disabled");
          clearInterval(counter);
          counterStarted = false;
          seconds = 0;
          let score1 = calculateScore()
          alert("Session Expired. Your Score is " + score1 + " out of 5 ");
        }
      }, 1000)
    }
  }
  // call the displayQuiz function
  displayQuiz();
});






