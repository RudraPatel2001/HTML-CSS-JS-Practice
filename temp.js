// confirm('Are you sure you want to do this???')
// alert('Stop doing this or else you will get HACKED!!!')

// //DAY 1
// // Execise : Level 1
// challenge = '30 Days of JavaScript';
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substring(0, 2))
// console.log(challenge.substring(3))
// console.log(challenge.includes('Script'))
// console.log(challenge.split(''))
// console.log(challenge.split(' '))
// str = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
// console.log(str.split(','))
// console.log(challenge.replace("30 Days of JavaScript", "30 Days of Python"))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(11))
// console.log(challenge.indexOf('a'))
// sent = 'You cannot end a Sentence because because because is a conjuction'
// console.log(sent.search("because"))
// console.log(sent.lastIndexOf("because"))
// newStr = '  Hello  '
// console.log(newStr)
// console.log(newStr.trim())
// console.log(challenge.startsWith('3'))
// console.log(challenge.endsWith('t'))
// console.log(challenge.match('a'))
// CString = ''
// console.log(CString.concat('30 Days of ', 'JavaScript'))
// console.log(challenge.repeat(2))

// // Exercise : Level 2
// console.log(typeof ('10') == typeof (10))
// n1 = parseFloat('9.81')
// n2 = 10
// n3 = Math.ceil(n1)
// console.log(n1 == n2)
// console.log(n3 == n2)
// s1 = 'Python'
// s2 = 'Jargon'
// console.log(s1.includes('on'))
// console.log(s2.includes('on'))
// var ranNum1 = Math.random() * 100
// console.log(ranNum1)
// var ranNum2 = 50 + Math.random() * 50
// console.log(ranNum2)

// // DAY 2
// // Exercise : Level 1
// firstName = "Rudra"
// lastName = "Patel"
// country = "India"
// city = "Vadodara"
// age = 20
// isMarried = false
// year = 2020
// console.log(typeof (firstName), typeof (lastName), typeof (country), typeof (city), typeof (age), typeof (isMarried), typeof (year))
// var n = new Date()
// x = n.getMonth() + 1
// console.log("Year : " + n.getFullYear() + " Month : " + x + " Date : " + n.getDate() + " Day : " + n.getDay() + " Hours : " + n.getHours() + " Minutes : " + n.getMinutes() + " Seconds : " + n.getSeconds())

// // Exercise : Level 2

// // 1. Area of TRIANGLE :
// // var hei = prompt("Enter Height : ")
// // var bas = prompt("Enter Base : ")
// // var area = 0.5*bas*hei
// // console.log(area)

// // 2. Calculate Pay of the Person
// // var hrs = prompt("Enter HOURS : ")
// // var rph = prompt("Enter Rate per Hour : ")
// // console.log(rph*hrs)

// // Exercise : Level 3

// var a;
// var date;
// var time;
// var showtime;
// setInterval(() => {
//   a = new Date();
//   date = a.toLocaleDateString();
//   if (a.getHours() < 10) {
//     time = '0' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//   }
//   else if (a.getMinutes() < 10) {
//     time = a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds();
//   }
//   else if (a.getSeconds() < 10) {
//     time = a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds();
//   }
//   else {
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//   }
//   document.getElementById('time').innerHTML = time + ' ' + date;
// }, 1000);

// // DAY 4
// // Exercise : Level 1

// // 1. Age Check
// // var num = prompt("Enter Age :")
// // if(num>=18){
// //     console.log("You can DRIVE")
// // }
// // else{
// //     console.log("You cannot DRIVE")
// // }

// // 2. Age Comparison
// // const myAge = 20
// // var yourAge = prompt("Enter Your AGE :")
// // var diff = yourAge-myAge
// // if(myAge<yourAge){
// //     var res = 'You are '+diff+' years older than me.'
// //     console.log(res)
// // }
// // else{
// //     console.log("I am older than you.")
// // }

// // 3. Even Odd
// // var num = prompt("Enter Number :")
// // if(num%2==0){
// //     console.log("Even")
// // }
// // else{
// //     console.log("Odd")
// // }

