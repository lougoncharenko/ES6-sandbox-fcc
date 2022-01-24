//Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  //Mutate an Array Declared with const
  const s=[5,6,7];
 // s=[1,2,3]; provides an error
  console.log(s);
 s[2]=5;
 console.log(s); //mutates an array

 //more practice
 const a = [5, 7, 2];
function editInPlace() {

  a[0]=2;
  a[1]=5;
  a[2]=7;
  return a
  
}
editInPlace();
console.log(editInPlace());

//Prevent Object Mutation
//use object.freeze to prevent data mutation

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; //wont add because object is frozen
  obj.newProp = "Test"; //wont add because object is frozen
  console.log(obj); 

  //Use Arrow Functions to Write Concise Anonymous Functions
//   const myFunc=function() {
//       const myVar="value";
//       return myVar;
//   }

//   const myFunc=() => {
//       const myVar='value';
//       return myVar;
//   }

  const myFunc=() => 'value';


  //old
//   var magic = function() {
//     return new Date();
//   };

  //new
  const magic =() => new Date();

  //Write Arrow Functions with Parameters4
  const double = (item) => item*2;
  double(4);
  console.log(double(4));
 
  const multiplier=(item, multi) => item * multi;
  console.log(multiplier(4,2));

  //practice
  //old
//   var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
  
  

  //new
  const myConcat=(arr1, arr2) => arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));

  //Set Default Parameters for Your Functions
  const greeting= (name= " Anonymous") => 'Hello' + name;
  console.log(greeting('John'));
  console.log(greeting());

//default parameter kicks in when arguement is not specified;
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line

console.log(increment(3,2))

console.log(increment(3))

//Use the Rest Parameter with Function Parameters
//rest parameters allows use to take in multiple paramaeters and stores it as an array
function howMany(...args){
    return "You have passed " + args.length + " arugements.";

}
console.log(howMany(0,1,2,3,4,5,6,7))
console.log(howMany("string", null, [1, 2, 3], { }));

//old
// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   }

  //new
  const sum= (...args) => {
      
      return args.reduce((a,b) => a+b, 0);

  }

  //use the spread operator
  /*ES6 introduces the spread operator, 
  which allows us to expand arrays and 
  other expressions in places where multiple
   parameters or elements are expected. */

   //ES5 uses apply()

   var arr=[6,89,3,45];
   var maximus= Math.max.apply(null, arr);
   console.log(maximus);


   const arr2=[6,89,3,45];
   const maxim=Math.max(...arr);
   console.log(maxim);

   //practice
   //old
   const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr3;

  arr3 = [...arr1];  // Change this line

console.log(arr3);

//Use Destructuring Assignment to Extract Values from Objects
const user={name: 'John Doe', age:35};
const name=user.name;
const age=user.age;
console.log(name, age);


//practice es5
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

//   const today=HIGH_TEMPERATURES.today;
//   const tomorrow=HIGH_TEMPERATURES.tomorrow;


  //practice es6
  const {today, tomorrow}=HIGH_TEMPERATURES;
  console.log(today);
  console.log(tomorrow);


  //Use Destructuring Assignment to Assign Variables from Objects
  const { name: userName, age: userAge } = user;
  const {today:highToday, tomorrow:highTomorrow} =HIGH_TEMPERATURES;

  //Use Destructuring Assignment to Assign Variables from Nested Objects
  const user2 = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

//   const{johnDoe: {age, email}} =user2;
//   const {johnDoe: {age:userAge, email:userEmail}}=user2;

  //practice
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };


//   const {today: {low:lowToday, high:highToday}}=LOCAL_FORECAST

  //Use Destructuring Assignment to Assign Variables from Arrays
let [x,y,,,z]=[1,2,3,4,5,6]
console.log(x,y)

console.log(x,y,z)


//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [D,E,...arr4]=[1,2,3,4,5,7];
console.log(D,E)
console.log(arr4)

//more practice
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
 
  const [h,i,...arr5]=list;

  return arr5;
}
const arr5 = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate=(profileData) => {
    const {name, age, nationality, location}= profileData;
}

//or even shorter
const profileUpdate1= ({name, age, nationality,location}) =>{

}

//practice
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  const half= ({max,min}) => {
      return (max+min)/2
  }

 //Create Strings using Template Literals
 const person = {
    name: "Zodiac Hasbro",
    age: 56
  };

  const greeting1 = `Hello, my name is ${person.name}! 
  I am ${person.age} years old.`

  console.log(greeting1)

  //Write Concise Object Literal Declarations Using Object Property Shorthand
//   const getMousePosition= (x,y)=({
//       x:x,
//       y:y
//   });

  //es6 version
  const getMousePosition1=(x,y) => ({x,y});


  //practice
  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };

  //new
  const zack= createPerson('zack', 34, 'male')
  console.log(zack)

  //Write Concise Declarative Functions with ES6
  const person2 = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  //Use class Syntax to Define a Constructor Function
  //ES6 allows use to create objects using the class keyword
  class SpaceShuttle{
      constructor(targetPlanet){
          this.targetPlanet=targetPlanet
      }
  }
  const zeus= new SpaceShuttle('Jupiter');
  console.log(zeus)

  //practice
  class Vegetable{
      constructor(name){
          this.name=name;
      }
        }

    const carrot= new Vegetable('orange');
    console.log(carrot.name);

    //Use getters and setters to Control Access to an Object
    //obtain values==getters==return value
    //set values==setters==modify value

    class Book{
        constructor(author){
            this._author=author;
        }
        //getter
        get writer(){
            return this._author;
        }
        //setter
        set writer(updatedAuthor){
            this._author=updatedAuthor;
        }
    }

    const novel=new Book('annonymous');
    console.log(novel.writer)
    novel.writer='newAuthor';
    console.log(novel.writer)

    //practice
    class Thermostat{
        constructor(fahrenheit){
            this.fahrenheit=fahrenheit
        }
        //getter
        get temperature(){
            return (5 / 9) * (this.fahrenheit - 32);
        }
        //setter
        set temperature(celsius){
            this.fahrenheit = (celsius * 9.0) / 5 + 32;
        }
    }

    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
