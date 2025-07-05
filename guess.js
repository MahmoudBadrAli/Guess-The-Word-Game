// Setting Game Name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector(
  "footer"
).innerHTML = `${gameName} Game Created By: <a href="mailto:mahmoudbadrali15@gmail.com"><span>Mahmoud Badr</span></a>`;

// Audio
const winSound = new Audio("sounds/win.wav");
const loseSound = new Audio("sounds/lose.wav");

// Setting Game Options
let numbersOfTries;
let currentTry = 1;
let numberOfHints;
let originalHints;

// Function to get CEFR Level Text
function getCEFRLevelText(level) {
  switch (level) {
    case "Very Easy":
      return "A1";
    case "Easy":
      return "A2";
    case "Medium":
      return "B1";
    case "Hard":
      return "B2";
    case "Very Hard":
      return "C1";
    case "💀 Death 💀":
      return "C2";
    default:
      return "Unknown";
  }
}

// Starting Game
Swal.fire({
  title: "Choose Difficulty",
  html: `
    <div class="custom-difficulty-buttons">
      <button class="diff-btn very-easy">Very Easy</button>
      <button class="diff-btn easy">Easy</button>
      <button class="diff-btn medium">Medium</button>
      <button class="diff-btn hard">Hard</button>
      <button class="diff-btn very-hard">Very Hard</button>
      <button class="diff-btn death">💀 Death 💀</button>
    </div>
  `,
  showConfirmButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  didOpen: () => {
    const showConfirmation = (levelText) => {
      selectedDifficulty = levelText;
      switch (selectedDifficulty) {
        case "Very Easy":
          wordToGuess =
            veryEasyWords[
              Math.floor(Math.random() * veryEasyWords.length)
            ].toLowerCase();
          break;
        case "Easy":
          wordToGuess =
            easyWords[
              Math.floor(Math.random() * easyWords.length)
            ].toLowerCase();
          break;
        case "Medium":
          wordToGuess =
            mediumWords[
              Math.floor(Math.random() * mediumWords.length)
            ].toLowerCase();
          break;
        case "Hard":
          wordToGuess =
            hardWords[
              Math.floor(Math.random() * hardWords.length)
            ].toLowerCase();
          break;
        case "Very Hard":
          wordToGuess =
            veryHardWords[
              Math.floor(Math.random() * veryHardWords.length)
            ].toLowerCase();
          break;
        case "💀 Death 💀":
          wordToGuess =
            deathWords[
              Math.floor(Math.random() * deathWords.length)
            ].toLowerCase();
          break;
      }

      numberOfLetters = wordToGuess.length;

      if (selectedDifficulty === "Very Easy" || selectedDifficulty === "Easy") {
        numberOfHints = 2;
        numbersOfTries = 4;
      } else if (selectedDifficulty === "Medium") {
        numberOfHints = 2;
        numbersOfTries = 5;
      } else if (selectedDifficulty === "Hard") {
        numberOfHints = 3;
        numbersOfTries = 6;
      } else if (selectedDifficulty === "Very Hard") {
        numberOfHints = 4;
        numbersOfTries = 6;
      } else if (selectedDifficulty === "💀 Death 💀") {
        numberOfHints = 6;
        numbersOfTries = 12;
      }
      originalHints = numberOfHints;
      document.querySelector(".hints span").innerHTML = numberOfHints;

      const cefrLevel = getCEFRLevelText(selectedDifficulty);

      Swal.fire({
        icon: "success",
        title: `Mode Selected`,
        text: `You chose: ${selectedDifficulty}`,
        html: `<p>You will be challenged with <strong>${cefrLevel}</strong> words</p>`,
        confirmButtonText: "Start Game",
      }).then(() => {
        generateInput();
      });
    };

    document.querySelector(".very-easy").addEventListener("click", () => {
      Swal.close();
      showConfirmation("Very Easy");
    });

    document.querySelector(".easy").addEventListener("click", () => {
      Swal.close();
      showConfirmation("Easy");
    });

    document.querySelector(".medium").addEventListener("click", () => {
      Swal.close();
      showConfirmation("Medium");
    });

    document.querySelector(".hard").addEventListener("click", () => {
      Swal.close();
      showConfirmation("Hard");
    });

    document.querySelector(".very-hard").addEventListener("click", () => {
      Swal.close();
      showConfirmation("Very Hard");
    });

    document.querySelector(".death").addEventListener("click", () => {
      Swal.close();
      showConfirmation("💀 Death 💀");
    });
  },
});

