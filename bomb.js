console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {


//put the function above, since we're callin it below
var cutWire =  function ()

// get element to click on (document blah  blahc . addevent (event, function name))
document.getElementById("blue").addEventListener('click', cutWire)
document.getElementById("green").addEventListener('click', cutWire)
document.getElementById("red").addEventListener('click', cutWire)
document.getElementById("white").addEventListener('click', cutWire)
document.getElementById("yellow").addEventListener('click', cutWire)


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
