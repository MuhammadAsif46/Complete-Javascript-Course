

////////*******  CASE SENSITIVE  **********///////////

// CHAPTER NO : 01 | Introduction Javascript

// TOPIC: 01 | Variables In JavaScript

// var a = 55;
// console.log(a);
// a = "asif";
// console.log(a);

// TOPIC: 02 | var, let and const

// VAR :            // not use that
// var a = 23
// var b = "hello"
// var c = true
// var d = null
// var e = undefined

// CONST :          // constant can not updated and changed
// const num = 23;

// LET :            // let variable can changed and updated
// let a = 45

// TOPIC: 03 | primitive dataTypes in JS and objects

// NN BB SS N:          //Primitive data types in JS
// let a = null
// let b = 123
// let c = true
// let d = BigInt("456") + BigInt("4")
// let e = "hello"
// let f = Symbol("i am hello world")
// let g = undefined
// console.log(a,b,c,d,e,f,g);
// console.log(typeof d);

//  OBJECTS:               // Non-Primitive data types in JS

// const items = {
//     a: "hello",
//     b: 123,
//     c: null,
//     d: true,
// }
// console.log(items.a);
// console.log(items.b);
// console.log(items["c"]);
// console.log(items["d"]);

// CHAPTER NO : 02 | Expressions And Operators:

// Topic 01: | Arithmatic 0perators in JS

// let  a = 12;
// let b = 3;
// console.log("a + b = ", a + b); // 15
// console.log("a - b = ", a - b); // 9
// console.log("a / b = ", a / b); // 4
// console.log("a * b = ", a * b); // 36
// console.log("a % b = ", a % b); // 0
// console.log("a ** b = ", a ** b); // 1728
// console.log("a++ = ", a++); // 12
// console.log("a-- = ", a--); // 13
// console.log("++a = ", ++a); // 13
// console.log("--a = ", --a); // 12

// Topic 02: | Assigment 0perators in JS

// let assignment = 1;
// // assignment = 5
// console.log(assignment);
// assignment += 5     //same as assignment = assignment + 5
// console.log(assignment);
// assignment -= 5     //same as assignment = assignment - 5
// console.log(assignment);
// assignment /= 5     //same as assignment = assignment / 5
// console.log(assignment);
// assignment *= 5     //same as assignment = assignment * 5
// console.log(assignment);

// Topic 03: | comparison 0perators in JS

// let comp1 = 5;
// let comp2 = "6";
// console.log("comp1 == comp2 ", comp1 == comp2); //false
// console.log("comp1 != comp2 ", comp1 != comp2); //true
// console.log("comp1 === comp2 ", comp1 === comp2); //false
// console.log("comp1 !== comp2 ", comp1 !== comp2); //true
// console.log("comp1 > comp2 ", comp1 > comp2); //false
// console.log("comp1 < comp2 ", comp1 < comp2); //true
// console.log("comp1 >= comp2 ", comp1 >= comp2); //false
// console.log("comp1 <= comp2 ", comp1 <= comp2); //true

// Topic 04: | logical  0perators in JS

// let a = 12;
// let b = 3;
// console.log( a > b && a===5);
// console.log( a < b || a===5);
// console.log(!false);
// console.log(!true);

// Topic 05: | If, else.if, else statements in JS and Ternary operator:

// let age = +prompt("what is your age?");
// if(age <= 0){
//     console.log("you input is wrong");
// }else if(age < 9){
//     console.log("you are a kid you can not driving");
// }
// else if(age < 18 && age > 9) {
//     console.log("you are a kid you can driving after 18");
// }
// else if(age >= 18){
//     console.log("you can driving easily");
// }else{
//     console.log("hello");
// }
// console.log("ternary opertor ", age < 18 ? "not drive":"drive");

// Topic 06: | switch & case statements in JS

// let age = +prompt("what is your age?");
// switch (age) {
//     case 12:
//         console.log("your age is ", age);
//         break;
//     case 15:
//         console.log("your age is ", age);
//         break;
//     case 19:
//         console.log("your age is ", age);
//         break;
//     case 23:
//         console.log("your age is ", age);
//         break;
//     default:
//         console.log("hello");
// }

// CHAPTER NO : 03 | For Loops and others

// Topic 01: | For Loops in JS

