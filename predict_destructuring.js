/*
PREDICTION: 1
*/
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // randomCar = "Tesla"
console.log(otherRandomCar) // otherRandomCar = "Mercedes"


/*
PREDICTION: 2
*/
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // null/ undefined
console.log(otherName);// Elon 

/*
PREDICTION: 3
*/
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //null/undefined

/*
PREDICTION: 4
*/
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second);//false
console.log(first == third);//true


/*
PREDICTION: 5
*/
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest; //null/undefined
const [ ,willThisWork] = secondKey; //null/undefined
//Predict the output
console.log(key); //value
console.log(secondKey); //null
console.log(secondKey[0]); //nul
console.log(willThisWork); //null



