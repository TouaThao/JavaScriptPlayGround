// This is to pratice and the basic

//Basic console.log
//This is useful when you need to debug and follow your type of data and what being pass
//This is a bad way to log things if you have to check for mutiple things
console.log('Hello World');
const Bob = {name: 'Bob', age: 36}
const Harry = {name: 'Harry', age:29}
const Bobby = {name: 'Bobby', age:33}
console.log(Bob);
console.log(Harry);
console.log(Bobby);

//Good pratice
//This will us on the browser to see what each object hold
console.log({Bob,Harry,Bobby});

//Here we adding color to console.log so it will be easier to see on the browser
console.log('%c My Friend', 'color:orange;')
console.log({Bob,Harry,Bobby})

//Here we're going use table
console.table([Bob,Harry,Bobby])

//Next we could benchMark time as well
console.time('loop')
let i = 0;
while (i< 50000) {i++}
console.timeEnd('loop')

//here we could trace if any code is being use twice
//We could see what line and when it was run
const runMe = ()=> console.trace('running the code');
runMe()
runMe()
//There is also so many different type of console out there so go out and research



//type of
//this is usefull if you want to know what kind of data you're getting
let num1 = 'this is a string' // string
let num2 = 20 // Integer
let num3 = true //boolean
let num4 = ['a,b,c,d']// object of array

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);

//Method
//.toUpperCase
//This is one of the many Method that is build in JavaScript
//toUpperCase() will change your string all to Upper case
console.log('The Cat is hungry'.toUpperCase());

//Method
//.toLowerCase
//Same thing as toUpperCase but make them lower case
console.log('THE CAT IS HUNGRY'.toLowerCase());

//Method
//.toLocaleUpperCase and toLocaleLowerCase are the same but best use on base on the langague on the browser
//So use this would be a better method than the previous one
console.log('The cat is thirsty'.toLocaleUpperCase());
console.log('THE CAT IS LAZY'.toLocaleLowerCase());

//Method
//trim()
//this is use to remove the empty space in around the string
console.log('       The Cat is Long      '.trim());

//Built in object
//we're going use Math.random() and Math.floor
//This will give us a random number then mutiply it by 25
//Math.floor will make it a whole number. 
//Just image you flooring the accelator, you're basically pushing/squshing the number to a whole number
console.log(Math.random()* 25);
console.log(Math.floor(Math.random()*25));

// more built in object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//line