// let sum = 0
// let num = +prompt("enter a number");
// for(let i=0; i<num; i++){
//     sum += i+1
// }
// console.log("sum of first " + num + " natural number is " + sum );

// let sum = 0
// let num = +prompt("enter a number");
// for(let i=0; i<num; i++){
//     sum += i*num
// }
// console.log("sum of first " + num + " natural number is " + sum );

// Topic 02: | For in Loops in JS

// const obj = {
//     a: 20,
//     b: 30,
//     c: 60,
//     d: 80
// }

// for (let i in obj) {
//     console.log(i + " := " + obj[i] );
// }

// Topic 03: | For of Loops in JS

// for (let i of "world") {
//     console.log(i);
// }

// Topic 04: | While Loops in JS
/* condition true hogi tu excite hoga warna nhi */

// let num = +prompt("enter a number");
// let i = 0;
// while (i < num) {
//     console.log(i);
//     i++;
// }

// Topic 05: | Do While Loops in JS
/*do while loop kam sy kam ek bar excite hota hai 
or condition bad me check krta hai.*/

// let num = +prompt("enter a number");
// let i = 10;
// let ii = 0;
// do{
//     console.log(i);
//     i++;
// }while (i < num)

// Topic 06: | Functions in JS

// let a= 1;
// let b= 2;
// let c= 3;
// console.log("average of the number ", 1+(a+b)/2 );
// console.log("average of the number ", 1+(b+c)/2 );
// console.log("average of the number ", 1+(c+a)/2 );

// simple function

// function add(a, b) {
//     console.log(a + b);
// }
// add(2,4);

// arrow function

// const add = (a, b) => {
//     return a * b
// }
// let res = add(2,4);
// console.log(res);

// CHAPTER NO : 04 | Introduction to Strings:

// Topic 01: | stings ("", '') in JS

// let naame = "hello";
// console.log(naame);
// console.log(naame.length);
// console.log(naame[0]);
// console.log(naame[1]);
// console.log(naame[2]);
// console.log(naame[3]);
// console.log(naame[4]);

// Topic 02: | tempelate litral in JS

// let boy1 = "ahmed"
// let boy2 = "sahab"
// console.log(`${boy1} is friend of ${boy2}`);

// Topic 03: | escape sequence character in JS

// let fruit = 'appl\ne'       // \n   newLine
// let fruit1 = 'appl\re'      // \t   tab
// console.log(fruit);

/* strings are immutable , strings can not be changed, 
excesting string not change, New string return*/

// STRINGS METHODS : check Typeof

// properties:

// : length

// Methods:

// - toUpperCase()
// - toLowerCase()
// - Slice()
// - replace()
// - concat()           //first string koin second string
// - trim()
// - charAt()
// - includes()

// concat();

// let name1 = "asif"
// let name2 = "ahmed"

// console.log(name1.concat(" is a friend of ", name2, " Ok"));

// trim();

// let name1 = "asif"
// let name2 = "     ahmed     "
// console.log(name1.concat(" is a friend of ", name2, " Ok"));
// console.log(name1.concat(" is a friend of ", name2.trim(), " Ok"));

// includes();

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox'; //"fox2"
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// 1: problem solve:

// let nam = "helloworld";
// for (let i = 0; i < nam.length; i++) {
//     console.log(nam[i]);
// }

// CHAPTER NO : 05 | Introduction to Array:

// Topic 01: | exciting array in JS

// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]); // will be undefined because index 6  does not exist
// console.log(arr.length);
// console.log(typeOf arr.length);

// TAKE QUIZ:
// let arr = [12, 13, 14, 15, true, "hello"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Topic 02: | Array methods in JS

// ToString();
// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr.toString());
// console.log(typeof arr.toString());

// Join(" ");
// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr.join(" "));
// console.log(typeof arr.join());

// Push("abc");
// let arr1 = [12, 13, 14, 15, true, "hello"];
// console.log(arr1.push(1));
// console.log(arr1);

// Pop();
// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr.pop());
// console.log(arr);

// unShift("xyz");
// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr.unshift("first"));
// console.log(arr);

// Shift();
// let arr = [12, 13, 14, 15, true, "hello"];
// console.log(arr.shift());
// console.log(arr);