// // Exercise : Level 2

// // 1. Grade Comparison
// // var grade = prompt("Enter Marks :")
// // if(grade<50){
// //     console.log("F")
// // }
// // else if(grade<60){
// //     console.log("D")
// // }
// // else if(grade<70){
// //     console.log("C")
// // }
// // else if(grade<85){
// //     console.log("B")
// // }
// // else{
// //     console.log("A")
// // }

// // 2. Season Check
// // var userMonth = prompt("Enter Month :")
// // var m = userMonth.toLowerCase()
// // switch(m){
// //     case 'january':
// //         console.log("Winter");
// //         break;
// //     case 'february':
// //         console.log("Winter");
// //         break;
// //     case 'march':
// //         console.log("Spring");
// //         break;
// //     case 'april':
// //         console.log("Spring");
// //         break;
// //     case 'may':
// //         console.log("Spring");
// //         break;
// //     case 'june':
// //         console.log("Summer");
// //         break;
// //     case 'july':
// //         console.log("Summer");
// //         break;
// //     case 'august':
// //         console.log("Summer");
// //         break;
// //     case 'september':
// //         console.log("Autumn");
// //         break;
// //     case 'october':
// //         console.log("Autumn");
// //         break;
// //     case 'november':
// //         console.log("Autumn");
// //         break;
// //     case 'december':
// //         console.log("Winter");
// //         break;
// // }

// // DAY 5

// // Exercise : Level 1
// var arr = Array()
// arr = [1, 'Rudra', 3, 'Patel', 5, 'JavaScript', 7]
// console.log(arr.length)
// var company = ['Facebook', 'Amazon', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
// console.log(company.join(' '), 'are some big IT Companies')
// var chkArr = company.indexOf('Amazon')
// if (chkArr != -1) {
//   console.log("Company FOUND")
// }
// else {
//   console.log("Company not FOUND")
// }
// console.log(company.sort())
// console.log(company.reverse())
// console.log(company.slice(0, 3))
// console.log(company.slice(4))
// console.log(company.splice())

// // Exercise : Level 2

// const frontEnd = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// var fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// // DAY 6

// // Exercise : Level 1

// // Printing Numbers
// // for(var i=0;i<11;i++)
// // {
// //     console.log(i)
// // }
// // var j=10
// // while(j>=0)
// // {
// //     console.log(j)
// //     j--
// // }

// // Array of Random Numbers
// // var newArr = Array()
// // for(var i=0;i<5;i++)
// // {
// //     var randNum = Math.random()*10
// //     newArr.push(randNum)
// // }
// // console.log(newArr)

// // Random 6 digit String
// // var ans = ''
// // var randStr = ''
// // for(var i=0;i<6;i++)
// // {
// //     ans = ans + Math.random().toString(36).substr(6)
// // }
// // randStr = randStr + ans.substring(0,6)
// // console.log(randStr)

// // Exercise : Level 2

// // Random Hexadecimal Number
// // var ans = '#'
// // var randStr = ''
// // for(var i=0;i<6;i++)
// // {
// //     ans = ans + Math.random().toString(16).substr(6)
// // }
// // randStr = randStr + ans.substring(0,7)
// // console.log(randStr)

// // Random RGBA value
// // var r1 = Math.floor(Math.random()*256)
// // var r2 = Math.floor(Math.random()*256)
// // var r3 = Math.floor(Math.random()*256)
// // var S = ''
// // S = S + 'rgba('+r1+','+r2+','+r3+')'
// // console.log(S)

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
// // toUpperCase()
// var countryArr = Array()
// for (var i = 0; i < countries.length; i++) {
//   countryArr.push(countries[i].toUpperCase())
// }
// console.log(countryArr)

// // Countries Length
// var countryLenArr = Array()
// for (var i = 0; i < countries.length; i++) {
//   countryLenArr.push(countries[i].length)
// }
// console.log(countryLenArr)

