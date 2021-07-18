'use strict';

{
  function setWord(){
    // word = words[Math.floor(Math.random() * words.length)];
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;  
    loc = 0;
  }

  
  const words = [
    'red',
    'blue',
    'pink',
  ];
  let word;
  let loc;
  let score;
  let miss;

  const timeLimit = 3 * 1000;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timeLabel = document.getElementById('timer');
  // let count = 0;
      
  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timeLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if (timeLeft < 0) {
      clearTimeout(timeoutId);
      timeLabel.textContent = '0.00';
      setTimeout(() => {
        // alert('Game Over');
        showResult();
      }, 100);
      target.textContent = 'Click to replay';
    }
  }
  // let timeoutId;


  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }


  document.addEventListener('click', () => {
    if (isPlaying === true){
      return;
    }

    isPlaying = true;
    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];
    startTime = Date.now();
    updateTimer();
    // countUp();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (isPlaying !== true){
      return;
    }
    if (e.key === word[loc]){
      loc++;
      score++;
      scoreLabel.textContent = score;
      // return;
    }else{
      miss ++;
      missLabel.textContent = miss;
    }
      

      // 1: _ed
      // 2: __d
      // 3: ___
      // console.log(mis_count);
      target.textContent = '_'.repeat(loc) + word.substring(loc);
    if (loc === word.length){
      if (words.length === 0){
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        // mis_count.textContent = String(mis_count);
        return;
      }
      // console.log(mis_count);
      setWord();
    }

  });
}