// Manage Words & Difficulty Levels

// Words Levels
const deathWords = [
  // C2
  "antithetical",
  "circumlocution",
  "disenfranchise",
  "epistemological",
  "grandiloquent",
  "idiosyncratic",
  "imperceptible",
  "incontrovertible",
  "insurmountable",
  "magnanimously",
  "metamorphosis",
  "obfuscation",
  "omnipresence",
  "paradigmatic",
  "perfunctorily",
  "perspicacious",
  "recalcitrant",
  "sesquipedalian",
  "soliloquizing",
  "unfathomable",
  "unprecedented",
  "vociferously",
  "anonymization",
  "anthropocentric",
  "discombobulate",
  "interchangeable",
  "juxtaposition",
  "nonconformity",
  "recontextualize",
  "subconsciously",
];

// ##############################################################

const veryHardWords = [
  // C1
  "aesthetic",
  "contemplate",
  "entrepreneur",
  "hypothesis",
  "perspective",
  "articulate",
  "coherence",
  "conscience",
  "inevitable",
  "noteworthy",
  "overwhelm",
  "simultaneous",
  "sustainable",
  "violation",
  "collaborate",
  "controversy",
  "devastating",
  "legislation",
  "predominant",
  "resilient",
  "speculation",
  "transparency",
  "withstand",
  "accelerate",
  "adversity",
  "competence",
  "deteriorate",
  "influential",
  "phenomenon",
  "sophisticated",
];

// ##############################################################

const hardWords = [
  // B2
  "justice",
  "library",
  "concept",
  "context",
  "freedom",
  "feature",
  "climate",
  "biology",
  "general",
  "finance",
  "reality",
  "journey",
  "product",
  "foreign",
  "ability",
  "network",
  "process",
  "conflict",
  "natural",
  "revenue",
  "gesture",
  "evidence",
  "function",
  "response",
  "progress",
];

// ##############################################################

const mediumWords = [
  // B1
  "accident",
  "angry",
  "apartment",
  "argue",
  "boring",
  "careful",
  "comfortable",
  "dangerous",
  "decide",
  "dictionary",
  "engineer",
  "enough",
  "expensive",
  "famous",
  "foreign",
  "guest",
  "healthy",
  "hurry",
  "imagine",
  "invitation",
  "lucky",
  "nervous",
  "opinion",
  "pollution",
  "probably",
  "quiet",
  "reason",
  "repair",
  "shout",
  "suggest",
  "surprise",
  "terrible",
  "together",
  "travel",
  "umbrella",
  "village",
  "weather",
  "weight",
  "wonderful",
  "yesterday",
];

// ##############################################################

const easyWords = [
  // A2
  "animal",
  "answer",
  "apple",
  "baby",
  "ball",
  "bank",
  "beach",
  "beautiful",
  "birthday",
  "black",
  "breakfast",
  "brother",
  "bus",
  "camera",
  "cat",
  "clean",
  "clothes",
  "coffee",
  "cold",
  "color",
  "computer",
  "country",
  "dance",
  "day",
  "dog",
  "drink",
  "drive",
  "easy",
  "egg",
  "evening",
  "family",
  "fast",
  "fish",
  "flower",
  "friend",
  "game",
  "goodbye",
  "green",
  "happy",
  "hat",
  "hello",
  "home",
  "horse",
  "house",
  "juice",
  "jump",
  "kind",
  "kitchen",
  "long",
  "lunch",
  "man",
  "milk",
  "money",
  "morning",
  "movie",
  "music",
  "new",
  "nice",
  "night",
  "orange",
  "party",
  "pen",
  "phone",
  "pizza",
  "read",
  "school",
  "sea",
  "shirt",
  "shoes",
  "short",
  "slow",
  "small",
  "snow",
  "sport",
  "strong",
  "student",
  "sun",
  "swim",
  "table",
  "teacher",
  "television",
  "train",
  "tree",
  "walk",
  "water",
  "week",
  "window",
  "woman",
  "yellow",
  "zoo",
];

// ##############################################################