// // var newDoubleArr = Array()
// // for(var i=0;i<countries.length;i++)
// // {
// //     newDoubleArr[i] = new Array(3)
// //     newDoubleArr[i][0].push(countries[i])
// //     newDoubleArr[i][1].push(countryArr[i].slice(0,3))
// //     newDoubleArr[i][2].push(countries[i].length)
// // }
// // console.log(newDoubleArr)

// // Exercise : Level 3

// var sortedCountries = countries
// console.log(sortedCountries.sort())

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// console.log(webTechs.sort())
// console.log(mernStack.sort())

// // DAY 7

// // Ecercise :

// // var eCt = 0
// // var oCt = 0
// // function evenAndOdd(numEO) {
// //     for(var i=1;i<=numEO;i++)
// //     {
// //         if(i%2==0){
// //             eCt++
// //         }
// //         else{
// //             oCt++
// //         }
// //     }
// //     console.log(eCt,oCt)
// // }
// // evenAndOdd(100)

// // DAY 8

// // Exercise : Level 1

// const dog = {
//   dogName: 'Bruce',
//   dogLegs: 4,
//   dogColour: 'Black',
//   dogAge: 2,
//   dogBark: function () {
//     return 'woof woof'
//   }
// }
// console.log(dog)
// dog.breed = function () {
//   return 'German Shephard'
// }
// console.log(dog.breed())
// dog.getDogInfo = function () {
//   return this.dogName + ' ' + this.dogColour
// }
// console.log(dog.getDogInfo())

// // Exercise : Level 2

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// console.log(users.Asab.skills)
// var max = 0
// var poiUsers = 0
// for (const element in users) {
//   console.log(element)
//   if (element.points >= 50) {
//     poiUsers = poiUsers + 1;
//   }
//   if (element.isLoggedIn) {
//     max = max + 1;
//   }
// }
// console.log(max, poiUsers)
// var ct = 0
// for (const element in users) {
//   for (const i in element.skills) {
//     if (i == 'MongoDB')
//       ct++
//     else if (i == 'Express')
//       ct++
//     else if (i == 'React')
//       ct++
//     else if (i == 'Node')
//       ct++
//   }
//   if (ct == 4) {
//     console.log(element)
//   }
// }

// // DOM - Document Object Model

// // getElementsByTagName
// const allTitles = document.getElementsByTagName('h1')
// console.log(allTitles)

// // getElementsByClassName
// const allClass = document.getElementsByClassName('Title')
// console.log(allClass)

// // getElementById
// var idName = document.getElementById('first')
// console.log(idName)

// // querySelector
// var allTags = document.querySelector('#first') // also - ('#id') or ('.class')

// // querySelectorAll
// const selectTags = document.querySelectorAll('h1')
// for (var i = 0; i < selectTags.length; i++) {
//   console.log(selectTags[i])
// }

// //Adding Tags and thier Content
// // selectTags[3].className = 'Title'
// // selectTags[3].id = 'fourth'
// // selectTags[3].textContent = 'Fourth'

// // innerHTML to TAGS - in this case to : ul
// // const lists = `
// //     <li>30DaysOfPython Challenge Done</li>
// //             <li>30DaysOfJavaScript Challenge Ongoing</li>
// //             <li>30DaysOfReact Challenge Coming</li>
// //             <li>30DaysOfFullStack Challenge Coming</li>
// //             <li>30DaysOfDataAnalysis Challenge Coming</li>
// //             <li>30DaysOfReactNative Challenge Coming</li>
// //             <li>30DaysOfMachineLearning Challenge Coming</li>`
// // const ul = document.querySelector('ul')
// // ul.innerHTML = lists

// // Adding style color
// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px'
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//   } else {
//     title.style.color = 'red'
//   }
// })

// // Adding style color
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px'
//   if (i % 2 === 0) {
//     title.style.backgroundColor = 'green'
//   } else {
//     title.style.backgroundColor = 'red'
//   }
// })

// titles.forEach((title, i) => {
//   title.style.fontSize = '24px'
//   if (i % 2 === 0) {
//     title.style.fontSize = '20px'
//   } else {
//     title.style.fontSize = '30px'
//   }
// })


