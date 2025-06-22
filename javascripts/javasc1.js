// function first() {
//     console.log("first.....");
// }
// function second() {
//     console.log("second.....");
// }
// function third() {
//     console.log("third.....");
// }
// third();
// second();
// first();
// var a = 23;
// console.log(`hi ${a}`);
// alert(`hi ${a}`);
// console.log(typeof a);
// alert(typeof a);
// let arr = [1, null, "yoyoyo", true, undefined];
// for (let i = 0; i < arr.length; i++) {
//     str = `type of ${arr[i]} is ${typeof arr[i]}`;
//     alert(str);
// }
// alert(NaN ** 0);
// let x = NaN;
// let s;
// let y = null;
// console.log(x, typeof x);
// console.log(s, typeof s);
// console.log(y, typeof null);
// let isGreater = 4 > 1;
// alert(isGreater);
// let a = prompt("how old are you ", 25);
// alert(`you are ${a} year old`);
// let iG = confirm("is 4 greater than 1");
// alert(iG);
// document.write("this is a statement");
// let d = "31";
// d += 1;
// alert(d);
// a = Number(d);
// let p = String(3.14);
// console.log(p, typeof p);
// let q = Boolean(" ");
// console.log(q, typeof q);
// let r;
// function myfun() {
// s = Number(document.getElementById("str").value);
//   s = document.getElementById("str").value;
// document.write(Number(s));
//   document.getElementById("ans").innerHTML += +s + " " + typeof s;
// document.getElementById("ans").textContent += +s + " " + typeof s;
// }
// console.log("this is a first string " + "this is sencond string");
// console.log("6" - 2);
// console.log("6" / 2);
// let num = 2;
// console.log(++num);
// console.log(num);
// console.log(num--);
// console.log(num);
// assignment operator always return a value '='
// let num2 = 2;
// num2 *= 3;
// console.log(num2);
// console.log(1 || 1 || 1);
// console.log(1 || 0 || 0);
// console.log(0 || 0 || 0);
// console.log(1 && 1 && 1);
// console.log(1 && 0 && 1);
// console.log(0 && 0 && 0);
// console.log(!!true);
// console.log("tree" > "arie");
// n = 2;
// if (n == 2) {
//     console.log("true");
// }
// var age = prompt("enter your age");
// if (Number(age) < 10) {
//     alert("child");
// } else if (Number(age) < 18) {
//     alert("teeager");
// } else if (Number(age) < 30) {
//     alert("Adult");
// } else {
//     alert("old");
// }

var sum = 0;
while (true) {
  var number = prompt("enter your number");
  if (Number(number) == 0 || !number || typeof number != Number) {
    alert(sum);
    break;
  }
  sum += Number(number);
}
