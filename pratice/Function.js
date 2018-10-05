//Image a function as a factory. Inside the factory you could tell what logic to run
// After the factory is built you need to invoke it to make it run.

//Here we create a variable call sum and hold a value
let sum = total(2,5);
//next we need to build our factory

function total (a,b) {
    return a+b;
}
//After the factory is built we need to invoke it
//a way to see the result is console.log
console.log('see what we get back',sum)

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