// var obj = { 0: { Name: "Rudra", Country: "India" }, 1: { Name: "GodsEye", Country: "India" } };
// console.log(obj);
// var toStr = JSON.stringify(obj);
// console.log(toStr, typeof (toStr));
// var toObj = JSON.parse(toStr);
// console.log(toObj, typeof (toObj));

// //callbackFunctions()

// var newObj = [{ Name: "Rudra", Country: "India" }, { Name: "GodsEye", Country: "India" }];
// console.log(newObj, typeof (newObj));

// function insertStudent(student, callback) {
//   setTimeout(() => {
//     newObj.push(student);
//     callback();
//   }, 2000);
// };

// function getStudent() {
//   setTimeout(() => {
//     var put = ``;
//     newObj.forEach(element => {
//       put += `<li>Name : ${element.Name} - Country : ${element.Country}</li>`;
//     });
//     document.getElementById('stdList').innerHTML = put;
//     console.log(put);
//   }, 500);
// }
// var newStudent = { Name: "NatuKaka", Country: "India" };
// console.log(newStudent, typeof (newStudent));
// insertStudent(newStudent, getStudent);

// // Promises in JavaScript

// var promise = new Promise((resolve, reject) => {
//   var num = 1 + 1;
//   setTimeout(() => {
//     if (num == 2) {
//       resolve('Function: It is fulfilled');
//     }
//     else {
//       reject('Function: It is Rejected')
//     }
//   }, 2000);
// })

// promise.then((text) => {
//   console.log(text + ' - RudraOP: Thank You')
// });
// promise.catch((text) => {
//   console.log(text + ' - RudraOP: You are a Noob')
// });

// // Palindrome Checker
// // var abc = "A man, a plan, a canal. Panama";
// // var b = /^[A-Za-z0-9]$/;
// // var c = '';
// // var d = '';
// // for (var i = 0, j = abc.length - 1; i < abc.length, j >= 0; i++, j--) {
// //   if(b.test(abc[j]))
// //     c += abc[j].toLowerCase;
// //   if(b.test(abc[i]))
// //     d += abc[i].toLowerCase;
// // }
// // if(c == d)
// //   console.log("OK", c, d);
// // else
// //   console.log("NO", c, d);

// // Practice Q FreeCodeCamp.com

// // const recordCollection = {
// //   2548: {
// //     albumTitle: 'Slippery When Wet',
// //     artist: 'Bon Jovi',
// //     tracks: ['Let It Rock', 'You Give Love a Bad Name']
// //   },
// //   2468: {
// //     albumTitle: '1999',
// //     artist: 'Prince',
// //     tracks: ['1999', 'Little Red Corvette']
// //   },
// //   1245: {
// //     artist: 'Robert Palmer',
// //     tracks: []
// //   },
// //   5439: {
// //     albumTitle: 'ABBA Gold'
// //   }
// // };

// // function updateRecords(records, id, prop, value) {
// //   if(prop!="tracks" && value.length!=0)
// //   {
// //     records[id][prop] = value;
// //   }
// //   else if(prop=="tracks" && value.length!=0)
// //   {
// //     if(records[id].hasOwnProperty(prop))
// //     {
// //       records[id][prop].push(value);
// //     }
// //     else
// //     {
// //       var tracks = Array();
// //       tracks.push(value);
// //       records[id].tracks = tracks;
// //       console.log(tracks,typeof tracks);
// //     }
// //   }
// //   else if(value.length == 0)
// //     delete records[id][prop];
// //   return records;
// // }

// // console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// // console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// // console.log(updateRecords(recordCollection, 2548, "artist", ""));
// // console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// // console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// // console.log(updateRecords(recordCollection, 2548, "tracks", ""));
// // console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));

// // Practice Q FreeCodeCamp

