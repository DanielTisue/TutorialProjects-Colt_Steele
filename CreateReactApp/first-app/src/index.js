import foods from './foods';
import { choice, remove } from './helpers';

//Randomly draw a fruit from the array
let fruit = choice(foods);

//Log the message "I'd like one RANDOMFRUIT", 
console.log(`I'd like one ${fruit}, please.`);

//Log the message "Here's your RANDOMFRUIT"
console.log(`Here you go ${fruit}`);

// Log the message "Delicious! May I have another?"
console.log('Delicious! May I have another?')
// Remove the fruit from the array
let remaining = remove(foods, fruit);
//Log the message " You fucking ate it all Fatso!!!"
console.log(`You fucking ate all the  ${fruit}, FATSO!. But we do have ${remaining.length} other fruits left`);