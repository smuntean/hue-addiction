let personalScore = document.querySelector('.personal-score');
let personalTime = document.querySelector('.personal-time');
let averageScore = document.querySelector('.average-score');
let averageTime = document.querySelector('.average-time');
let levelLinks = document.querySelectorAll('.level-link');

let insertStatsData = (level, data) => {
  let statsObject = data;
  for (let j = 1; j <= 2; j++) {
    let stage = 'stage' + j;
    if (statsObject.average[stage]) {
      console.log(statsObject.average[stage]);
      if (statsObject.average[stage][level]) {
        let averageScoreContent = statsObject.average[stage][level].score;
        console.log(averageScoreContent)
        averageScore.textContent = `Average score: ${averageScoreContent}`;
    
        let averageTimeContent = statsObject.average[stage][level].time;
        console.log(averageTimeContent)
        averageTime.textContent = `Average time: ${averageTimeContent}`;
    
        let personalScoreContent = statsObject.user[stage][level].score;
        console.log(personalScoreContent)
        personalScore.textContent = `Your score: ${personalScoreContent}`;
    
        let personalTimeContent = statsObject.user[stage][level].time;
        console.log(personalTimeContent)
        personalTime.textContent = `Your time: ${personalTimeContent}`;
      }
    }   
  }
};

let fetchScores = () => {
  let token = localStorage.getItem("token");
  fetch('/api/game_data',  {
    headers: {
      "token": token
    }
  }).then(res => {
    console.log(res);
    return res.json();
  })
  .then(data => {
    for (levelLink of levelLinks) {
      levelLink.addEventListener('click', (event) => {
        event.preventDefault();
        let level = event.target.textContent;
        insertStatsData(level, data);
      });
    }
    insertStatsData(1, data);
    console.log(data);
  })
};