// // const contacts = [
// //   {
// //     firstName: "Akira",
// //     lastName: "Laine",
// //     number: "0543236543",
// //     likes: ["Pizza", "Coding", "Brownie Points"],
// //   },
// //   {
// //     firstName: "Harry",
// //     lastName: "Potter",
// //     number: "0994372684",
// //     likes: ["Hogwarts", "Magic", "Hagrid"],
// //   },
// //   {
// //     firstName: "Sherlock",
// //     lastName: "Holmes",
// //     number: "0487345643",
// //     likes: ["Intriguing Cases", "Violin"],
// //   },
// //   {
// //     firstName: "Kristian",
// //     lastName: "Vos",
// //     number: "unknown",
// //     likes: ["JavaScript", "Gaming", "Foxes"],
// //   },
// // ];
// // function lookUpProfile(name, prop) {
// //   var myContact = contacts.find(myContact => myContact.firstName == name);
// //   if(typeof myContact == 'object')
// //   {
// //     if(prop in myContact)
// //       return myContact[prop];
// //     else
// //       return "No such property";
// //   }
// //   else
// //     return "No such contact";
// // }
// // console.log(lookUpProfile("Kristian", "lastName"));
// // console.log(lookUpProfile("Sherlock", "likes"));
// // console.log(lookUpProfile("Harry", "likes"));
// // console.log(lookUpProfile("Bob", "number"));
// // console.log(lookUpProfile("Bob", "potato"));
// // console.log(lookUpProfile("Akira", "likes"));

// var myRedArr = [19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]];
// const [abc1, abc2, ...rarr] = myRedArr;
// console.log(rarr, abc1, abc2);

// // Practice Q FreeCodeCamp

// // function countdown(n) {
// //   if (n > 0) {
// //     const myArr = countdown(n - 1);
// //     myArr.unshift(n);
// //     return myArr;
// //   } else
// //     return [];
// // }
// // console.log(countdown(5));

// // function rangeOfNumbers(startNum, endNum) {
// //   if(startNum <= endNum)
// //   {
// //   const myarr = rangeOfNumbers(startNum + 1, endNum);
// //   myarr.unshift(startNum);
// //   return myarr;
// //   }
// //   else
// //   return [];
// // };
// // console.log(rangeOfNumbers(6, 9));

// // console.log('A'.charCodeAt(), 'Z'.charCodeAt());

// // FreeCodeCamp Certi Q
// // var myStr = "SERR PBQR PNZC", ccStr = '';
// // for (var i = 0; i < myStr.length; i++) {
// //   if(myStr[i].charCodeAt() + 13 > 90)
// //   {
// //     ccStr += String.fromCharCode(myStr[i].charCodeAt() + 12 - 90 + 65);
// //   }
// //   else if(myStr[i].charCodeAt() < 65)
// //   {
// //     ccStr += myStr[i];
// //   }
// //   else
// //   {
// //     ccStr += String.fromCharCode(myStr[i].charCodeAt() + 13);
// //   }
// // }
// // console.log(ccStr);

// FreeCodeCamp Certi Q - Solved

// var newRegex = /[0-9]{0,1}[0-9]{1,3}[-\s][0-9]{1,3}[-\s][0-9]{4}/;
// var newRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
// console.log(newRegex.test("1 555 555 5555"));
// console.log(newRegex.test("1(555)555-5555"));
// console.log(newRegex.test("1 (555 555-5555"));
// console.log(newRegex.test("5555555555"));
// console.log(newRegex.test("36464645567"));

// FreeCodeCamp Certi Q - Solved

// const checkCashRegister = (price, cash, cid) => {
// const myAccount = {
//     "PENNY": .01,
//     "NICKEL": .05,
//     "DIME": .10,
//     "QUARTER": .25,
//     "ONE": 1.00,
//     "FIVE": 5.00,
//     "TEN": 10.00,
//     "TWENTY": 20.00,
//     "ONE HUNDRED": 100.00
// }
// let totalCash = 0;
// for (let elem of cid) {
//     totalCash += elem[1];
// }
// totalCash = totalCash.toFixed(2);
// const changeArr = [];
// let changeDiff = cash - price;
// if (changeDiff > totalCash) {
//     return { status: "INSUFFICIENT_FUNDS", change: changeArr };
// } else if (changeDiff.toFixed(2) === totalCash) {
//     return { status: "CLOSED", change: cid };
// } else {
//     cid = cid.reverse();
//     for (let elem of cid) {
//         let temp = [elem[0], 0];
//         while (changeDiff >= myAccount[elem[0]] && elem[1] > 0) {
//             temp[1] += myAccount[elem[0]];
//             elem[1] -= myAccount[elem[0]];
//             changeDiff -= myAccount[elem[0]];
//             changeDiff = changeDiff.toFixed(2);
//         } if (temp[1] > 0) {
//             changeArr.push(temp);
//         }
//     }
// } if (changeDiff > 0) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
// }
// return { status: "OPEN", change: changeArr };
// }

