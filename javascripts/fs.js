const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// function callback(err, data) {
//     if (!err) console.log(data);
//     else {
//         console.log(err);
//     }
// }
// let i = 1;
//asynchronus
// while (i < 5) {
//     file = "javascripts/" + "" + i++ + "" + ".html";
//     print(file);
// }

// function print(file) {
//     data = fs.readFile(file, "utf-8", callback);
// }
// let count = 1;

// function callback(err, data) {
//   if (!err) {
//     count++;
//   }
//   console.log(data);
//   if (count < 6) {
//     fs.readFile("javascripts/" + count + ".html", "utf-8", callback);
//   }
//   if (count == 6) {
//     return;
//   }
// }
// fs.readFile("javascripts/" + count + ".html", "utf-8", callback);

//synchronus
// let count = 1;
// function callback(err, data) {
//   if (count < 6) {
//     if (!err) {
//       console.log(data);
//       count++;
//     } else {
//       console.log(err);
//     }
//     fs.readFile("javascripts/" + count + ".html", "utf-8", callback);
//   }
// }
// fs.readFile("javascripts/" + count + ".html", "utf-8", callback);
// let a = true;
// setTimeout(() => {
//   console.log("this is callback");
// }, 1000);
// setTimeout(() => {
//   a = false;
// }, 1000);
// while (a) {
//   console.log("hello");
// this loop will never end bea
// }
// a = true;
// count = 1;
// setInterval(() => {
//   if (a) {
//     console.log("hello " + count++);
//   }
// }, 1000);
// setTimeout(() => {
//   a = false;
// }, 10061);
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let randomNum = Math.floor(Math.random() * 10);
//     console.log(randomNum);
//     if (randomNum % 2 == 0) {
//       resolve(randomNum);
//     } else {
//       reject();
//     }
//   }, 2000);
// });
// p.then((data) => {
//   console.log(data);
//   console.log("resolve");
// }).catch((err) => {
//   console.log("reject");
// });
// async function abc() {
//   return new Promise((resolve, reject) => {
//     resolve("Hello");
//     console.log("hello");
//   });
// }
// abc().then((data) => {
//   console.log(data);
// });
// let temp = abc();
// console.log(temp);
// async function abc() {
//   return new Promise((resolve, rejects) => {
//     console.log("hello");
//     resolve("abc");
//   });
// }
//sync
// let readFilepromise = fs.promises.readFile("javascripts/1.html", "utf-8");
// console.log(readFilepromise);
// readFilepromise.then((data) => {
//   console.log(data);
// });
//async
// async function data() {
//   console.log(await fs.promises.readFile("javascripts/1.html", "utf-8"));
// }
// data();

// async function abc() {
//   await fs.promises.writeFile("javascripts/1.html", "hello");
//   let data = await fs.promises.readFile("javascripts/1.html", "utf-8");
//   console.log(data);
//   return "how are you";
// }
// async function main() {
//   let data = await abc();
//   console.log(data);
// }

// main();
function abc() {
  return new Promise(function (res, rej) {
    fs.promises
      .readFile("javascripts/20.html", "utf-8")
      .then(function (data) {
        console.log(data);
        res("resolve");
      })
      .catch(function (err) {
        console.log("i am rejected");
        rej("rejected");
      });
  });
}
abc()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
