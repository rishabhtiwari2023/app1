const express = require('express');
var hbs=require('hbs');
var mysql = require('mysql');
const router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
const path = require('path');
// const http=require('http'); 



const app = express();
//dbms
const PORT = 3000 || process.env.PORT;
var connection = mysql.createConnection({
	host     : 'valleyofenglish.in',
	user     : 'valleyof_RISHABH',
	password : 'RishiKiMaa@',
	database : 'valleyof_RT0691 '
});
app.use("/", router);
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//dbms


//template directory and partial directary
const temp=path.join(__dirname, "template/views");
const partials=path.join(__dirname, "template/partials");
app.use(express.static(__dirname + '/image/'));

app.set("view engine","hbs");

app.set("views",temp);
hbs.registerPartials(partials);

app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/MCQgame",(req,res)=>{
    res.render("MCQgame");
});
app.get("/dictionary",(req,res)=>{
    res.render("dictionary");
});
app.get("/noun",(req,res)=>{
    res.render("noun");
});
app.get("/pronoun",(req,res)=>{
    res.render("pronoun");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/signup",(req,res)=>{
    res.render("signup");
});
app.get("/voice",(req,res)=>{
    res.render("voice");
});
app.get("/VocabTravel",(req,res)=>{
    res.render("VocabTravel");
});
app.get("/vocabProverb",(req,res)=>{
    res.render("vocabProverb");
});
app.get("/vocabAmerican",(req,res)=>{
    res.render("vocabAmerican");
});
app.get("/subject",(req,res)=>{
    res.render("subject");
});
app.get("/course",(req,res)=>{
    res.render("course");
});



//dbms

app.listen(PORT,()=>{
    console.log(`listening to the ${PORT}`);
});




app.post('/auth', function(request, response) {
    var sno=1;
	var fn = request.body.fn;
	var ln = request.body.ln;
    var midname=request.body.mn;
    var mob=request.body.mob;
    var addr=request.body.addr;
    var email=request.body.email;
    var dob=request.body.dob;
console.log(fn);

    const sql = 'INSERT INTO ENGLISH VALUES ?'
    const values = [[sno,fn,midname,ln,mob,addr,email,dob] ];
    connection.query(sql, [values], (err, results, fields)=>{
        if(err){
            console.log('failed to Reg new student : ', err)
            
            response.sendStatus(500)  
            return 
        }
    console.log('Inserted new Student ', results.insertId)
        res.end();
    })
    response.redirect('/home')
    response.end();
});
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
// npm run rishu
// C:\Users\rishabh tiwari\Desktop\grammer\try1 with node
