# 🎮 Guess The Word Game

**Guess The Word** is a fun, educational, and interactive word-guessing game built using **HTML**, **CSS**, and **JavaScript**. It helps players improve their vocabulary by challenging them to guess hidden words based on difficulty level.

---
Try The Game From Here: [Guess The Word]()
---

## 📌 Game Concept

Players must guess a secret word letter by letter. Each guess gives visual feedback:

- 🟩 **Green**: Correct letter in the correct position.
- 🟨 **Orange**: Letter exists in the word but in the wrong position.
- ⬛ **Dark Gray**: Letter does not exist in the word at all.

The player wins by guessing the word within the allowed number of tries. Hints are available based on the chosen difficulty.

---

## 🚀 Features

Difficulty selection:
  - Very Easy (A1)
  - Easy (A2)
  - Medium (B1)
  - Hard (B2)
  - Very Hard (C1)
  - 💀 Death 💀 (C2)

- 🎯 Number of tries and hints scale with difficulty.
- 💡 Hint system to reveal letters randomly.
- 🔄 Ability to restart:
  - Replay the same difficulty with a new word.
  - Choose a new difficulty.
- 🔊 Win/Lose sound effects.
- 📱 Responsive layout for desktop and mobile.
- 🎨 Visual feedback for letter accuracy.

---

## 🔊 Sound Effects

The following audio cues are included in the `sounds/` folder:

- ✅ `win.wav` — played when the player wins.
- ❌ `lose.wav` — played when the player loses.
- 💡 (Optional) You can add more like `hint.wav` or `click.wav`.

All sounds should be royalty-free and suitable for educational or public use.

---

## 📦 How to Run

1. Clone or download the repository.
2. Make sure your project folder contains:
   - `index.html`
   - `guess.js`
   - `guess.css`
   - `sounds/` folder
3. Open `index.html` in any modern web browser.
4. Enjoy playing!

---

## 📘 Developer Notes

- The code uses `SweetAlert2` for stylish popups. You must include the SweetAlert2 library in your `index.html`.
- Feel free to expand the word lists or localize them into other languages.
- To reset the game, use the provided buttons: "Restart Same Level" or "Choose Another Level".

---

## 📧 Credits

Game by [Mahmoud Badr](mailto:mahmoudbadrali15@gmail.com)

---

## 📝 License

This project is open-source and free to use for educational and personal purposes. Attribution is appreciated.

