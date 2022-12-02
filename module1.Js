JS:
//question1.Js
console.log("I'm printing to console!");
//Question2.JS
const  userName=prompt('Enter your name.');
document.querySelector('#target').innerHTML = 'Hello,' + userName + 'Welcome to my page!';
//Question3.JS

const GetNumbers1= prompt("Enter three number");
const GetNumbers2= prompt("Enter three number");
const GetNumbers3= prompt("Enter three number");
const int_num1=parseInt(GetNumbers1);
const int_num2=parseInt(GetNumbers2);
const int_num3=parseInt(GetNumbers3);

const sum=int_num1+int_num2+int_num3;

const ave=sum/3;
document.querySelector('#target').innerHTML="The Sum Of Numbers Is:  ("+sum +")   The Average Of Numbers Is: "+ (ave)
//question4.JS

const  student_name=prompt("Hi ! Enter Your Name:");
const  rand_int=Math.floor(Math.random());

const class_list=[ "Daredevil", "Slytherin", "Hufflepuff", "Ravenclaw"];
if (rand_int == 0) {

    document.write("Hello "+student_name+"Your Class Is "+class_list[0])

}else if (rand_int == 1){

    document.write("Hello "+student_name+" Your Class Is "+class_list[1])

}else if (rand_int == 2){

    document.write("Hello "+student_name+" Your Class Is "+class_list[2])

}else {

    document.write("Hello "+student_name+" Your Class Is "+class_list[4])

}
//Question5.Js

const GetYear= prompt("Please,Enter Year:");
if (GetYear % 4 == 0){
    if (GetYear % 100 ==0){
        if (GetYear % 400 ==0){
            document.write("It's a LEAP YEAR")

        }else {
            document.write("It's NOT a leap year")

        }
    }else {
        document.write("It's a LEAP YEAR")

    }
}else {
    document.write("It's NOT a leap year")
}
//Question6.Js


const result=confirm("May I calculate the square root?");
if (result==true){
    const number=prompt("Enter Number:");
    if (number < 0){
        document.write("The square root of a negative number is not defined")
    }else {
        document.write("The Square Root of ---"+number+"---is---",Math.sqrt(number));
    }

}else {
    document.write("The square root is not calculated")
}
//Question7.js

const numberDice= prompt("Enter Number Of Dice Rolls");
const numberDice_1=parseInt(numberDice);
var sum_roll=0;
var rool=0;

for (let i =1 ;i <=numberDice_1 ; i++) {
    rool = Math.floor(Math.random() * 6) + 1;
    sum_roll = sum_roll + rool;
}

console.log("the sum of rolls is:",+sum_roll);

//Question8.Js
let  startYear= prompt("Enter First Year");
startYear=parseInt(startYear);
const  endYear=prompt("Enter End Year");
const  leapYear_list=[];

for (let i = startYear; i <= endYear; i++) {

        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    leapYear_list.push(i);

                } else {

                }
            } else {
                leapYear_list.push(i);

            }
        } else {
        }

}
document.writeln("<ol>")
for (let i=0; i < leapYear_list.length;i++){
        document.writeln("<li>"+leapYear_list[i]+"</li>");

document.writeln("</ol>")
}
//Question9.Js

let getNumber = prompt("Enter A Number");
getNumber = parseInt(getNumber);
if (getNumber>1){
    for (let i=2;i <getNumber;i++){
        if (getNumber % i == 0){
            document.write("The Number"+getNumber+ " is NOT PRIME NUMBER")
            break
        }
        else if(i!=getNumber) {


        }
        else {
            document.write("The Number" + getNumber + " is  PRIME NUMBER")
            break
            }
}
}else{
    document.write("The Number"+getNumber+ " is NOT PRIME NUMBER")
}
//Question10.Js

let numDice= prompt("Enter number of dice");
numDice=parseInt(numDice);
let sumEye= prompt("Enter sum of eye number");
sumEye=parseInt(sumEye);
var count=0;

for (let i=0;i<10000;i++){
    let roll=0
    for (let j=0;j<numDice;j++){
        roll=roll+Math.floor(Math.random()*6)+1;
        if (roll==sumEye){
            count++
        }
    }
}
probablity=(count/10000)*100
probablity=probablity.toFixed()
document.write("Probability to get sum"+ sumEye+" with" +numDice+" dice is about "+probablity+"  %" )



HTMLS:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise1.js"></script>
</body>
</html>
#Question2.HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>Greeting</h1>
<p id="target"></p>



<script src="exercise2.js">

</script>

</body>
</html>
#question3.Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>SUM AND AVERAGE</h1>
<p id="target"></p>

<script src="exercise3.js"></script>
</body>
</html>
#question4.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="target1"></p>


<script src="exercise4.js"></script>
</body>
</html>
#Question5.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="target1"></p>
<p id="target2"></p>
<p id="target3"></p>
<p id="target4"></p>


<script src="exercise5.js"></script>
</body>
</html>
#question6.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="targrt"></p>

<script src="exercise6.js"></script>
</body>
</html>
#question7.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="target"></p>


<script src="exercise7.js"></script>
</body>
</html>
#Question8.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="target"></p>


<script src="exercise8.js"></script>
</body>
</html>
#Question9.Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise9.js"></script>
</body>
</html>
#Question10.Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise10.js"></script>
</body>
</html>
