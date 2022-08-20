import changeZone from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = document.querySelector('.img');
  const zones = document.querySelectorAll('.zone');
  const currentZone = zones[Math.floor(Math.random() * zones.length)];
  currentZone.appendChild(goblin);
  changeZone(goblin, zones, currentZone);
});
