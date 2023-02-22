let time = document.getElementById("time");
let startQuizElem = document.getElementById("startQuiz");
let sQuizBtn = document.getElementById("sQuiz");
let quesContain = document.getElementById("quesContain");
let ques = document.getElementById("ques");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let subBtn = document.getElementById('subBtn');

let quizObj = [
    {
        q: 'What will be the output for : printf("%d", a++)?',
        a: [{
            op: 'a', ans: true
        }, {
            op: 'a+1', ans: false
        }, {
            op: 'a+2', ans: false
        }, {
            op: 'GarbageValue', ans: false
        }]
    },
    {
        q: 'How many times the for loop will iterate : for(i = 0;i < 10;i--)?',
        a: [{
            op: '0', ans: false
        }, {
            op: '10', ans: false
        }, {
            op: '9', ans: false
        }, {
            op: 'Infinite', ans: true
        }]
    },
    {
        q: 'Which header file is required for std::setprecision() function in C++?',
        a: [{
            op: 'iomanip.h', ans: true
        }, {
            op: 'string.h', ans: false
        }, {
            op: 'ctype.h', ans: false
        }, {
            op: 'math.h', ans: false
        }]
    },
    {
        q: 'How many keywords are there in C Language?',
        a: [{
            op: '35', ans: false
        }, {
            op: '33', ans: false
        }, {
            op: '32', ans: true
        }, {
            op: '34', ans: false
        }]
    },
    {
        q: 'What is the full form of SQL?',
        a: [{
            op: 'Structured Queue Language', ans: false
        }, {
            op: 'Sample Query Language', ans: false
        }, {
            op: 'Structure Queue Language', ans: false
        }, {
            op: 'Structured Query Language', ans: true
        }]
    },
    {
        q: 'Which of the following is not a valid JavaScript variable?',
        a: [{
            op: '1name', ans: true
        }, {
            op: '_name', ans: false
        }, {
            op: 'name', ans: false
        }, {
            op: 'None of the above', ans: false
        }]
    },
    {
        q: 'What is the correct JavaScript syntax to write "Hello World"?',
        a: [{
            op: 'System.out.println("Hello World")', ans: false
        }, {
            op: 'print("Hello World")', ans: false
        }, {
            op: 'document.write("Hello World")', ans: true
        }, {
            op: 'response.write("Hello World")', ans: false
        }]
    },
    {
        q: 'x = 4 + "4"; document.write(x); OUTPUT?',
        a: [{
            op: '8', ans: false
        }, {
            op: '44', ans: true
        }, {
            op: '4', ans: false
        }, {
            op: 'None of the above', ans: false
        }]
    },
    {
        q: 'x = 2+5+"3",y = 2+"5"+3; document.write(x, y); OUTPUT?',
        a: [{
            op: '10 10', ans: false
        }, {
            op: '8 10 Language', ans: false
        }, {
            op: '253 253', ans: false
        }, {
            op: '73 253', ans: true
        }]
    },
    {
        q: 'What does console.log(navigator.userAgent) display?',
        a: [{
            op: 'App Name', ans: false
        }, {
            op: 'App Code Name', ans: false
        }, {
            op: 'App Version', ans: false
        }, {
            op: 'All of the above', ans: true
        }]
    }
];

let i = 0;
let selectedAns = false;

function navigateQuiz() {
    ques.innerHTML = quizObj[i].q;
    opt1.innerHTML = quizObj[i].a[0].op;
    opt2.innerHTML = quizObj[i].a[1].op;    
    opt3.innerHTML = quizObj[i].a[2].op;    
    opt4.innerHTML = quizObj[i].a[3].op;

    opt1.addEventListener('click', () => {
        opt1.style.opacity = 0.7;
        selectedAns = true;
        opt4.style.opacity = 1;
        opt2.style.opacity = 1;
        opt3.style.opacity = 1;
    })
    opt2.addEventListener('click', () => {
        opt1.style.opacity = 0.7;
        selectedAns = true;
        opt1.style.opacity = 1;
        opt4.style.opacity = 1;
        opt3.style.opacity = 1;
    })
    opt3.addEventListener('click', () => {
        opt1.style.opacity = 0.7;
        selectedAns = true;
        opt1.style.opacity = 1;
        opt2.style.opacity = 1;
        opt4.style.opacity = 1;
    })
    opt4.addEventListener('click', () => {
        opt1.style.opacity = 0.7;
        selectedAns = true;
        opt1.style.opacity = 1;
        opt2.style.opacity = 1;
        opt3.style.opacity = 1;
    })

    subBtn.addEventListener('click', () => {
        i++;
        opt1.style.opacity = 1;
        opt2.style.opacity = 1;
        opt3.style.opacity = 1;
        opt4.style.opacity = 1;
        if(selectedAns)
            navigateQuiz();
    })
}

let count = 49;

function timer() {
    time.innerHTML = 'Time: ' + 50;
    let myTimer = setInterval(() => {
        if (count >= 10)
            time.innerHTML = 'Time: ' + count;
        else
            time.innerHTML = 'Time: 0' + count;
        if (count == 0)
            clearInterval(myTimer);
        count--;
    }, 1000);
}

sQuizBtn.addEventListener('click', () => {
    startQuizElem.style.display = 'none';
    quesContain.style.display = 'block';
    timer();
    navigateQuiz();
})