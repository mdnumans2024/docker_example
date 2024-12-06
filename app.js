const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) =>{
    res.send('Hello Docker World!');
});
app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});