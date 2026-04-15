const questionsList = [
    {
        "question": "Which planet in our solar system is known as the 'Red Planet'?",
        "options": {
            "A": "Venus",
            "B": "Mars",
            "C": "Jupiter",
            "D": "Saturn"
        },
        "answer": {
            "option": "B",
            "detail": "Mars. It looks red because its surface is covered in iron oxide, which is the same stuff that makes old nails look rusty!"
        }
    },
    {
        "question": "How many bones are there in an adult human body?",
        "options": {
            "A": "105",
            "B": "500",
            "C": "206",
            "D": "302"
        },
        "answer": {
            "option": "C",
            "detail": "206. Interestingly, babies are actually born with about 300 bones, but many of them fuse together as they grow up!"
        }
    },
    // {
    //     "question": "Which is the largest ocean on Earth?",
    //     "options": {
    //         "A": "Atlantic Ocean",
    //         "B": "Indian Ocean",
    //         "C": "Arctic Ocean",
    //         "D": "Pacific Ocean"
    //     },
    //     "answer": {
    //         "option": "D",
    //         "detail": "Pacific Ocean. It covers more than 30% of the Earth's surface, which is even more than all of the Earth's land area combined."
    //     }
    // },
    // {
    //     "question": "Which gas do plants absorb from the atmosphere to perform photosynthesis?",
    //     "options": {
    //         "A": "Oxygen",
    //         "B": "Nitrogen",
    //         "C": "Carbon Dioxide",
    //         "D": "Hydrogen"
    //     },
    //     "answer": {
    //         "option": "C",
    //         "detail": "Carbon Dioxide. Plants 'breathe in' carbon dioxide and 'breathe out' oxygen, which is exactly the opposite of what humans do!"
    //     }
    // },
    // {
    //     "question": "Who is known as the 'Father of the Indian Constitution'?",
    //     "options": {
    //         "A": "Mahatma Gandhi",
    //         "B": "Dr. B.R. Ambedkar",
    //         "C": "Jawaharlal Nehru",
    //         "D": "Sardar Vallabhbhai Patel"
    //     },
    //     "answer": {
    //         "option": "B",
    //         "detail": "Dr. B.R. Ambedkar. He was the chairman of the drafting committee and played a key role in writing the rules that govern India."
    //     }
    // },
    // {
    //     "question": "Which of these animals is a mammal but can fly?",
    //     "options": {
    //         "A": "Penguin",
    //         "B": "Ostrich",
    //         "C": "Bat",
    //         "D": "Eagle"
    //     },
    //     "answer": {
    //         "option": "C",
    //         "detail": "Bat. While birds have feathers and lay eggs, bats have fur and give birth to live babies, making them the only mammals capable of true flight."
    //     }
    // },
    // {
    //     "question": "What is the capital city of France?",
    //     "options": {
    //         "A": "London",
    //         "B": "Rome",
    //         "C": "Berlin",
    //         "D": "Paris"
    //     },
    //     "answer": {
    //         "option": "D",
    //         "detail": "Paris. It is often called the 'City of Light' and is famous for the Eiffel Tower."
    //     }
    // },
    // {
    //     "question": "Which sense organ helps us maintain our body balance?",
    //     "options": {
    //         "A": "Eyes",
    //         "B": "Ears",
    //         "C": "Nose",
    //         "D": "Tongue"
    //     },
    //     "answer": {
    //         "option": "B",
    //         "detail": "Ears. Inside your inner ear, there are small fluid-filled canals that tell your brain which way your head is moving, helping you stay upright!"
    //     }
    // },
    // {
    //     "question": "What is the boiling point of water at sea level?",
    //     "options": {
    //         "A": "50°C",
    //         "B": "100°C",
    //         "C": "150°C",
    //         "D": "200°C"
    //     },
    //     "answer": {
    //         "option": "B",
    //         "detail": "100°C. At this temperature, liquid water turns into water vapor or steam."
    //     }
    // },
    // {
    //     "question": "Which is the tallest mountain in the world?",
    //     "options": {
    //         "A": "Mount Everest",
    //         "B": "K2",
    //         "C": "Mount Kilimanjaro",
    //         "D": "Mount Fuji"
    //     },
    //     "answer": {
    //         "option": "A",
    //         "detail": "Mount Everest. It stands at 8,848 meters above sea level on the border between Nepal and China."
    //     }
    // }
];

const timer = document.getElementById("timer")

const question_index = document.getElementById("question-index")
const question = document.getElementById("question")

const option_a = document.getElementById("option-a")
const option_b = document.getElementById("option-b")
const option_c = document.getElementById("option-c")
const option_d = document.getElementById("option-d")

const opt_box_a = document.getElementById("opt-box-a")
const opt_box_b = document.getElementById("opt-box-b")
const opt_box_c = document.getElementById("opt-box-c")
const opt_box_d = document.getElementById("opt-box-d")

const next_button = document.getElementById("next-button")

let currentIndex = 0;
let timeCounter = 5;
let intervalId;
let ansList = [];
let score = 0;

function displayQuestion() {
    if (currentIndex > questionsList.length - 1) {
        console.log("--------")
        next_button.textContent = "Submit"
        clearInterval(intervalId);
    } else {
        startTimer();
        question_index.textContent = "Q. " + (currentIndex + 1);
        question.textContent = questionsList[currentIndex].question;

        option_a.textContent = questionsList[currentIndex].options.A;
        option_b.textContent = questionsList[currentIndex].options.B;
        option_c.textContent = questionsList[currentIndex].options.C;
        option_d.textContent = questionsList[currentIndex].options.D;
    }
}

next_button.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questionsList.length) {
        displayQuestion();
        if (currentIndex == questionsList.length - 1) {
            next_button.textContent = "Submit";
        }
    } else {
        scoreCounter();
        // alert("All Questions attempted !!");
    }
})

// when function call it self - rucursion(infinite), manualy stop
function startTimer() {
    clearInterval(intervalId);
    timeCounter = 5;
    intervalId = setInterval(() => {
        timer.textContent = timeCounter;
        timeCounter--;
        if (timeCounter < 0) {
            currentIndex++;
            displayQuestion();
        }
    }, 1000)
}

function scoreCounter() {
    questionsList.forEach((que, i) => {
        if (que.answer.option == ansList[i]) {
            score++;
        }
    })
    console.log(score);
}


opt_box_a.addEventListener('click', () => {
    ansList.push("A")
})
opt_box_b.addEventListener('click', () => {
    ansList.push("B")
})
opt_box_c.addEventListener('click', () => {
    ansList.push("C")
})
opt_box_d.addEventListener('click', () => {
    ansList.push("D")
})



displayQuestion();


// all questions display with mcq - minimum 10
// each question timer - 60 sec.
// next button -> change question, also reset timer
// after completing 60s, automatically question change, default ans add - ARRAY.push("E")
// count socore, and display
// if score is less than 40%, you're failed, you're passed.
