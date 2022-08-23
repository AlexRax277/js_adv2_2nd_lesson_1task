import Goblin from './js/app.js';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new Goblin(document.querySelector('.img'), document.querySelectorAll('.zone'));
  goblin.getZone();
  goblin.getNextzone();
});
