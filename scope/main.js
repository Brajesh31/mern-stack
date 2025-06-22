//global scope
// let a = 24;
// console.log(a);
//let ans const have block scope
// ans var have function scope
// export const modulevar = "exported variable";
//function scope
// function print() {
//   let a = 2;
//   console.log(a);
//   if (true) {
//     let b = 3;
//     const c = 4;
//     var d = 5;
//     console.log(b, c);
//   }
// }

// console.log(b);
// function declaration
// print(); //not ommit error
// function print() {}
// function expression(cannot use this keyword )
// print(); //ommit error
// const print = () => console.log("hello");
// print();
//error handling
// try {
//   console.log("try  catch start");
//   setTimeout(() => {
//     skldfj;
//   }, 1000);
//   console.log("try block ends");
// } catch (err) {
//   console.log(err.name);
//   console.log(err.stack);

//   console.log("error aagya ");
// }
// setTimeout(() => {
//   try {
//     console.log("try  catch start");
//     skldfj;
//     console.log("try block ends");
//   } catch (err) {
//     console.log(err.name);
//     console.log(err.stack);

//     console.log("error aagya ");
//   }
// }, 1000);

// try {
//   console.log("try block start");
//   throw new SyntaxError("this is a syntax error");
// } catch (err) {
//   console.log(err);
//   console.log("error aa gya");
// }

// const json = '{ "name" : "Jones" } ';
// try {
//   let j = JSON.parse(json);
//   console.log(j.age);
//   if (!j.age) {
//     throw new Error("age is not present in json");
//   }
//   console.log(j.age);
// } catch (e) {
//   console.log(e);
// }

// const person = {
//   name: "kartik",
//   age: 25,
//   "married hai": false,
//   sayname: function () {
//     console.log("hello");
//   },
// };
// console.log(person.name);
// console.log(person["married hai"]);
// for (let key in person) {
//   console.log(key);
// }
// console.log(Object.values(person));
// console.log(person.sayname());
// let obj1 = {
//   name: "john",
// };
// let obj2 = obj1;
// console.log(obj2.name);
// obj1 = null;
// console.log(obj1.name);

// const person = {
//   name: "kartik",
//   age: 25,
//   "married hai": false,
//   sayname: function () {
//     console.log("hello");
//   },
// };

// const person2 = {
//   address: "new delhi",
//   favcolor: ["red", "green", "blue"],
//   __proto__: person,
// };
// const person2 = new Object(person);
// console.log(person2.name);
// // this keyword always points to an object
// function fun() {
//   console.log(this);
//   return 1;
// }
// fun();

const p1 = {
  a: 1,
  b: 2,
  fun: function (params) {
    this.a = 4;
    console.log(this.a);
  },
};
const p2 = {
  d: 1,
  e: 2,
  fun: function (params) {
    console.log(this);
  },
};
let newfun = p2.fun.bind(p1);
newfun.a = 9;
console.log(newfun());
//map
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr = newPollyfill(arr, cb);
console.log(newarr);
newarr = newFilter(arr, (x) => x % 2 == 0);
console.log(newarr);
// let newarr = arr.map((x) => x * x);
// console.log(newarr);
//pollyfill
function newPollyfill(arr, cb) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(cb(arr[i]));
  }
  return newarr;
}
function cb(x) {
  return x * x;
}

function newFilter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkCb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function pollyReduce() {}
