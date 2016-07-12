SNAKE

Based around my favourite childhood phone game from the Nokia phone family. My snake is a browser based version of the the same thing. 

The key technique was recognising that the shape of a snake in blocks could be represented as an array. This then set things up to be able extend the snake by unshifting to the front when it matched a food cell. 

The randomFoodGenerator builds upon classwork around random number generators and is a simple way of randomly flipping a class of a cell within a given area.

Movement is created through the changing of classes from screen cell to snake cell by removing at the back of the array and adding to the front.


The hardest bits were:
- Conceptually relising that nothing moves. There is no real snake. It doesn't actually move.
- Snake direction of travel. Being able to add onto the head in the right way based on the input from the user.
- Death of snake when eating itself. This problem compounded when the condition on start matched eating himself. Took half a day to come up with the simplest solution in the world of just adding the && statement to ensure it was at least a certain length before it was allowed to die.


 Missing features
 - Bonus random food with a time expiry assigned. I didn't add this because I didn't think it demonstrated any new skill. It would have been another random food generator just with a timer
 - Levels - This again would have been easy but decided I would rather the one level where it gets faster and faster and so in effect is like a new level. Adding an extra level would have been simply a case of adding 3 difficulty buttons and allowing the speed variable to be changed.
 - MAIN ONE I DIDNT DO was preventing the food from randomly generating within the snake. This I think I should have done
 - Dynamic styling - This game only works when you adjust the browser to a certain size.
 - Dynamic scoring. More points for catching the food earlier.