// FreeCodeCamp Certi Q - Solved

// var myNum = 3999, tempNum = 0, romanStr = '';
// const intToRoman = [[1000, "M"],[900, "CM"],[500, "D"],[400, "CD"],[100, "C"],[90, "XC"],[50, "L"],[40, "XL"],[10, "X"],[9, "IX"],[5, "V"],[4, "IV"],[1, "I"]];
// for (var i in intToRoman)
// {
//   if(intToRoman[i][0] <= myNum)
//   {
//     while(intToRoman[i][0] <= myNum)
//     {
//         romanStr += intToRoman[i][1];
//         myNum -= intToRoman[i][0];
//     }
//   }
//   else
//     continue;
// }
// console.log(romanStr);

// function countOnline(usersObj) {
//   var ct = 0;
//   for(var user in usersObj)
//   {
//     if(usersObj[`${user}`].online)
//         ct++;
//     else
//         continue;
//   }
//   return ct;
// }
// console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }), typeof { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } });

// function findLongestWordLength(str) {
//     var tempMax = 0, myMax = 0;
//     for(var i = 0 ; i < str.length ; i++)
//     {
//       if(tempMax > myMax)
//         myMax = tempMax;
//       if(str[i] != ' ')
//         tempMax++;
//       else
//       {
//         if(tempMax > myMax)
//             myMax = tempMax;
//         tempMax = 0;
//       }
//     }
//     return myMax;
//   }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

// function chunkArrayInGroups(arr, size) {
//     var tempArr = [], myArr = [];
//     for(var i = 0; i < Math.ceil(arr.length/size); i++)
//     {
//         myArr = arr.splice(0, size);
//         tempArr.push(myArr);
//     }
//     myArr = arr.splice(0, size);
//     tempArr.push(myArr);
//     if(arr.length != 0)
//         tempArr.push(arr);
//     return tempArr;
//   }
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//   console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2));
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// var myStr1 = [], tempStr1 = [], ct = 0;
// myStr1 = 'godseye'.split('').sort();
// tempStr1 = 'gds'.split('').sort();
// function hello(myStr, tempStr){
//     for(var  i in tempStr)
//     {
//         var myVal = myStr.find(tempStr[i]);
//         if(myVal != 'undefined')
//             ct++;
//     }
//     if(ct == tempStr.length)
//         return true;
//     else
//         return false;
// }
// console.log(hello(myStr1, tempStr1));

// var s = 'hello my name is ge'.split(''), r = 'gs';
// console.log(s);
// function lesgo(){
//     var mst = '', arr=s.slice(s.length - r.length, s.length);
//     for(var i in arr)
//     {
//         mst+=arr[i];
//     }
//     if(r == mst)
//         return true;
//     else
//         return false;
// }
// console.log(lesgo());

// function truncateString(str, num) {
//     var myStr = '';
//     for(var  i = 0 ; i < num ; i++)
//     {
//         myStr += str[i]
//     }
//     myStr += '...';
//     return myStr;
//   }

//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// var fg = true,we = 'rge';
// if(typeof we == 'boolean')
//     console.log('ok');
// else
//     console.log('no');

// function titleCase(str) {
//     var myStr = '',tempStr = '';
//     tempStr = str;
//     myStr = tempStr.toLowerCase();
//     var newstr = '';
//     newstr += myStr[0].toUpperCase();
//     for(var i = 1 ; i < myStr.length ; i++)
//     {
//       if(myStr[i-1] == ' ')
//       {
//         newstr += myStr[i].toUpperCase();
//       }
//       else
//         newstr += myStr[i];
//     }
//     return newstr;
//   }