// Delete;
// let arr = [1, 2 , 3 , 4 , 5 , 6];
// console.log(arr.length);
// delete arr[0];  // show empty but not deleted
// console.log(arr.length);

// Concat()
// let arr = [1, 2 , 3 , 4 , 5 , 6];
// let arr1 = [21, 22 , 23 , 24 , 25 , 26];
// let arr2 = [31, 23 , 33 ,34 ,35 ,36];
// console.log(arr.concat("thsi is second array" +  arr1 + "and this is third array" + arr2));
// console.log(arr.concat( arr1 , arr2));

// Sort();
// let num1 = [11,222,53,4,75,96,7,8];
// num1.sort();
// console.log(num1);

// Sort(compare);
// let compare = (a, b) => {
//     return a - b
// }
// let compare = (a, b) => {
//     return b - a
// }
// let num1 = [11,222,53,4,75,96,7,8];
// num1.sort(compare);
// console.log(num1);

// Splice();
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// let splice = arr.splice(1,3,"hello","world");
// console.log(splice);
// console.log(arr);

// Slice();
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// let slice = arr.slice(2,6);
// console.log(slice);     //new arrray return
// console.log(arr);

// Revese();
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.reverse());

// Topic 03: | Looping through Arrays in JS

// ForEach();                       //existing array modify
// let num = [1,2,3,4,5,6,7,8];
// num.forEach((n)=>{
//     console.log(n + n);
// })

// Map();                           //new array return
// let num = [1,2,3,4,5,6,7,8];
// let a =  num.map((n)=>{
//     console.log(n + n);
//     return n
// })

// Filter();                        //test passing filter apply
// let num = [1,2,3,4,5,6,7,8];
//  let a = num.filter((n)=>{
//     return n<5
// })

// console.log(a);

// Reduce ();                       //single val return
// let num = [1,2,3,4,5,6,7,8];
// let a = num.reduce((n1, n2)=>{
//     return n1 + n2
// })

// console.log(a);

// REDUCE FACTORIAL GENERATE:
// let num = [1,2,3,4];
// let a = num.reduce((n1, n2)=>{
//     return n1 * n2
// })

// console.log(a);

// array.form();                //change string in array
// let name1 = "asifahmed";
// let arr = Array.from(name1);
// console.log(arr);

// For...of                     //short form loop
// let num = [1,2,3,4,5,6]
// for(let i of num)
// console.log(i);

// For...in                     //rturn key in array/object
// let num = [1,2,3,4,5,6]
// for(let i in num)
// console.log(i);

// CHAPTER NO : 06 | Javascript in Browser:

// Topic 01: | Console in JS

// console.time("forLoop")
// for (let i = 0; i < 500; i++) {
//     console.log(200);
// }
// console.timeEnd("forLoop")

// ----------------------------------- //

// console.time("whileLoop")
// let i=0;
// while (i < 500) {
//  console.log(200);
//  i++
// }
// console.timeEnd("whileLoop")

// Topic 02: | alert,prompt and confirm in JS

// alert("hello world");

// let a = prompt("enter a number");
// console.log(a);

// let write = confirm("enter a new one");
// if(write){
//     document.write(a);
// }else{
//     document.write("please enter a valid value");
// }

// Topic 03: | DOM,BOM and Windows in JS

// window.console.log (window)
// document.write("enter a name")

// chapter NO : 07 | Walking the dom:

// Topic 01: | children of an element in JS

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// let arr = Array.from(document.body.childNodes);
// console.log(arr);

// Topic 02: | parent & siblings of an element in JS

// Topic 03: | searching the Dom in JS

// let ctitle = document.getElementById("new-card")
// ctitle.style.color = "red"

// let ctitles = document.querySelectorAll(".card-title")
// ctitles[0].style.color = "red"
// ctitles[1].style.color = "blue"
// ctitles[2].style.color = "green"

// let one = document.querySelector(".this")
// one.style.color = "black"
// one.style.backgroundColor = "white"

// let tagName = document.getElementsByTagName("h1")
// console.log(tagName.length);

// let clasName = document.getElementsByClassName("card-text")
// // clasName.style.color = "red"
// console.log(clasName.length);

// let byName = document.getElementsByName("search")
// console.log(byName);

// chapter NO : 08 | Event and Other dom properties:

