var totalTime = 30;
var timeRemaning = 0;
//combines win and lose conditions
var gameOver = false;
//this has to hold multiple values/each wire
var wiresToCut = [];

var wiresCut = {
  blue: false,
  green: false,
  red: false,
  white: false,
  yellow: false,
}

//put the function above, since we're calling it below
//selecting this particular wire, not any other wire, from the getElementById (it knows if we clicked on green or blue or red)
//this relates to an id, which it knows is an img, therefore we can reference "src" becuase it infers that
//overwriting the img src with a new img src
var cutWire =  function() {
  this.src = "img/cut-" + this.id + "-wire.png";
};

  //reset the images to default when we run this function
var reset = function() {
  //set up a loop to set all images to "uncut + id + -wire.ong".
  //locate the class. start at 0. every element thats a child, now store in all in "wireImages".
  //we're grabbing and storing, returning a html collection
  //for loop below goes thrhogh and replaces all the images for each child
  var wireImages = document.getElementsByClassName('imageBox')[0].children;
  for (var i = 0; i < wireImages.length; i++) {
    wireImages[i].src = "img/uncut-" + wireImages[i].id + "-wire.png";
  }

};

//how do we store a variable if it's been clicked?????
// write new function to this.element append class "clickedClicked"


var initGame = function (){
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
};



document.addEventListener("DOMContentLoaded", function() {
// get element to click on (document blah  blahc . addevent (event, function name))
document.getElementById("blue").addEventListener('click', cutWire);
document.getElementById("green").addEventListener('click', cutWire);
document.getElementById("red").addEventListener('click', cutWire);
document.getElementById("white").addEventListener('click', cutWire);
document.getElementById("yellow").addEventListener('click', cutWire);
document.getElementById("reset").addEventListener('click', reset);

});





//cut wire = click = swap image out to cut wire image

//can't uncut the wire, flag wire as cut

//each time bomb is reset, reset 5 wired

//wire has 50% chance to be cut

//Cut Wires
  //set timeout for 750 (ms) delay on a bad wire for bomb event or not bomb event
//Reset Game
  //reset wire logic
  //math.random to decide which ones need to be Cut
  //swap city image in
//Win
  //stop timer
  //turn timer text green
  //stop timeout before bomb blows p
//Lose
  //swap explosion image in//var

//bomb
  //keep track of bomb exploded or not exploded
//timer
  //stop clock when we lose = bomb
  //should run down to 0 at the end

//var timerTotal = 30 seconds
//var timerRemain = seconds left
//var bombDefuse = true or false
//var bombExplode = true or false
//var
//var

//replace image = setAttribute
