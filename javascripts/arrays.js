// let arr = new Array(5);
// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     "apple",
//     "true",
//     function() {
//         alert("hello world");
//     },
// ];
// console.log(arr[10]());
// console.log(arr.push("false", 45));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift("23", 67));
// console.log(arr);
// console.log(arr[2] == arr[2]);
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// // console.log(arr[1][1]);
// // sum = 0;
// // let r = arr.length;
// // let c = arr[0].length;
// // for (i = 0; i < r; i++) {
// //     for (j = 0; j < c; j++) {
// //         console.log(i + " " + j);
// //         sum = sum + arr[0][j];
// //         arr.push(arr[0][j]);
// //     }
// //     arr.shift();
// // }
// // console.log("sum:- " + sum);
// // console.log(arr);
// // arr.splice(2, 0, 10, 45);
// // console.log(arr);
// // arr.splice(2, 1);
// // delete arr[2];
// // console.log(arr);
// // let str = "This is a dev class";
// // let res = "";
// // let s = 0;
// // for (i = 0; i < str.length; i++) {
// //     if (str[i] == " " || i == str.length - 1) {
// //         if (str[i] == " ") {
// //             end = i - 1;
// //         } else {
// //             end = i;
// //         }
// //         while (s <= end) {
// //             res = res + str[end];
// //             end--;
// //         }
// //         res += " ";
// //         s = i + 1;
// //     }
// // }
// // console.log(res);
// let str = "background-color-red";
// let res = "";
// let ans = (ele) => {
//     for (i = 0; i < ele.length; i++) {
//         if (ele[i] == "-" && ele[i + 1] >= "a" && ele[i + 1] <= "z") {
//             res += ele[i + 1].toUpperCase() + "";
//             i++;
//         } else {
//             res += ele[i] + "";
//         }
//     }
//     return res;
// };
// console.log(ans(str));
// let obj = {
//     name: "john",
//     hello1: 1,
//     hello2: 2,
//     welcome: function() {
//         console.log("welcome ji");
//     },
//     arr1: ["maruti", "swift", "baleno"],
// };
// console.log(obj.arr1);
// console.log(obj["hello1"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// obj.welcome();
// obj["isAdult"] = true;
// console.log(obj.arr1[1]);
// let str = "abc bbca caab ddac";
// let obj = {};
// for (i = 0; i < str.length; i++) {
//     // if (str.charAt(i) == " ") continue;
//     if (obj[str.charAt(i)]) {
//         obj[str.charAt(i)] += 1;
//     } else {
//         obj[str.charAt(i)] = 1;
//     }
// }
// delete obj[" "];
// console.log(obj);
// person = {
//     name: "john",
//     age: 24,
// };
// console.log(person["name"]);
// person = null;
// console.log(person["name"]); //garbage collector
// prototype
// it is a mechanism through which Object can inherit properties of one another

// let p1 = Object.create(person);
// let p1 = {
//     lastname: "doe",
//     __proto__: person,
// };
// console.log(p1.name);

// let arr = Object.create(Array);

// console.log(arr);
// Array.prototype.pop = function() {
//     console.log("mai change ho gya");
// };
// arr = [1, 2, 3, 4, 5];
// arr.__proto__ = Array.prototype;
// arr.pop();
// call backs
function print(val) {
    console.log(val);
}

function add(n1, n2, print) {
    let sum = n1 + n2;
    print(sum);
}
add(2, 3, print);