// Topic 01: | TagName/NodeName WITH console.log/.dir in JS

// let x = document.getElementsByTagName("h1")[0]
// console.log(x);
// let y = document.getElementsByTagName("h1")[0]
// console.dir(y);
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// Topic 02: | InnerHtml / OuterHtml in JS

// head.innerHtml = <b> i am hello </b>
// head.outerHtml = <div> what is your name: </div>

// console.log(document.body.textContent);
// head.hidden = false;

// Topic 03: | Attribute Methods in JS

// let first = document.getElementById("first");
// let a = first.getAttribute("class");      //get means : existing attribute getting
// console.log(a);
// console.log(first.hasAttribute("class")); //has means : attribute exist or not
// console.log(first.hasAttribute("style")); //has means : attribute exist or not
// console.log(first.setAttribute("value","special")); //set means : attribute name & value sets
// console.log(first.removeAttribute("value")); //remove means : attribute remove
// console.log(first.dataset);         //dataset means : me custom generate attribute
// console.log(first.dataset.game);    //dataset-name means : me custom generate attribute getting
// console.log(first.dataset.mobile);  //dataset-name means : me custom generate attribute getting

// Topic 04: | Insertion Methods in JS

// let a = document.getElementsByTagName("div")[0];

// let div = document.createElement("div");
// div.innerHTML = "<h1>hello world</h1>";
// a.append(div);           // div ky ander index[1] py div banayega
// a.prepend(div);          // div ky ander index[0] py div banayega
// a.before(div);           // body ky ander index[0] py div banayega
// a.after(div);            // body ky ander index[1] py div banayega
// a.replaceWith(div);      // body ky ander div ko replace krdega

// Topic 05: | InsertAdjasentHTML/Text/Element in JS

// let first = document.getElementById("first");
// first.insertAdjacentHTML("beforebegin","<div class='text'> beforeBegin </div>" )
// first.insertAdjacentHTML("beforeend","<div class='text'> beforeend </div>" )
// first.insertAdjacentHTML("afterbegin","<div class='text'> afterbegin </div>" )
// first.insertAdjacentHTML("afterend","<div class='text'> afterend </div>" )
// first.remove();

// Topic 06: | ClassName and ClassList in JS

// first.classList : OUTPUT
// DOMTokenList(2) ['red-tshirt', 'black-paint', value: 'red-tshirt black-paint']

// first.className : OUTPUT
// 'red-tshirt black-paint'

// first.classList.add("black-paint") : OUTPUT (undefined)
// first.classList.remove("black-paint") : OUTPUT (undefined)
// first.classList.contains("black-paint") : OUTPUT (false)
// first.classList.toggle("black-paint") : OUTPUT (true)
// first.classList.toggle("black-paint") : OUTPUT (false)

// Topic 07: | setTimeOut and setInterval in JS

// 1. setTimeOut | One Time Exicute
// 2. setInterval | running continously Time Exicute

//EXAMPLE NO : 01

// alert("hello world");

// let a = setTimeout(()=>{
//     alert("i am setTimeOut in 3 seconds")
// },3000)
// console.log(a);

// let b = prompt("Do you want the run setTimeOut ?");
// if("n" === b){
//     clearTimeout(a)
// }
// console.log(a);

//EXAMPLE NO : 02

// const sum = (a, b) => {
//     alert("setTimeOut is running.... : " + (a + b));
//     a + b
// }
// setTimeout(sum, 2000, 5, 4);

// Quik Task SetInterval:

// const sum = (a, b) => {
//     alert("setInterval is running.... : " + (a + b));
//     a + b
// }
// setInterval(sum, 3000, 10, 4);

// CREATE A TIMER WITH SetInterval and ClearInterval Methods:

// function mySetInterval() {
//     const date = new Date();
//     document.getElementById("time").innerHTML = date.toLocaleTimeString();
// }
// // mySetInterval()
// const myInterval = setInterval(mySetInterval, 1000);

// function stopTimer() {
//   clearInterval(myInterval);
// }

// Topic 08: | Browser Event in JS

// let a = document.getElementsByClassName("container")[0]
// console.log(a);

// a.onclick = ()=>{
//     let b = document.getElementsByClassName("container")[0].firstElementChild
//     console.log(b);
// }

