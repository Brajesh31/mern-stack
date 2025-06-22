// console.dir(document);

// console.log(document.domain);

// console.log(document.URL);

// console.log(document.body);

// console.log(document.head);

// console.log(document.links);

// console.log(document.all[5]);

// console.log(document.all);

// document.all[5].textContent = "hello world";
// console.log(document.all[12].textContent);

// let header = document.getElementById("header-title");
// header.style.background = "red";
// header.innerHTML = "<h3> it's me guys</h3>";
// console.log(header);
// item = document.getElementsByClassName("list-group-item");
// for (let index = 0; index < item.length; index++) {
//   item[index].style.background = "lightgrey";
//   Object.assign(item[index].style, {
//     background: "orange",
//     fontweight: "bold",
//   });
// }

// var list = document.getElementsByTagName("li");
// for (let index = 0; index < list.length; index++) {
//   list[index].style.background = "lightgrey";
//   Object.assign(list[index].style, {
//     background: "orange",
//     fontweight: "bold",
//   });
// }
// document.querySelector("li").style.background = "pink";
// var list = document.querySelectorAll("li");
// var list = document.getElementsByTagName("li");
// for (let index = 0; index < list.length; index++) {
//   list[index].style.background = "lightgrey";
//   Object.assign(list[index].style, {
//     background: "pink",
//     fontweight: "bold",
//   });
// }
//  html collection :- element nodes (array- like  indexing  array methods .length)
// nodelist:- element nodes,textnodes,fragments(array-like indexing array methods .length)
// console.log(
//   (document.querySelector("ul").parentNode.style.background = "black")
// );
// parentelement
// var itemlist = document.getElementById("item");
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "lightgrey";
// console.log(itemlist.parentElement);
// child elements
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.nextSibling);

// function hello() {
//   alert("hello guys mai button hu");
// }

// var button = document.getElementById("buttonclick");
// var button = document.querySelector("#buttonclick");
// button.addEventListener("click", addEvent);
// button.addEventListener("dblclick", addEvent);
// button.addEventListener("mousedown", addEvent);
// console.log(button.addEventListener("mouseup", addEvent));
// function addEvent(e) {
//   alert("sdhfk");
//   console.log(e);
//   console.log("hello");
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.value);
//   console.log(e.ctrlKey);
//   console.log(e.altKey);
//   console.log(e.shiftKey);
// }
// function addEvent() {
//   button.innerHTML = "hello mai hu button";
//   var mtitle = document.getElementsByClassName("title");
//   mtitle[0].textContent = "changed";
// }

// var form = document.getElementById("addForm");
// form.addEventListener("submit", runevent);
// function runevent(e) {
//   e.preventDefault();
//   alert("clickhogya");
//   var buttonclick = document.getElementById("showonclick");
//   buttonclick.innerHTML = "Clicked";

//   console.log();
// }
// var newdiv = document.getElementById("main-div");
// newdiv.addEventListener("mousemove", runevent);
// newdiv.addEventListener("mousemove", runevent);
// newdiv.addEventListener("mousedown", runevent);
// newdiv.addEventListener("mouseup", runevent);
// function runevent(e) {
//   console.log("event type:- " + e);
// }
var submit = document.getElementById("submit");
submit.addEventListener("click", myfun);
function myfun(e) {
  e.preventDefault();
  var item = document.getElementById("items");
  var val = document.getElementById("item");
  //   item.appendChild(document.createTextNode("val"));

  item.innerHTML =
    item.innerHTML +
    '<li class="list-group-item">' +
    val.value +
    ' <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
}
// const themeColors = document.querySelectorAll('[name="theme"]');

// // store themes
// const storeTheme = function (theme) {
//     localStorage.setItem('theme', theme);
// }

// const applyTheme=function(){
//     const activeTheme=localStorage.getItem('theme');
//     themeColors.forEach((themeOption) => {
//         if(activeTheme==themeOption.id){
//             themeOption.checked=true;
//         }
//     })
// }
// themeColors.forEach((themeOption) => {
//     themeOption.addEventListener('click', () => {
//         storeTheme(themeOption.id)
//     })
// })

// document.onload=applyTheme();
// //add items
// var form=document.getElementById('addForm');
// var itemList=document.getElementById('items');
// form.addEventListener('submit',addEvent);
// function addEvent(e) {
//     e.preventDefault();

//     var item=document.getElementById('main-input').value;

//     var newItem=document.createElement('li');
//     newItem.className="list-group-item";
//     newItem.appendChild(document.createTextNode(item));

//     var dltButton=document.createElement('button');
//     dltButton.className="btn btn-danger btn-sm float-right delete";
//     dltButton.appendChild(document.createTextNode('X'));

//     newItem.appendChild(dltButton);

//     itemList.appendChild(newItem);
// }

// itemList.addEventListener("click", removeEvent);

// function removeEvent(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("delete krna hai?")) {
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }
buttondlt = document.querySelectorAll(".delete");
// console.log(buttondlt[0]);
// console.log(buttondlt[0].parentNode.nodeName);
buttondlt.forEach((element) => {
  element.addEventListener("click", removelistelement);
});
function removelistelement(e) {
  element = e.target.parentNode;
  console.log(element);
  element.remove();
}
