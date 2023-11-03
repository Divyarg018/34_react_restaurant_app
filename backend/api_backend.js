const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res)=>{
    let userData = {
        username: req.body.username,
        password: req.body.password
    }
    if (userData.username == 'divya' && userData.password == 'abcd'){
        res.json({flag: true, msg: 'Login Succesfull'});
    }else{
        res.json({flag: false, msg: 'Login Failed'});
    }
});


app.listen(3200, ()=>{
    console.log("Backend application is running at port 3200");
});