// Topic 09: | addEventListener and removeEventListener Event in JS

// let b = +prompt("enter a number..");

// let x =  function(e){
//     alert("hello world1")
// }
// let y =  function(e){
//     alert("hello world2");
// }

// let a = document.getElementById("btn");

// a.addEventListener("click",x);
// a.addEventListener("click",y);

// if(b === 2){
//     a.removeEventListener("click",y);
// }

// chapter NO : 09 | callBacks,promises an dasync/await in JS:

// Topic 01: | Syncronus and Asyncronus in JS

// Syncronus programming : Line By Line Excite and finish one by one

// let a = prompt("Enter your name?")
// let b = prompt("Enter your age?")
// let c = prompt("Enter your fav color?")
// console.log(a + "is" + b + "and is fav color " + c);

// Asyncronus programming : tayyar line by line hota excite bad me hota

// console.log("start");
// setTimeout(function(){
//     console.log("i am asif");
// },3000)
// console.log("end");

// Topic 02: | callBack function in JS

// function loading(src, callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loading script with src: " + src);
//         callback(src);
//     }
//     document.body.appendChild(script);
// }

// function hello(src) {
//     alert("hello user : "+ src);
// }

// function goodMorning() {
//     console.log("hello src ");
// }

// loading("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);

// Topic 03: | Promises | .then() & .catch() in JS:

// let p = new Promise ((resolve, reject) => {
//     alert("hey I am  not resolved")
//     setTimeout(()=>{
//         resolve(1);
//     },3000);
// })

// p.then(()=>{
//     console.log("congrates this promiose is resolved");
// })

// p.then(()=>{
//     console.log("Hurray");
// }).catch((error)=>{
//     console.log(error);
// })

// Topic 04: | Promise API in JS:

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("value 2");
//     reject(new Error("Error"))
//   }, 3000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 6000);
// });

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// 1.promise-all: //wait all result and return an array if any result is failed all result are ignored
// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// })

// 2.promise-all-settled: //wait all result and return an array if any result is failed remaining result are returns
// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// })

// 3.promise-race: // race all result and first will excite then return result
// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// })

// 4.promise-any:   // all result checking any one error remaining result return
// let promise_all = Promise.any([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(value);
// })

// 5.promise-resolve:  //returns resolve promises
// let promise_all = Promise.resolve(7)
// promise_all.then((value)=>{
//     console.log(value);
// })

// 6.promise-reject:    // returns rejects promises
// let promise_all = Promise.reject(new Error("hey"))
// promise_all.then((value)=>{
//     console.log(value);
// })

// Topic 05: | async|await in JS:

// async function always return a promise

// const hey = async ()=>{
//     return 3;
// }
// // hey().then(alert)
// hey().then((v)=>{
//     alert(v)
// })

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }

//   asyncCall();

// Topic 06: | try | catch in JS:

// setTimeout(()=>{
//     console.log("Hacking wifi..... please wait....");
// },1000);

// try catch run synchronously:
// try {
//     console.log(fahad);

// } catch (error) {
//     // console.log(error);
//     console.log("fahad not found");
// }

// try catch not run asynchronously:
// try {
//     setTimeout(()=>{
//         console.log(fahad);

//     },100)

// } catch (error) {
//     // console.log(error);
//     console.log("fahad not found");
// }

// setTimeout(()=>{
//     console.log("Fetching username and password..... please wait....");
// },2000);

// setTimeout(()=>{
//     console.log("Hacking fahad facebook id..... please wait....");
// },3000);

// setTimeout(()=>{
//     console.log("username and password of fahad (00134834983) fetched..... please wait....");
// },4000);

// Topic 07: | Error object | custom Error in JS:

// try {
//     let age = prompt("enter your age?");
//     if(age > 150){
//         throw new Error("this is not  a valid age");
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// console.log("this is a valid age");

// Topic 08: | finally clause in JS:

// const foo = ()=>{
//     try {
//         let a = 0
//         // console.log(b);
//         console.log("program run successfully");
//         return ;
//     } catch (error) {
//         console.log("this is an error");
//         console.log(p);
//     }
//     finally {   //  cleanup | run all cases
//         console.log("finally clause run");
//     }
// }

// foo()

// chapter NO : 10 | Network,request and storing data in JS:
// (AJAX): Asynchronous javascript and xml .