const veryEasyWords = [
  // A1
  "dog",
  "cat",
  "sun",
  "book",
  "car",
  "pen",
  "bag",
  "milk",
  "fish",
  "red",
  "blue",
  "cup",
  "run",
  "walk",
  "boy",
  "girl",
  "food",
  "tree",
  "bed",
  "door",
  "chair",
  "house",
  "phone",
  "cake",
  "water",
  "school",
  "egg",
  "ball",
  "hat",
  "hand",
  "shoe",
  "day",
  "night",
  "lamp",
  "bus",
  "city",
  "coat",
  "desk",
  "name",
  "home",
  "open",
  "close",
  "apple",
];
// Starting Difficulty Levels

let selectedDifficulty = "";
let wordToGuess = "";
let messageArea = document.querySelector(".message");

// Store Original Hints Count
// Manage Hints
document.querySelector(".hints span").innerHTML = numberOfHints;
const getHintsButton = document.querySelector(".hints");
getHintsButton.addEventListener("click", getHint);

// Generate Input Fields
// This function generates the input fields based on the number of tries and letters
function generateInput() {
  // Came from the HTML
  const inputsContainer = document.querySelector(".inputs");

  // Create Main Try Div
  for (let i = 1; i <= numbersOfTries; i++) {
    const tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>Try: ${i}</span>`;

    if (i !== 1) tryDiv.classList.add("disabled-inputs");

    // Create Inputs for Each Letter
    for (let j = 1; j <= numberOfLetters; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.id = `guess-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      tryDiv.appendChild(input);
    }

    inputsContainer.appendChild(tryDiv);
  }
  // Focus on the first input in first try element
  inputsContainer.children[0].children[1].focus();

  // Disable all inputs except the first one
  const inputsInDisabledDiv = document.querySelectorAll(
    ".disabled-inputs input"
  );
  inputsInDisabledDiv.forEach((input) => {
    input.disabled = true;
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    // Convert input to uppercase
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      // console.log(index);
      const nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });

    input.addEventListener("keydown", function (event) {
      // console.log(event);
      const currentIndex = Array.from(inputs).indexOf(event.target); // Or this
      // console.log(currentIndex)
      if (event.key === "ArrowRight") {
        const nextInput = currentIndex + 1;
        if (nextInput < inputs.length) inputs[nextInput].focus();
      }
      if (event.key === "ArrowLeft") {
        const previosInput = currentIndex - 1;
        if (previosInput >= 0) inputs[previosInput].focus();
      }
    });
  });
}

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

const resetButton = document.querySelector(".choose-level");
resetButton.addEventListener("click", () => {
  location.reload();
});

function handleGuesses() {
  let successGuess = true;

  console.log(wordToGuess);

  for (let i = 1; i <= numberOfLetters; i++) {
    const inputField = document.querySelector(
      `#guess-${currentTry}-letter-${i}`
    );
    const letter = inputField.value.toLowerCase();
    const actualLetter = wordToGuess[i - 1];

    // Game Logic
    if (letter === actualLetter) {
      // Letter is correct and in place
      inputField.classList.add("yes-in-place");
    } else if (wordToGuess.includes(letter) && letter !== "") {
      // Letter is correct but not in place
      inputField.classList.add("not-in-place");
      successGuess = false;
    } else {
      inputField.classList.add("no");
      successGuess = false;
    }
  }

  // Check if user win or lose
  if (successGuess) {
    messageArea.innerHTML = `You Win The Word Is <span>${wordToGuess}</span>`;
    if (numberOfHints === originalHints) {
      messageArea.innerHTML = `<p>Congratulations! You guessed the word <span>${wordToGuess}</span> without using any hints!</p>`;
    }

    // Add Disabled Class To All Try Divs
    let allTries = document.querySelectorAll(".inputs > div");
    allTries.forEach((tryDiv) => {
      tryDiv.classList.add("disabled-inputs");
    });

    // Disable guess button
    guessButton.disabled = true;
    getHintsButton.disabled = true;
    winSound.play();
    restartSame.style.display = "inline-flex";
  } else {
    document
      .querySelector(`.try-${currentTry}`)
      .classList.add("disabled-inputs");
    const currentTryInputs = document.querySelectorAll(
      `.try-${currentTry} input`
    );
    currentTryInputs.forEach((input) => (input.disabled = true));

    currentTry++;

    const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
    nextTryInputs.forEach((input) => (input.disabled = false));

    let element = document.querySelector(`.try-${currentTry}`);
    if (element) {
      document
        .querySelector(`.try-${currentTry}`)
        .classList.remove("disabled-inputs");
      element.children[1].focus();
    } else {
      // Disable guess button
      guessButton.disabled = true;
      getHintsButton.disabled = true;
      messageArea.innerHTML = `You Lose The Word Is <span>${wordToGuess}</span>`;
      loseSound.play();
      restartSame.style.display = "inline-flex";
    }
  }
}

