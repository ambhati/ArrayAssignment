Work Shop Solution
Q.1. Movies object array. moviename, actorname, releaseyear, watched, producer

 1. Kaun kaun si movies watch krli hai unka nam btao
 2. Tumara favourite actor kaun hai 
 3. kaun kaun si movies particular year me launch hui 
 4. Movies objects ko ascending order me sort krna hai based on year 
 5. total tumne kitni movies dekhi hai unka count btana hai 
 
Q.2 DOM 
 inputbox  number enter 
 Submit 
 
Number odd/Even  alert/html

Q.3 DOM 
 5 Subjects ke number puchne hain 
 fir submit button pr click krna hai 
 click krne pr ye info print krvani hai 
 Total Marks 500
 Obtained marks 400
 Percentage 80%
 Grade: First Grade 
 
Q.4 Game DOM 
 Colorful watch 
 [Date]/[Month]/[Year] [HH]:[MM]:[S]:[MS]
 
Q.5 Array numbers ka. Is Array me jitne numbers 100 se bde hain unhe filter krna hai 
 then unme se sbse max number and sbse min number nikalne hain 
 Dono min and max ko add krna hai and finally number ko print krva dena hai 
 
Q.6 Function bnana hai. Function ke parameter pass krna hai Symbol
 Symbol +, -, *, /
 Jo symbol hai uska function return krna hai return sum()
 2 numbers ke lie
 returned function ko call krna hai 
 
Q.7. 100 se 200 ke bich me random number generate krna hai 

Q.8. Ek date ka object bnana hai. Us dat ke object ki date tumare birthday valid date kr deni hai 
 2001   1 July 
 
Q.9 Ek Map bnana hai key, value 
 Map se vo sare key-value filter krne hai jisme value 100 se bdi ho and key 50 se bdi ho 

Q.10. Ek Passport application form bnana hai using DOM 
 Error message HTML me hi dhikana hai 

Q.11 5 Sound ki audio download. 5 button bnane hai. Jis b button press kroge vhi song play hona chahiye

Q.12 Switch. Country names. Continent India Asia, Pak Asia, China Asia, Africa. Not valid country

Q.13 Students object ka array bnana hai. 
 [
  {
   name :"Sajid"
   mobile: "934543543545",
   party : false
  }
 ]
 Total 15
 
 
 Random generate  1-15 8
 Index se student pick false -> true. Party Sajid dega 
 Index se student pick false -> already true. Sajid Party de chuka hai
 
 Submit button in html. click pr function 
 
Q.14 String --- Helo my Name is Wecode Academy
 Small -> Captial
 Capital -> Small 
 Word ulta kr dena 
 ymedacA edoceW
 YMEDACa EDOCEw
 
Q.15 First Class function 
High order function 
callback function 
ko theory me explain krna hai


question = 1
const movies = [
{
movieName: "3 idiot",
actorName: "Aamir Khan",
releaseYear: 2001,
watched: true,
producer: "shivraj"
},
{
movieName: "Kabhi Khushi Kabhie Gham",
actorName: "Shah Rukh Khan",
releaseYear: 2001,
watched: true,
producer: "Yash Johar"
},
{
movieName: "Gangs of Wasseypur",
actorName: "Manoj Bajpayee",
releaseYear: 2012,
watched: false,
producer: "Anurag Kashyap"
}
];

1. Kaun kaun si movies watch ki hai
let watchMovie = movies.filter(movie => movie.watched)
console.log(watchMovie);
let wathchedMovieName = watchMovie.map(movie => movie.movieName)
console.log(wathchedMovieName);

3. Kaun kaun si movies particular year me release hui
const releaseYearcheck = 2001;
const moviesInYear = movies.filter(movie => movie.releaseYear === releaseYearcheck)
const moviesNameInYear = moviesInYear.map(movie => movie.movieName)
console.log("is sal release huii movie", moviesNameInYear);

// // 4. Movies ko ascending order me sort karna year ke basis par
const sortedMovies = movies.slice()
.sort((a, b) => a.releaseYear - b.releaseYear);
console.log("Movies ka acending order", sortedMovies);

// 5. Total dekhi gayi movies ka count batana
const totalWatchedMovies = movies.filter(movie => movie.watched).length;
console.log("Total seen movie", totalWatchedMovies);


Question = 2
<!DOCTYPE html>
<html>
<head>
<title>Colorful Watch</title>
</head>
<body>
<input type="number" id="text">
<button id="btn" onclick="hello()">Submit</button>
<p class="" id="print"></p>

<script >
function hello(){
const check = document.getElementById("text").value;
if(check % 2 === 0){
document.getElementById("print").innerHTML = "This number is even"
}else{
document.getElementById("print").innerHTML = "This number is odd"
}
}
</script>
</body>
</html>




question 3

<!DOCTYPE html>
<html>
<head>
<title>Marks Calculator</title>
</head>
<body>
<h1>Marks Calculator</h1>

<form id="marksForm">
<label for="subject1">Subjest 1 Marks : </label>
<input type="number" id="subject1" required><br><br>

<label for="subject2">Subject 2 Marks :</label>
<input type="number" id="subject2" required><br><br>

<label for="subject3">Subject 3 Marks :</label>
<input type="number" id="subject3" required><br><br>

<label for="subject4">Subject 4 Marks :</label>
<input type="number" id="subject4" required><br><br>

<label for="subject5">Subject 5 Marks :</label>
<input type="number" id="subject5" required><br><br>

<input type="submit" value="Submit">
</form>

<div id="result"></div>

