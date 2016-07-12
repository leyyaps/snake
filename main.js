$(function(){

var snake=["1_8","2_8","3_8","4_8"]; //intial snake array
var direction = "down"; // direction starts down
var food=""; // no food till randomFoodGenerator
var speed = 150;
var timerId;
var bleep = new Audio("audio/bleep.wav");
var lose = new Audio('audio/lose.wav');
var score = 0;

// Creating the cells in the board
// Board is 600 x 400 so can take 30 cells wide and 20 blocks tall. They are snake-cells.
// Need to append the game-box with screen cells. 
// Let r = row and c=column. Then a number to correspond to where it is - e.g. r_10. -->  cell_row_column

function startGame() {
//  Snake isn't really moving of course- its having its tail chopped off and then head extended to give the appearance of movement.Snake can therefore be represented by using an array. We then can push and pop the cells from that array to make it move and stick an extra cell on when it eats
  direction = "down"; // inital direction
  snake = ["1_8","2_8","3_8","4_8"]; // initial array of snake
  food=""; // food not made yet
 
  score = 0;
  speed = 150;
  $('#score').html("Score: "+(score));

  console.log("startGame");
 
  $('#game-box').html(""); // Get the box 
 //Create the cells within the game-box that later become snake cells as the snake grows 
  for (var r = 0; r < 20; r++) {
    for (var c = 0; c < 30; c++) {
      $('#game-box').append('<div class=screen-cell id=cell_'+r+'_'+c+'></div>');
    }
  }
  // Create a snake in the game-box to start off with
  $('#cell_1_8').addClass('snake-cell');
  $('#cell_2_8').addClass('snake-cell');
  $('#cell_3_8').addClass('snake-cell');
  $('#cell_4_8').addClass('snake-cell');
  timerId = setTimeout(snakeMove, speed);

}

$('#go').click(function () {
  startGame();
  randomFoodGenerator();
  $(this).text('Play Again')
  $('#message').html("");

});

document.body.keydown = function(e){
    if(e.keyCode == 32){
        startGame();
        randomFoodGenerator();
        $('#message').html("");
    }
}

// Create a random food generator so snakey has something to eat
function randomFoodGenerator(){
  var r1 = Math.floor(Math.random() * 19);
  var c1 = Math.floor(Math.random() * 29);
  $('#cell_'+r1+'_'+c1).addClass('food');
  food = '' + r1 + '_' + c1;
  speed-=3; 
};

function snakeMove() {
  // Removing the tail of the snake
  var tail=snake.pop(); 
  $('#cell_'+tail).removeClass('snake-cell');

  //Adding to head using push. 
  // Change to using unshift as push puts it on end so wont look like moving
  // var head=snake.unshift();
  //   $('#cell_'+head).addClass('snake-cell');
  // Doesnt know where to put it.
  // Need to know the direction but to know that I need to know what key is pressed first

  var snakeHead=snake[0]; // Head is at the zero index position. So 1_8 po
  var rowColumn=snakeHead.split("_"); // Splitting the _ out of it and then parseInt the string to make it a number (creating coordinates effectively)
  var r=parseInt(rowColumn[0]);
  var c=parseInt(rowColumn[1]);
    switch(direction){   
      case "left": c=c-1; break; // Make snake add to  left
      case "up":r=r-1; break; // Top
      case "right": c=c+1; break;  // Right
      case "down": r=r+1; break; // Bottom
    }  
  var eat = r + "_" + c;
  // So now if the eat cell is equal to the food square we know to add to the snake tail .
  if (eat===food) {
      snake.push(tail);
      $('#cell_'+tail).addClass('snake-cell');
      $('#cell_'+food).removeClass('food'); //and remove the food so it's eaten  
      // console.log(speed);
      score++; // increment the score
      bleep.play(); // add bleep on eat
      randomFoodGenerator();
      $('#score').html("Score: "+(score*10)); // update score div

  }

  snake.unshift(eat);

  if(($('#cell_'+eat).hasClass('snake-cell')) && (snake.length>4)) {
  console.log("You've eaten yourself");
  $('#message').html("You are dead!"); //
   
  lose.play();
  return;

  } 

  $('#cell_'+eat).addClass('snake-cell'); 
    //how to die 
  if (c<0 || r<0 || c>29 || r>19){
      console.log("Dead!");
      $('#message').html("You are dead!");

      lose.play();
      return;
    }  
    $('#cell_'+eat).addClass('snake-cell');  

    // setTimeout(function(){snakeMove()}, speed);
  setTimeout(snakeMove, speed);
}

// Key press function
  $(document).keydown(function(e){
    if (e.keyCode === 37) { 
      direction="left";
    } else if (e.keyCode === 38) { 
      e.preventDefault();
      direction="up";
    } else if (e.keyCode === 39) { 
      direction="right";
    } else if (e.keyCode === 40) { 
      e.preventDefault();
      direction="down";
    } 
  });

}); 