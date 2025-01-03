const express = require('express')
const app = express();
const cors = require('cors')
const { urlencoded } = require('body-parser');
const port = 1200;


app.use(cors());
app.use(urlencoded({extended: true}));
app.use(express.json());


app.listen(port, (req, res)=>{
    console.log(`Port Running: http://localhost:${port}`)
})