// Topic 01: | Fetch API in JS:

// let p = fetch("https://jsonplaceholder.typicode.com/posts/1")
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     return response.json();
// }).then((value)=>{
//     console.log(value);
// })

// Topic 02: | POST method in JS:

// (json.stringify): javascript object convert to string :
// (json.parse): valid json script convert to javascript object :

// const createTodo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Asif",
//       body: "Bhai",
//       userId: "11",
//     }),
//   };

//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = await p.json();
//   return response;
// };

// const getTodo = async (id)=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
//     let todo = await response.json();
//     return todo;
// }

// const mainFunc = async ()=>{
//     let todor = await createTodo()
//     console.log(todor);
//     console.log(await getTodo(22));
// }

// mainFunc()

// Topic 03: | cookies in JS:

// console.log(document.cookie);
// document.cookie = "name=hello world1122"
// document.cookie = "name2=hello world112211"
// console.log(document.cookie);

// Topic 04: | localStorage in JS:

//local storage store data in string format both keys and values:
// METHODS:

// setItem :
// localStorage.setItem("name", "Asif");

// let key = prompt("enter key you want to set")
// let value = prompt("enter value you want to set")

// localStorage.setItem(key, value);

// // getItem :
// console.log(`the key ${key} is ${localStorage.getItem(key)}`);

// // removeItem :
// if(key === "red" || key === "blue"){
//     localStorage.removeItem(key)
// }

// // clear :
// if(key == 0){
//     localStorage.clear()
// }

// // length:
// console.log(localStorage.length);

// //key(index-Number):

// localStorage.key(0)
// 'color'
// localStorage.key(1)
// 'hello'
// localStorage.key(2)
// 'name'
// localStorage.key(3)
// 'a'
// localStorage.key(4)
// '1'

// Topic 05: | sessionStorage in JS:

// sessionStorage.setItem("name", "session");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.clear();

// window.onstorage = (e)=>{
//     alert("changed")
//     console.log(e);
// }

// chapter NO : 11 | Object Oriented Programming in JS:

// Topic 01: | Oops:- pillars in JS:

//1. abstraction,
//2. encapsulation,
//3. inheritance,
//4. polymorphism.

// Topic 02: | prototype/ __proto__ in JS:

// let a = {
//     name1: "Asif",
//     language: "javascript"
// }
// console.log(a);

// let p = {
//     run: ()=>{
//         alert("run....");
//     }
// }

// p.__proto__ = {
//     name2: "bilal"
// }
// a.__proto__ = p
// a.run()
// console.log(a.name2);

// Topic 03: | class and object in JS:

// class RailwayForm{
//     fill(gName, gNo){
//         this.name = gName;
//         this.no = gNo;
//     }
//     submit(){
//         alert(this.name + "your form is submitted" + this.no)
//     }
//     cancel(){
//         alert(this.name +"your form is cancelled" + this.no)
//     }
// }

// let form = new RailwayForm();
// form.submit()
// form.submit()
// form.cancel()

// let message1 = new RailwayForm();
// message1.fill("nano",1122)
// message2.fill("rehno",2200)

// message1.submit()
// message1.cancel()

// let message2 = new RailwayForm();
// message2.submit()
// message2.cancel()

// Topic 04: | Inheritance in JS:

// class Animal{
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     }
//     run(){
//         console.log(this.name + " is barking! " + this.color);
//     }

//     shout(){
//         console.log(this.name + " is shouting! " + this.color);
//     }
// }

// class Monkey extends Animal{
//     bananaEat(){
//         console.log(this.name + " is eating banana! " + this.color);
//     }
//     hide(){
//         console.log(this.name + " is hiding! " + this.color);
//     }
// }

// let ani = new Animal("cow", "white");
// let m = new Monkey("chimpu", "brown");

// ani.run();
// ani.shout();
// m.bananaEat();
// m.run()
// m.hide();
// ani.hide(); //this will throw an error

// Topic 05: | constructors/ super in JS:

