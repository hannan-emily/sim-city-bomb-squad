var totalTime = 30;
var timeRemaining = 0;
//combines win and lose conditions
var gameOver = false;
//this has to hold multiple values/each wire
var wiresToCut = [];

var delay = null;
var timer = null;

var wiresCut = {
  blue: false,
  green: false,
  red: false,
  white: false,
  yellow: false,
}

var checkForWin = function() {
  // check if there are wires left // game not over, still have wires // true game is over
  return wiresToCut.length > 0 ? false : true;
}

var detonate = function() {
  endGame(false);
}

var endGame = function(win) {
  gameOver = true;
  clearTimeout(delay);
  clearInterval(timer);
  if (win) {
    console.log("CONGRATS THEY DIDN'T DIE")
    document.getElementsByClassName("timerBox")[0].style.color = "green";
    var yay = document.getElementById('yay');
    yay.addEventListener("ended", function() {
      successSong.play();
    });
    yay.play();
  } else {
    console.log("Yikes, goodbye SimCity")
    document.body.classList.remove("unexploded");
    document.body.classList.add("exploded");
  }
}

//put the function above, since we're calling it below
//selecting this particular wire, not any other wire, from the getElementById (it knows if we clicked on green or blue or red)
//this relates to an id, which it knows is an img, therefore we can reference "src" becuase it infers that
//overwriting the img src with a new img src
var cutWire =  function() {
  //we have to see if this action was a right or wrong choice
  //if this wiresCut does not match false (if it's been overwritten as true)
  //if it needs to be cut, then we'll switch the image to  if this function is called upon
  //we also add a condition the the gameOver must not be true. so, once the game is over, we cannot cut wires (replace image)
  if (!wiresCut[this.id] && !gameOver) {
      // document.getElementById.("buzz").play();
      this.src = "img/cut-" + this.id + "-wire.png";
      wiresCut[this.id] =  true;
      //now let's check if this value matches the wiresToCut array. we're saving as a new variable.
      var wireIndex = wiresToCut.indexOf(this.id);
        //if it comes back as -1, we know it wasn't in that array
        if (wireIndex > -1) {
          // this is where the good cut logic goes
          console.log("this.id" + " was correct!");
          wiresToCut.splice(wireIndex, 1);
          //now we have to check if this click won the game.
          if (checkForWin()) {
            endGame(true);
          }
        } else {
          //this is where the bad cut logic goes
          delay = setTimeout(detonate, 750);
        }
      }
  };


  //reset the images to default when we run this function
var reset = function() {
  //set up a loop to set all images to "uncut + id + -wire.ong".
  //locate the class. start at 0. every element thats a child, now store in all in "wireImages".
  //we're grabbing and storing, returning a html collection
  //for loop below goes thrhogh and replaces all the images for each child
  gameOver = false;

  var wireImages = document.getElementsByClassName('imageBox')[0].children;
  for (var i = 0; i < wireImages.length; i++) {
    wireImages[i].src = "img/uncut-" + wireImages[i].id + "-wire.png";
  }

  document.body.classList = "unexploded";
  document.querySelector(".timerBox").style.color = "red";

  clearTimeout(delay);
  clearInterval(timer);

  successSong.pause(); // reset
  successSong.currentTime = 0; // reset song back to initial start. otherwise, once unpaused, it'll start again where it left off.

  for (color in wiresCut) {
    wiresCut[color] = false;
  }

  initGame();
};

//how do we store a variable if it's been clicked?????
// write new function to this.element append class "clickedClicked"

updateClock = function() {
  timeRemaining--;
  var seconds = 0;
  var hundredths = 0;

  if ((timeRemaning) >= 0) {
    seconds = Math.floor(timeRemaining / 100);
    hundredths = timeRemaining - (seconds * 100);
  } else {
    endGame(false);
  }
  var secondsString = seconds >= 10 ? seconds.toString() : "0" + seconds.toString();
  var hundredthsString = hundredths >= 10 ? hundredths.toString() : "0" + hundredths.toString();
  document.querySelector(".timerBox p").textContent = ("0:00:" + secondsString + ":" + hundredthsString);
}

var initGame = function() {
  timeRemaning = totalTime;
  var allColors = Object.keys(wiresCut); //this var holds all our colors from above var wiresCut (array with key values)
  //create new array only showing filteres results from old wire array
  //create filter for 50/50 chance
  //store new array as wiresToCut by overwriting
    wiresToCut = allColors.filter(function () {
      var rand = Math.random(); //generates a number between 0 and 1
      if (rand > 0.5) {
      return true;
    } else {
      return false;
    }
  });
  console.log(wiresToCut);
  timer = setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
// get element to click on (document blah  blahc . addevent (event, function name))
  document.getElementById("blue").addEventListener('click', cutWire);
  document.getElementById("green").addEventListener('click', cutWire);
  document.getElementById("red").addEventListener('click', cutWire);
  document.getElementById("white").addEventListener('click', cutWire);
  document.getElementById("yellow").addEventListener('click', cutWire);
  successSong = document.getElementById('success'); // turn html element into variable for use
  document.getElementById("reset").addEventListener('click', reset);
  initGame();
});
