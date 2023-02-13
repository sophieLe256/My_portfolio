function isLess(a, b) {
    // Only change code below this line
    return a <= b;
    // Only change code above this line
  }
  
  isLess(10, 15);

/*
  // Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];
  console.log(entreeValue); // hamburger
  const drinkValue = testObj["the drink"]; 
*/

/*
// Setup
const testObjtive = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObjtive.hat;
  console.log(hatValue); //ballcap
  const shirtValue = testObjtive; 
*/

/*
  // Setup
const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;
  const player = testObj1[playerNumber]; 
  console.log(player); //Montana
*/


/*
  //Testing object for properties
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp]
    } else {
      return "Not Found"
    }
    // Only change code above this line
  }
*/



/*
// Setup
const myArray = [];

// Only change code below this line
let i = 0;
while(i<=5){
  myArray.unshift(i);
  i++;
}

console.log(myArray);
*/


/*
// Setup
const myArray = [];

// Only change code below this line
for(let i = 0; i < 6; i++){
  myArray.push(i);
}

console.log(myArray);
*/

// function multiplyAll(arr) {
//     let product = 1;

//     for(let i = 0; i < arr.length; i++){
//       for (let j = 0; j < arr[i].length; j++){
//         product *= arr[i][j];
//       }
//     }
    
//     return product;
//   }
  
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));



/*
  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].firstName == name){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact"
  
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  */

/*
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

  console.log(randomRange(2,10));
*/

//Convert string to an integer by using parseInt()
//Convert binary to an integer base 2 by using parseInt(string, radix)



// Use Multiple Conditional (Ternary) Operators
/*
function checkSign(num) {
    return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
  }
  
  checkSign(10);
  */

 

  //Recursion to create a countdown
  /*
  function countdown(n){
    if(n <= 0){
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }

  console.log(countdown(10)); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  */


  /*
  function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
      return [];
    } else if(startNum == endNum){
      return [startNum];
    } else {
    const count = rangeOfNumbers(startNum, endNum - 1);
      count.push(endNum);
      return count;
    }
  };

  console.log(rangeOfNumbers(1,5)); // 1,2,3,4,5
  console.log(rangeOfNumbers(5,5)); // 5
  console.log(rangeOfNumbers(5,1)); // []
  */


  /* 
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s.unshift(s.pop());
  // Only change code above this line
}
console.log(editInPlace(s));
*/





/* Preven Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

*/

//Use Arrow Functions to Write Concise Anonymous Functions
/*
const magic = () => {
  return new Date();
};
*/

/* Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2) ;

console.log(myConcat([1, 2], [3, 4, 5]));
*/

/* Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;
*/

/*
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
*/


/* Use Destructuring Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
*/

/* Use Destructuring Assignment to Assign Variables from Objects
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
*/

/* Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

Method 1:
const { johnDoe: { age, email }} = user;

Method 2:
const { johnDoe: { age: userAge, email: userEmail }} = user;
*/  

/*
ES6 makes destructuring arrays as easy as destructuring objects.
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); //1,2,5

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
*/


/*
Destructuring via rest elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);



function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

*/

/*
Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
const profileUpdate = ({ name, age, nationality, location }) => {

}

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line

*/

function sayHello(){
  for(var i = 0; i < 5; i++){
    console.log(i);
  }
}