<script>
const marksForm = document.getElementById("marksForm")
const resultP = document.getElementById("result")
// console.log(marksForm,resultP);
marksForm.addEventListener("submit",function(e){
e.preventDefault()
const subject1Marks = +(document.getElementById("subject1").value);
const subject2Marks = +(document.getElementById("subject2").value);
const subject3Marks = +(document.getElementById("subject3").value);
const subject4Marks = +(document.getElementById("subject4").value);
const subject5Marks = +(document.getElementById("subject5").value);

const totalMarks = 500;
const obtainedMarks = subject1Marks + subject2Marks + subject3Marks + subject4Marks + subject5Marks;
const percentage = (obtainedMarks / totalMarks) * 100;

let grade = "";

if (percentage >= 90) {
grade = "A+";
} else if (percentage >= 80) {
grade = "First Grade";
} else if (percentage >= 70) {
grade = "Second Grade";
} else if (percentage >= 60) {
grade = "Third Grade";
} else {
grade = "Fail";
}

resultP.innerHTML = `
Total Marks: ${totalMarks}<br>
Obtained Marks: ${obtainedMarks}<br>
Percentage: ${percentage.toFixed(2)}%<br>
Grade: ${grade}
`;
});
</script>
</body>
</html>


question 4

<!DOCTYPE html>
<html>
<head>
<title>Colorful Watch</title>
<style>
/* Add styles for colorful display */
body {
background-color: black;
color: white;
text-align: center;
font-size: 36px;
font-family: monospace;
}
</style>
</head>
<body>
<div id="watch"></div>

<script>
function updateTime() {
const now = new Date();
const date = now.getDate();
const month = now.getMonth() + 1
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

const formattedDate = `${date}/${month}/${year}`;
const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;

const watchElement = document.getElementById("watch");
watchElement.innerHTML = `${formattedDate} ${formattedTime}`;
}

setInterval(updateTime, 1000);

updateTime();
</script>
</body>
</html>

question 6

function test(symbol){
if(symbol === "+"){
return function sum(a,b){
console.log(a + b);
}
} else if(symbol === "-"){
return function sub(a,b){
console.log(a - b);
}
} else if(symbol === "*"){
return function multiple(a,b){
console.log(a * b);
}
} else if(symbol === "/"){
return function division(a,b){
console.log( a / b);
}
}
}
let ans = test("-")
ans(2,2)


question 7

let max = 200
let min = 100
let randomNumber = Math.floor(Math.random() * (max - min ) +101 );
console.log(randomNumber);



question 5

let arr = [44,55,66,111,222,333,212,21,321]
let filtered = arr.filter(num => num > 100)
console.log(filtered);
let maxNumber = Math.max(...filtered)
console.log(maxNumber);
let minNumber = Math.min(...filtered)
console.log(minNumber);
let addMinandMax = maxNumber + minNumber
console.log(addMinandMax);

question 8

let birthDate = new Date("1999-12-10")
console.log(birthDate);

question 9
let myMap = new Map()
myMap.set(60,160)
myMap.set(70,170)
myMap.set(40,140)
myMap.set(90,55)
console.log(myMap);

let filteredMap = new Map()
for(let[key,value] of myMap){
if(key > 50 && value > 100){
filteredMap.set(key,value)
}
}
console.log(filteredMap);

question 10

<!DOCTYPE html>
<html>

<head>
<title>Validation</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{
background-color: aqua;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

}
.container{
background-color: white;
padding: 50px;
text-align: center;

}
h1{
margin: 0px 0px 10px 0px;

}
input{
width: 200px;
margin: 10px 0px;
padding: 10px;
}
input[type="submit"]{
width: 225px;
background-color: blue;
color: white;
border: 0px;
}
.Error{
margin: 0px;
color: red;
text-align: left;
}
</style>

</head>

<body >

<div class="container">
<h1>Passport Form</h1>
<form onsubmit="return validateForm()">
<input type="text" placeholder="FirstName" id="FirstName" ><br>
<p class="Error" id="firstnameerror"></p>
<input type="text" placeholder="LastName" id="LastName" ><br>
<p class="Error" id="lastnameerror"></p>
<input type="email" placeholder="Email" id="email"><br>
<p class="Error" id="emailerror"></p>
<input type="date" placeholder="DOB" id="DOB" ><br> 
<p class="Error" id="doberror"></p>

<input type="submit" class="">
<!-- <input type="text" name="fname" required> -->
</form>
</div>

<script >
let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let email = document.getElementById("email")
let dob = document.getElementById("DOB")
// console.log(userName,password);
let flag = 1

function validateForm(){
if(!FirstName.value){
document.getElementById("firstnameerror").innerHTML = "FirstName is required"
flag = 0
}else if(FirstName.value.length < 3){
document.getElementById("firstnameerror").innerHTML = "FirstName is required min 3 char"
flag = 0
}
else{
document.getElementById("firstnameerror").innerHTML = "";
flag = 1
}

if(!LastName.value){
document.getElementById("lastnameerror").innerHTML = "LastName is required"
flag = 0
}else if(LastName.value.length < 3){
document.getElementById("lastnameerror").innerHTML = "LastName is required min 3 char"
flag = 0
}
else{
document.getElementById("lastnameerror").innerHTML = "";
flag = 1
}

if(!email.value){
document.getElementById("emailerror").innerHTML = "Email is require"
flag = 0
}else{
document.getElementById("emailerror").innerHTML = ""
flag = 1
}
if(!dob.value ){
document.getElementById("doberror").innerHTML = "Date of Birth is required"
flag = 0
}else{
document.getElementById("doberror").innerHTML = ""
flag = 1
}
if(flag){
return true
}else{
return false
}
}
</script>
</body>

</html>








