let countries = [];
let score = 0;
let correctAnswer = "";
let correctFlag = "";
let questionNumber = 1;
const totalQuestions = 10;
let gameMode = "";

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        countries = []; // Inicializamos el array de países
        for (let i = 0; i < data.length; i++) {
            let country = data[i];
            countries.push({
                name: country.name.common,
                capital: country.capital ? country.capital[0] : "Unknown", // Si no tiene capital, la guarda como "Desconocida"
                flag: country.flags.png
            });
        }
    })
    .catch(error => console.error("Error getting data:", error));

function startGame(mode) {
    gameMode = mode;
    score = 0;
    questionNumber = 1;

    document.getElementById("menuContainer").classList.add("hidden");
    document.getElementById("quizContainer").classList.remove("hidden");
    document.getElementById("resultContainer").classList.add("hidden");
    let gameTitleElement = document.getElementById("gameTitle");
    if (mode === "capitals") {
        gameTitleElement.textContent = "Capitals Game";
    } 
    else {
        gameTitleElement.textContent = "Flags Game";
    }
    loadQuestion();
}

function loadQuestion() {
    if (questionNumber > totalQuestions) {
        showFinalScore();
        return;
    }

    document.getElementById("score").textContent = `Punctuation: ${score}/${questionNumber}`;
    let optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = ""; 

    let randomCountry = countries[Math.floor(Math.random() * countries.length)];

    if (gameMode === "capitals") {
        while (randomCountry.capital === "Unknown") {
            randomCountry = countries[Math.floor(Math.random() * countries.length)];
        }
        correctAnswer = randomCountry.capital;
        document.getElementById("question").textContent = `What is the capital of  ${randomCountry.name}?`;
        let options = [correctAnswer];
        while (options.length < 4) {
            let randomCapital = countries[Math.floor(Math.random() * countries.length)].capital;
            if (randomCapital !== "Unknown" && !options.includes(randomCapital)) {
                options.push(randomCapital);
            }
        }

        options.sort(() => Math.random() - 0.5);
        options.forEach(option => {
            let button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(button, option);
            optionsContainer.appendChild(button);
        });
    } 
    else if (gameMode === "flags") {
        correctAnswer = randomCountry.name;
        correctFlag = randomCountry.flag;
        document.getElementById("question").textContent = `What is the flag of ${correctAnswer}?`;

        let options = [{ name: correctAnswer, flag: correctFlag }];
        while (options.length < 4) {
            let randomOption = countries[Math.floor(Math.random() * countries.length)];
            if (!options.some(option => option.flag === randomOption.flag)) {
                options.push({ name: randomOption.name, flag: randomOption.flag });
            }
        }

        options.sort(() => Math.random() - 0.5);
        options.forEach(option => {
            let button = document.createElement("button");
            button.classList.add("option");
            button.onclick = () => checkAnswer(button, option.name);

            let img = document.createElement("img");
            img.src = option.flag;
            img.alt = option.name;
            button.appendChild(img);
            optionsContainer.appendChild(button);
        });
    }
}

function checkAnswer(button, selected) {
    let buttons = document.querySelectorAll(".option");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correctAnswer) {
        button.classList.add("correct");
        score++;
    } 
    else {
        button.classList.add("wrong");
        buttons.forEach(btn => {
            if (gameMode === "capitals" && btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            } 
            else if (gameMode === "flags" && btn.querySelector("img").alt === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    document.getElementById("score").textContent = `Punctuation: ${score}/${questionNumber}`;
}

function nextQuestion() {
    questionNumber++;
    loadQuestion();
}

function showFinalScore() {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("finalScore").textContent = `Your final score is: ${score}/${totalQuestions}`;
}

function goToMenu() {
    document.getElementById("menuContainer").classList.remove("hidden");
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.add("hidden");
}
