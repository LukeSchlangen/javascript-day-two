// var zombieOne = 'Luke';
// var zombieTwo = 'Paul';
// var zombieThree = 'Fred';
//
// var zombieArray = ['Kris', zombieTwo, 'Catherine', 'Jeremy'];
// var zombieArrayTwo = ['Rabbit', 'Cow'];
//
// console.log(zombieArray[5]);
// zombieArray.push(zombieOne);
// zombieArray.push(zombieTwo);
// zombieArray.push(zombieThree);
// console.log(zombieArray[5]);
//
// zombieArray.unshift(zombieThree);
// console.log(zombieArray);
//
// zombieArray.pop(); // losing last Fred
// console.log(zombieArray);
//
// var whoGotPopped = zombieArray.pop(); // lost Paul
// console.log(whoGotPopped);
//
// whoGotPopped = zombieArray.pop();
// console.log(whoGotPopped);
//
// whoGotPopped = zombieArray.pop();
// console.log(whoGotPopped);
//
// whoGotPopped = zombieArray.shift();
// console.log(whoGotPopped);
//
// console.log(zombieArray.length); // ['Kris', 'Paul', 'Catherine' ]
//
// zombieArray[2] = 'Steve';
// zombieArray[3] = 'Carla';
// zombieArray[7] = 'Cody';
//
// console.log(zombieArray);
//
// zombieArray.length = 429;
//
// var someNumber = 0;
// for(var i = 0; i < zombieArray.length; i++){
//   if(zombieArray[i] == 'Carla') {
//     console.log(i);
//   }
//   // console.log(zombieArray[i]);
// }

// console.log(whoIsAZombie(zombieArray));
// console.log(whoIsAZombie(zombieArrayTwo));
//
// function whoIsAZombie(zombies) {
//   // console.log('zombies: ', zombies);
//   // console.log('zombies[0]: ', zombies[0]); // bracket notation OR index notation
//   return zombies[0] + ' and ' + zombies[1];
// }

var ballOfString = "yarns of the favoriteskasjdflkasj efl";

var firstLetter = ballOfString[0];
firstLetter = ballOfString.charAt(0);

var stringLength = ballOfString.length;

var firstTwoLetters = ballOfString.substring(0, 2);
var middleTwoLetters = ballOfString.substring(stringLength / 2 - 1, stringLength / 2 + 1);
var lastTwoLetters = ballOfString.substring(stringLength - 2, stringLength);

console.log(middleTwoLetters);

var commaSeparatedValues = "one, two, three, four";

var newArray = commaSeparatedValues.split('E');

console.log(newArray);
















// some stuff
