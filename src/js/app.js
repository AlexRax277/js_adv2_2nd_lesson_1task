export default class Goblin {
  constructor(goblin, field) {
    this.goblin = goblin;
    this.field = field;
  }

  getZone() {
    this.field[Math.floor(Math.random() * this.field.length)].appendChild(this.goblin);
  }

  getNextzone() {
    const currentZone = document.querySelector('.img').closest('.zone');
    const nextZone = this.field[Math.floor(Math.random() * this.field.length)];
    if (currentZone !== nextZone) {
      setInterval(() => {
        this.getZone();
      }, 1000);
    } else {
      this.getNextzone();
    }
  }
}
