class MyClocky {
  constructor() {
    let ourTime = new Date();
    this.hours = ourTime.getHours();
    this.minutes = ourTime.getMinutes();
    this.seconds = ourTime.getSeconds();
  }

  printTime() {
    const ourTimeAsString = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(ourTimeAsString);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours > 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}

const ourClock = new MyClocky();
ourClock.printTime();
setInterval(ourClock._tick(), 1000);
ourClock.printTime();
