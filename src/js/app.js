import Goblin from './goblin.js';

export default function mainFoo() {
  const field = document.createElement('div');
  field.className = 'field';
  const section = document.createElement('section');
  field.appendChild(section);
  const zonNum = 1;
  while (zonNum < 17) {
    const zone = document.createElement('div');
    zone.className = 'zone';
    section.appendChild(zone);
  }
  const image = document.createElement('img');
  image.alt = 'goblin';
  image.className = 'img';
  image.src = '/src/img/goblin.png';
  document.documentElement.body.appendChild(field);
  const goblin = new Goblin(document.querySelector('.img'), document.querySelectorAll('.zone'));
  goblin.getZone();
  goblin.getNextzone();
}
