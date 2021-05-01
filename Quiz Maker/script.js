const API_URI = 'https://opentdb.com/api.php?amount=10'; // Generates 10 random questions.
const quizSection = document.querySelector('#quiz-section');

const questionP = document.createElement('p');
const answerList = document.createElement('ul');

questionP.classList.add('question_text');
answerList.classList.add('answer_list');

const parser = new DOMParser();

async function fetchQuestions() {
	let questionsResp = await fetch(API_URI);
	let questions = questionsResp.json();
	return questions;
}

// Shuffle Function!
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

// Decode HTML?
function decodeHtml(str) {
	let parsedString = parser.parseFromString(str, 'text/html');
	return parsedString.body.textContent;
}

function generateQA(quizData, qNumber) {
	// qNumber and isPlaying
	document.querySelectorAll('.answer').forEach((ele) => ele.remove());

	let question = decodeHtml(quizData[qNumber].question);
	questionP.innerText = question;

	quizData[qNumber].options.forEach((ans) => {
		const ansEle = document.createElement('li');
		ansEle.innerText = decodeHtml(ans);
		ansEle.classList.add('answer');
		answerList.appendChild(ansEle);

		ansEle.addEventListener('click', function () {
			if (ans === quizData[qNumber].correctAnswer) {
				generateQA(quizData, ++qNumber);
			} else {
				const h1Ele = document.createElement('h1');
				h1Ele.innerText = 'That was wrong! Reload';
				quizSection.appendChild(h1Ele);
			}
		});
	});

	quizSection.appendChild(questionP);
	quizSection.appendChild(answerList);
}

function init(params) {
	fetchQuestions()
		.then((data) => {
			let quizData = data.results.map((item) => {
				return {
					question: item.question,
					qType: item.type,
					options: shuffle([
						item.correct_answer,
						...item.incorrect_answers,
					]),
					correctAnswer: item.correct_answer,
				};
			});
			generateQA(quizData, 0);
		})
		.catch((err) => {
			console.error('Error', err);
		});
}

init();
