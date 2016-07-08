$(function(){


// Creating the cells in the board
// (1) Board is 600 x 400 so can take 30 cells wide and 20 blocks tall. They are snake-cells.
// (2) Need to append the game-box with screen cells. 
// (3) Let r = row and c=column. Then a number to correspond to where it is - e.g. r_10. -->  cell_row_column

$('#game-box').html(""); // Get the box 
 
 //Create the cells within the game-box that later become snake cells as the snake grows 
  for (var r = 0; r < 20; r++) {
    for (var c = 0; c < 30; c++) {
      $('#game-box').append('<div class=screen-cell id=cell_'+r+'_'+c+'></div>');
    }
  }
// Create a snake to start off with
$('#cell_1_8').addClass('snake-cell');
$('#cell_2_8').addClass('snake-cell');
$('#cell_3_8').addClass('snake-cell');
$('#cell_4_8').addClass('snake-cell');

// Create a random food generator so snakey has something to eat
function randomFoodGenerator(){
  var r1 = Math.floor(Math.random() * 19);
  var c1 = Math.floor(Math.random() * 29);
  $('#cell_'+r1+'_'+c1).addClass('food');
     food=''+r1+'_'+c1;
};
randomFoodGenerator();
// console.log(food);

//  Snake isn't really moving(ha! I know - obvious but just to remind myself) its having its tail chopped of and then head extended to give the appearance of movement.Snake can therefore be represented by using an array. We then can push and pop the cells from that array to make it move and stick an extra cell on when it eats
var snake=["1_8","2_8","3_8","4_8"];

// Removing the tail of the snake
var tail=snake.pop(); 
  $('#cell_'+tail).removeClass('snake-cell');

//Adding to head using push. 
// Change to using unshift as push puts it on end so wont look like moving
// var head=snake.unshift();
//   $('#cell_'+head).addClass('snake-cell');
// Doesnt know where to put it.
// Need to know the direction but to know that I need to know what key is pressed first


// Setup the keyboard 
// $(document).keydown(function(e) {
//     console.log(e.keyCode);
// });
// I need LEFT = 37  UP = 38  RIGHT =39 DOWN= 40. Possibly space bar to start? = 32
$(document).keydown(function(e) {
   if (e.keyCode === 37) {
    var direction = left;
   } else if (e.keyCode === 38) {
    var direction = up;
   } else if (e.keyCode === 39) {
    var direction = right;
   } else if (e.keyCode === 40) {
    var direction = down;
   }
});





  


}); 