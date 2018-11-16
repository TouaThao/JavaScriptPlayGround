//Imagine a function as a factory. Inside the factory you could tell what logic to run
// After the factory is built you need to invoke it to make it run.

//Here we create a variable call sum and hold a value
let sum = total(2,5);
//next we need to build our factory

function total (a,b) {
    return a+b;
}
//After the factory is built we need to invoke it
//a way to see the result is console.log
console.log('see what we get back',sum);

//More example
//Now let build our factory to do the logic 
function totalSum (sum2,sum3){
    return sum2 - sum3;
}
//now let check the result
let result = totalSum(2,4)
console.log('checking result', result);
// so step by step
// we created a factory that take in sum2 and sum3. sum2/sum3 could be anything
// inside the factory we give it the logic to run. ie we did a simple subtraction
// after that we want to see the result so we create an variable that run/invoke the factory
// we also give it a vaule to totalSum so it know what to take in

//for loop example
// a for loop is use to go over all the data that inside a variable.
// We variable that hold an array of data, in this case car maker
let arrayItem = ['subaru','honda','gm','kia','bmw']

//After we got this we need to do a for loop
for (let index = 0; index < arrayItem.length; index++) {
  console.log(arrayItem)
}

//If statement
// if statement is to check what we are comparing to is true or false
// in here we check if this year is the year 2018
// let year = 2028
// if( year !== 2018){
//     return console.log("false")
// } else if ( year === 2018) {
//     return console.log("true")
// }else{
//     return console.log("Pick a different year")
// }
//Now we will need to commit this out
// the return will make the other code unreachable

//Now we could also do add the If function and for loop function and combine them togather
//This will in turn create a function that loop through the data and if any data match what we 
// are looking for matches then it will return the result
//This is conditional checking
// we do for loop first then do a if/else or case


let array = [ 1,2,3,4,5,6]
function arrayTesting(array){
for (let i = 0; i < array; i++) {
  
    if (array === 3) {
        return console.log('we got 0')
    }
}
}
arrayTesting()

let mystuff = ['Shoe','Car','House','keys']
let ourstuff = ['New car','red shoe','blue shoe','keys']
for( let mystuffIndex = 0; mystuffIndex < mystuff.length; mystuffIndex ++){
console.log(mystuff[mystuffIndex])
}

//while loop pratice
let deck = ['Heart', 'Club', 'Diamond', 'Spade'];
let newCard = 'diamond'
while(newCard !== 'club '){
console.log(newCard)
newCard = deck[Math.floor(Math.random() * 4)];
break;
}
console.log('You found the club card!');
//will need to add break on it or it will be infinit loop


//Lets do a filter
let range = [ 20 , 40 ,60 ,80 ];
let newRange = range.filter(num => num > 60);
console.log(newRange);

//Creating object
//An object we use the curly brace and inside there we use the colon and comma : ,
//An example
//After we created an obeject we could start to add more keys
//But before we move to the next key we need to end our previous key with a comma ,
let hero = {
    name:'Toua',
    power:'lucky',
    age:'Unknown'
};
console.log(hero);

//we could also do a setter on it 