//   console.log(titleCase("I'm a little tea pot"));
//   console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// function frankenSplice(arr1, arr2, n) {
//     var newArr = arr2.splice(0, n),myArr = [];
//     for(var i = 0 ; i < arr2.length ; i++)
//     {
//         myArr.push(arr2[i]);
//     }
//     for(var i = arr1.length-1 ; i >= 0  ; i--)
//     {
//       myArr.unshift(arr1[i]);
//     }
//     for(var i = newArr.length - 1 ; i >= 0 ; i--)
//     {
//       myArr.unshift(newArr[i]);
//       arr2.unshift(newArr[i]);
//     }
//     return myArr;
//   }
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//   console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// var quoteSample = "The five boxing wizards jump quickly.";
// var alphabetRegexV2 = /\w/g;
// var result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

//Pending Q

// function bouncer(arr) {
//     var falseArr = [false, null, 0, "", undefined, NaN], myArr = [];
//     for (var i in arr) {
//         var flg = true;
//         for (var j in falseArr) {
//             if (arr[i] == falseArr[j]) {
//                 flg = false;
//                 break;
//             }
//             else continue;
//         }
//         if (flg)
//             myArr.push(arr[i]);
//     }
//     return myArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// function getIndexToIns(arr, num) {
//     if (arr.length == 0)
//         return 0;
//     else {
//         var myarr = arr.sort((a, b) => (a - b));
//         console.log(myarr);
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] >= num)
//                 return i;
//             else continue;
//         }
//     }
//     return arr.length;
// }

// console.log(getIndexToIns([5, 3, 20, 3], 5));

// var hello = "   Hello, World!  ";
// var wsRegex = /^\s*\w+,\s\w+!\s*/;
// var result = hello.replace(wsRegex, 'Hello, World!');
// console.log(result);

// Check Valid Phone Number

// checkPass = () => {
//     var a = document.getElementById('pass').value;
//     var myRegex = /[6-9]{1}[0-9]{9}/;
//     console.log(myRegex.test(a));
// }

// Check Username Starting

// checkPass = () => {
//     var a = document.getElementById('pass').value;
//     var myRegex = /[0-9@_]/;
//     console.log(myRegex.test(a[0]));
// }

// document.getElementById('time').addEventListener('mouseover', ()=>{
//     document.getElementById('time').style.color = 'red';
// })

// document.getElementById('time').addEventListener('mouseout', ()=>{
//     document.getElementById('time').style.color = 'black';
// })

// FontSize Icreasing at 50ms interval

// let newVar = 30;
// document.getElementById('time').innerText = 'Gujarat Technological University';
// document.getElementById('time').style.fontSize = newVar + 'px';
// document.getElementById('time').style.color = 'blue';
// setInterval(() => {
//     if (newVar <= 50) {
//         document.getElementById('time').style.fontSize = newVar + 'px';
//         newVar++;
//     }
//     else
//         document.getElementById('time').style.fontSize = newVar + 'px';
// }, 50);

// Copy Text to ClipBoard

// let copyPass = document.getElementById('pass');
// let clipboard = document.getElementById('clipboard');
// clipboard.addEventListener('click', () => {
//     navigator.clipboard.writeText(copyPass.value);
// })

// const newArr = [0,1,2,3,4,5,6,7,8,9];
// const disp = newArr.map((ele, index) => ele*ele);
// console.log(disp);
// const temp = newArr.filter((ele) => {
//     if(ele % 2 == 0)
//         return true;
// })
// console.log(temp);

// Current Location using Navigator

// const doSomething = (a, b) => {
//     console.log(a, b);
// }
// navigator.geolocation.getCurrentPosition((position) => {
//     doSomething(position.coords.latitude, position.coords.longitude);
// });

// ------------------------------------------
// ------------------------------------------
// -----------------BlackBox-----------------
// ------------------------------------------
// ------------------------------------------
