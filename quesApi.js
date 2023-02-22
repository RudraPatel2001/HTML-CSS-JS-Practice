var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/getq', async (req, res) => {
    const url = 'https://quizapi.io/api/v1/questions/?apiKey=KkNtveY6pDDId9YBbWL19hIWvbOzW5HUu25Hz18l&limit=1';
    await fetch(url).then(res => res.json()).then(data => console.log(data));
    res.send("Check Console");
})

app.listen(3001);