function getHint() {
  if (numberOfHints > 0) {
    numberOfHints--;
    document.querySelector(".hints span").innerHTML = numberOfHints;
  }
  if (numberOfHints === 0) {
    getHintsButton.disabled = true;
  }

  const enableInputs = document.querySelectorAll("input:not([disabled])");
  // console.log(enableInputs);
  const emptyEnableInputs = Array.from(enableInputs).filter(
    (input) => input.value === ""
  );
  // console.log(emptyEnableInputs);

  if (emptyEnableInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyEnableInputs.length);
    const randomInput = emptyEnableInputs[randomIndex];
    const indexToFill = Array.from(enableInputs).indexOf(randomInput);
    // console.log(randomIndex);
    // console.log(randomInput);
    // console.log(indexToFill);
    if (indexToFill !== -1) {
      // -1 because indexOf returns -1 if not found
      randomInput.value = wordToGuess[indexToFill].toUpperCase();
    }
  }
}

function handleBackspace(event) {
  if (event.key === "Backspace") {
    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentIndex = Array.from(inputs).indexOf(document.activeElement);
    // console.log(currentIndex);
    if (currentIndex > 0) {
      const currentInput = inputs[currentIndex];
      const previosInput = inputs[currentIndex - 1];
      currentInput.value = "";
      previosInput.value = "";
      previosInput.focus();
    }
  }
}

document.removeEventListener("keydown", handleBackspace);
document.addEventListener("keydown", handleBackspace);

const restartSame = document.querySelector(".restart-same");

restartSame.style.display = "none";

restartSame.addEventListener("click", () => {
  // Clear previous inputs
  document.querySelector(".inputs").innerHTML = "";
  messageArea.innerHTML = "";
  guessButton.disabled = false;
  getHintsButton.disabled = false;

  // Reset values
  currentTry = 1;

  // Another word from the same difficulty
  switch (selectedDifficulty) {
    case "Very Easy":
      wordToGuess =
        veryEasyWords[
          Math.floor(Math.random() * veryEasyWords.length)
        ].toLowerCase();
      numbersOfTries = 4;
      numberOfHints = 2;
      break;
    case "Easy":
      wordToGuess =
        easyWords[Math.floor(Math.random() * easyWords.length)].toLowerCase();
      numbersOfTries = 4;
      numberOfHints = 2;
      break;
    case "Medium":
      wordToGuess =
        mediumWords[
          Math.floor(Math.random() * mediumWords.length)
        ].toLowerCase();
      numbersOfTries = 5;
      numberOfHints = 2;
      break;
    case "Hard":
      wordToGuess =
        hardWords[Math.floor(Math.random() * hardWords.length)].toLowerCase();
      numbersOfTries = 6;
      numberOfHints = 3;
      break;
    case "Very Hard":
      wordToGuess =
        veryHardWords[
          Math.floor(Math.random() * veryHardWords.length)
        ].toLowerCase();
      numbersOfTries = 6;
      numberOfHints = 4;
      break;
    case "💀 Death 💀":
      wordToGuess =
        deathWords[Math.floor(Math.random() * deathWords.length)].toLowerCase();
      numbersOfTries = 12;
      numberOfHints = 6;
      break;
  }

  // Store Original Hints Count
  originalHints = numberOfHints;
  document.querySelector(".hints span").innerHTML = numberOfHints;

  // Reset inputs
  document.querySelector(".inputs").innerHTML = "";

  // Add this line after setting wordToGuess in each case
  numberOfLetters = wordToGuess.length;

  // Generate new input fields
  generateInput();

  restartSame.style.display = "none";
});
