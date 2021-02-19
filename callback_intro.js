class MyClocky {
  constructor() {
    let ourTime = new Date();
    this.hours = ourTime.getHours();
    this.minutes = ourTime.getMinutes();
    this.seconds = ourTime.getSeconds();
    
    setInterval(this._tick.bind(this), 1000);
    this.printTime();

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

// let ourClock = new MyClocky();

Array.prototype.addNumbers = function() { 
  let total = this[0]

  for (let i = 0; i < this.length-1; i++) {

    // let partialSum = 0

    // partialSum = this[i] + this[i+1]
    // console.log(partialSum)

    total += this[i+1]; 
    console.log(total + " ourpartials")
  };

  console.log(total + " ourtotal")
};

arr = [1,2,3,4,5,6,7,8].addNumbers();





