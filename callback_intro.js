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

// Array.prototype.addNumbers = function() {
//   let total = this[0]

//   for (let i = 0; i < this.length-1; i++) {

//     total += this[i+1];
//     console.log(total + " ourpartials")
//   };

//   console.log(total + " ourtotal")
// };

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("ENTER a number to add ", function(numInput)
    {
      let toAdd = parseInt(numInput);
      sum += toAdd;
      console.log(`Partial sum: ${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

function completionCallback(sum) {
  reader.close();
  console.log(`Total sum: ${sum}`);
}

addNumbers(0, 4, completionCallback);

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("ENTER a number to add ", (numInput) => {
//       let toAdd = parseInt(numInput);
//       sum += toAdd;
//       console.log(`Partial sum: ${sum}`);
//       numsLeft -= 1;
//       addNumbers(sum, numsLeft, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// }

// function completionCallback(sum) {
//   reader.close();
//   console.log(`Total sum: ${sum}`);
// }


const readline2 = require("readline");

const reader2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askIfGreaterThan(el1, el2, callback){
  reader2.question(`ENTER 'yes' OR 'no" :: is ${el1} > ${el2}?`, (answer) => {
  
    if (el1 > el2 && answer === "yes"){
      return true;
    }

  });
}