// class Employee{
//     login(){
//         console.log("Employee has logged in");
//     }
//     logout(){
//         console.log("Employee has logged out");
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`);
//     }
// }

// class Programmer extends Employee{
//     coffee(x){
//         console.log(`Programmer has requested ${x} coffees `);
//     }
//     requestLeaves(leaves){
//         super.requestLeaves(3);
//         console.log("Requesting leaves");
//         // console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);
//     }
// }

// let e = new Programmer();

// e.login();
// e.requestLeaves(10);

// Topic 06: | static Method in JS:

// class Animal{
//     constructor(name){
//         this.name = Animal.captilize(name);
//     }
//     run(){
//         console.log( "Animal " + this.name + " is barking!");
//     }
//     static captilize(name){
//         return name.charAt(0).toUpperCase() + name.slice(1);
//     }
// }

// j = new Animal("jack");
// j.run();
// console.log(j.captilize("this")) --> this does not work:

// Topic 07: | getter, setter and instance of Method in JS:

// class Animal{
//     constructor(name){
//         this._name = name;
//     }
//     fly(){
//         console.log(this.name + " is flying!");
//     }
//     get name(){
//         return this._name;
//     }
//     set name(newName){
//         this._name = newName;
//     }
// }
// class Rabbit extends Animal(){
//     run(){
//         console.log("running...");
//     }
// }

// let w = new Rabbit("jack");
// let j = new Animal("jack");

// j.fly();
// console.log(j.name);
// j.name = "jill";
// console.log(j.name);

// let c = 45

// console.log(j instanceof Animal);
// console.log(w instanceof Rabbit);
// console.log(c instanceof Animal);

// chapter NO : 12 | Advance Javacript :

// Topic 01: | IIFE: Immediately Invoked Function Expressions in JS:

// let p = ()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve("done");
//         }, 2000);
//     })
// }

// (async()=>{
//     let a = await p();
//     console.log(a);
//     let b = await p();
//     console.log(b);
//     let c = await p();
//     console.log(c);
//     let d = await p();
//     console.log(d);
// })()

// Topic 02: | Destructring and spread operator in JS:

// let arr = [1,2,3];
// let [a,b,c] = arr;
// console.log(a,b,c);

// let arr = [1,2,3,4,5,6,7,8,9];
// let [a,b,c, ...rest] = arr;
// console.log(a,b,c,rest);

// let {a, b} = {a:2, b:4};
// console.log(a,b);

// Spread Opertor:

// let arr = [5,6,7];
// let obj = {...arr};
// console.log(obj);

// function sum(n1,n2,n3) {
//     return n1 + n2 + n3
// }

// console.log(sum(...arr));

//spread react using example:

// let obj = {
//     name:"hello",
//     age:20,
//     address:"xyz"
// }

// console.log({...obj});
// console.log({...obj, name:"asif", age:50}); // this object changing values
// console.log({ name:"asif", age:50, ...obj });// this obj print without changing values

// Topic 03: | Block, Global and Function Scope in JS:

// let a = 10; //global

// {
//     let a1 = 10;    //local
//     console.log(a); //10
// }
// console.log(a); //10

// function az(){
//     let a1 = 8;    //local
//     console.log(a1);
// }
// az()
// console.log(a1);

// Topic 04: | Hoisting in JS:

// console.log(a);
// var a = 12;              //VAR
// console.log(a);

// console.log(a);
// let a = 12;              //LET
// console.log(a);

// num()
// const  num =( )=>{
//     console.log("number");   Const
// }
// num()

// Topic 05: | Closures in JS:

// Topic 06: | Arrow Function Revised in JS:

// const hey = name => console.log("hello " + name);
// hey("asif")

// const hey = (name, greet) => console.log(greet + " " + name);
// hey("asif","ahmed")

// const x ={
//     name:"asif",
//     age:30,
//     role:"js developer",
//     show: function(){
//         setTimeout(()=>{
//             console.log(`the name is ${this.name}\n the role is ${this.role}`);
//         },2000)
//     }
// }

// x.show()


//////////// JSON.Stringify | JSON.Parse  ///////////////
// Json.stringify: valid javascript object convert to string:
// Json.parse: valid json string convert to js object:

// let json = {
//     userName:"John",
//     channel:"Ten Sports",
//     className:"B.com"
// }

// let myJson = JSON.stringify(json);
// console.log(myJson);

// myJson = myJson.replace("John", "Asif");
// console.log(myJson);

// let myNewJson = JSON.parse(myJson);
// console.log(myNewJson);