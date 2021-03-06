let statsBtn = document.querySelector(".nav-link-stats");
let playButton = document.querySelector('.nav-link-play');

let showLogin = () => {
  let loginForm = document.querySelector('.login-form');
  loginForm.classList.remove('hidden');
}

let showInstructions = () => {
  let form = document.querySelector('.login-form')
  let instructions = document.querySelector(".instructions");
  let navBar = document.querySelector('.nav');
  let statsPage = document.querySelector('.stats');
  statsPage.classList.add('hidden');
  navBar.classList.remove('remove');
  form.classList.add("hidden");
  let logoutLink = document.querySelector('.nav-logout');
  logoutLink.classList.remove('logout-remove')
  instructions.classList.remove("hidden");
  return instructions;
};

let showStats = () => {
  let statsPage = document.querySelector('.stats');
  let game = document.querySelector('.game');
  let instructions = document.querySelector('.instructions');
  game.classList.add('hidden');
  instructions.classList.add('hidden');
  statsPage.classList.remove('hidden');
  let level = 0; // Level 0 stores total scores/times.
  fetchScores(stage, level); 
};

statsBtn.addEventListener("click", showStats);
playButton.addEventListener('click', showInstructions);