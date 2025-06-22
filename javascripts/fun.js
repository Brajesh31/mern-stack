// let massage2 = "I am 19years old";

// function abc(a, b) {
//     let massage2 = "I am 20years old";
//     let message = "my name is";
//     console.log(message + " " + massage2);
// }
// console.log(massage2);
// abc(1, 2);

// function sum(a, b) {
//     return;
// }
// console.log(sum() == undefined);
// let sayhi = function() {
//     console.log("hello world");
// };
// sayhi();
// let sum2 = (a, b) => a + b;
// console.log(sum2(1, 2));
// let num = 1e-6;
// num = 1e9;

// console.log(num);
// let num = 255;
// console.log(num.toString(2));
// let num2 = 12.47879789;
// console.log(Math.round(num2));
// console.log(Math.floor(num2));
// console.log(Math.ceil(num2));
// console.log(Math.round(num2 * 100) / 100);
// console.log(num2.toFixed(3));
// console.log(Math.pow(2, 3));
// console.log(parseInt("100px155"));
// console.log(parseFloat("12.63em"));
// console.log(parseFloat("e12.63em"));
// let str = "my name is my name isis my name is";
// console.log(str);
// console.log(str.length);
// console.log(str.charAt(1));
// console.log(str.at(-1));
// console.log(str[-1]);
// console.log(str.indexOf("is"));
for (let index = 0; index < str.length; index++) {
    if (str.indexOf("is", index) >= 0) {
        console.log(str.indexOf("is", index));
        index = str.indexOf("is", index);
    }
}