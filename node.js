// const { response } = require("express");

// console.log('Hello World');
// console.log(__filename); //FileName alongwith it's location
// console.log(__dirname); //File location

// http Server - - - - - - - - - -

// const http = require('http')

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World!\n')
// })

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`)
// })

// Read-Write-Append on File - - - - - - - - - -

// const fs = require('fs');
// fs.readFile('f1.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })
// console.log('DoneReading!')

// setTimeout(() => {
//     const rd = fs.readFileSync('f1.txt');
//     console.log(rd.toString());
//     console.log('DoneReading!');
// }, 1000);

// fs.writeFile('f1.txt', 'I am GodsEye2.0', ()=>{
//     console.log('DoneWriting!');
// });

// fs.appendFileSync('f1.txt','I am GodsEye4.0')
// let obj = {"ge2" : {"name" : "GodsEye", "category" : "super-pro"}};
// fs.appendFileSync('f1.txt', JSON.stringify(obj));

// Creating a new URL - - - - - - - - - - NOTE : USE FILE EXTENSION .mjs AS IMPORT IS SUPPORTED BY ECMA SCRIPT AND NOT NODEJS.

// import url from 'url';

// const myURL = new URL('https://rudraOP.com');
// myURL.pathname = '/BGMI/GodsEye/Jodd';
// myURL.search = '?df=eg';
// myURL.hash = '#superpro';

// console.log(myURL.href);

// OS Operations - - - - - - - - - -

// const os = require('os');

// console.log(os.freemem(), os.homedir(), os.hostname(), os.platform(), os.release(), os.type());

// Accessing WebPages with http url using if-else - - - - - - - - - -

// const fs = require('fs');
// const http = require('http');
// const port = 3000;
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     if(req.url == '/'){
//         res.statusCode = 200;
//         res.end("Hello");
//     }
//     else if(req.url == '/home'){
//         res.statusCode = 200;
//         res.end('<h1>This is Home Page!</h1><p>I am real GodsEye</p>');
//     }
//     else if(req.url == '/about'){
//         res.statusCode = 200;
//         res.end('<h1>This is About Page!</h1><p>I am real GodsEye</p>');
//     }
//     else{
//         res.statusCode = 404;
//         res.end('<h1>Page Not Found</h1>');
//     }
// })
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`)
// })

// Accessing WebPages with ExpressJS to remove if-else conditions - - - - - - - - - -

// const fs = require('fs');
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     const rfs = fs.readFileSync('webpage.html');
//     res.send(rfs.toString());
// })
// app.get('/home', (req, res) => {
//     res.send('This is Home Page!!!');
// })
// app.get('/about', (req, res) => {
//     res.send('This is About Page!!!');
// })
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// })

// NodeJS Event Loop - - - - - - - - - -

// const event = require('events');
// const eventEmitter = new event.EventEmitter();
// eventEmitter.on('StopMotor', () => {
//     console.log('Start the Motor - Tank is Empty');
//     setTimeout(() => {
//         console.log('Stop the Motor - Tank is Full');
//     }, 5000);
// })
// eventEmitter.emit('StopMotor');

// REST API - - - - - - - - - -

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const fs = require('fs');

// let newUser = {
//     "user4" : {
//         "name" : "GodsEye",
//         "password" : "password4",
//         "profession" : "coder",
//         "id" : "4"
//     }
// }

// app.get('/', (req, res) => {
//     res.send('This is Home Page!');
// })

// app.get('/list', (req, res) => {
//     fs.readFile(__dirname + "/" + "data.json", 'utf8', (err, data) => {
//         console.log(err, data);
//         res.send(data);
//     })
// })

// app.get('/add', (req, res) => {
//     fs.readFile(__dirname + "/" + "data.json", 'utf8', (err, data) => {
//         const obj = JSON.parse(data);
//         obj["user4"] = newUser["user4"];
//         console.log(err, data);
//         res.send(JSON.stringify(obj));
//     })
// })

// app.listen(port, () => {
//     console.log(`Server Listening at http://localhost:${port}`);
// })

// FetchAPI - - - - - - - - - -

// const fetch = require('node-fetch');
// let url = 'https://api.github.com/users';
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))

// fetch(url)
//     .then(response => {
//         console.log(response.status, response.statusText);
//     })
//     .catch(data => {
//         console.log(response.status, response.statusText);
//     })

// var cors = require('cors');
// var express = require('express');
// var app = express();
// var mongodb = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/';
// mongodb.connect(url, (err, client) => {
//         if (err) {
//                 throw err;
//                 return;
//         }
//         else {
//                 var db = client.db('testdb');
//                 var cn = db.collection('testcn');
//                 // Insert Data
//                 // cn.insertOne({name: "Mario", language: "Python", favNum: 555}, (err, result) => {
//                 //         console.log('Succesfully Inserted Data!');
//                 // });
//                 // Find Data
//                 // cn.findOne({name: "GodsEye"}, (err, result) => {
//                 //         if (err) {
//                 //                 console.log('No Data Found!');
//                 //         }
//                 //         else {
//                 //                 console.log("Found : "+JSON.stringify(result));
//                 //         }
//                 // })
//                 app.use(cors())
//                 cn.find().toArray((err, data) => {
//                         app.get('/', (req, res) => {
//                                 res.send(data);
//                         })
//                         app.listen(3000, () => {
//                                 console.log('http://localhost:3000');
//                         });
//                 })
//         }
// })

var e = require('express');
var cors = require('cors');
var app = e();

app.use(e.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Rudra</h1>")
})

app.get('/home', (rq, rs) => {
    rs.send("Krutarth")
})

app.post('/rudra', (req, res) => {
    const { name, pass } = req.body;
    res.json();
})

app.get('/about', (req, res) => {
    res.send("Bye Bye");
})

app.listen(3000);