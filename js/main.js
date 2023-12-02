// Q1

// var x =Number(prompt("Enter Num"));
// console.log(x);
// document.getElementById("demo").innerHTML =  "Num is "+ x

//////////////////////////////////////////////////////////////////
// Q2

// var x = prompt("Enter Num divide by there and four");

// if (x%3 === 0 && x%4 === 0 ){
//     console.log("YES")
// } else {
//     console.log("No")
// }

//////////////////////////////////////////////////////////////////
// Q3

// var num1 = prompt("Enter num1");
// var num2 = prompt("Enter num2");
// if(num1 > num2){
//     console.log("Max num is " + num1)
// }else if(num2 > num1){
//     console.log("Max num is " + num2)
// } else {
//     console.log("Num is equal")
// }

//////////////////////////////////////////////////////////////////
// Q4

// var num1 = prompt("Enter num1");

// if(num1 > 0){
//     console.log("Num is +ve ")
// }else if(num1 < 0){
//     console.log("Num is -ve")
// } else {
//     console.log("Num is Zero")
// }

/////////////////////////////////////////////////////////////////
// Q5

// var num1 = prompt("Enter num1");
// var num2 = prompt("Enter num2");
// var num3 = prompt("Enter num3");


// if(num1>num2 && num1>num3 && num2>num3){
//     console.log("Max" + num1 + "and Min " + num3)
// }else 
// if(num1>num2 && num1>num3 && num3>num2){
//     console.log("Max " + num1 + "and Min " + num2)
// } else 

// if(num2>num1 && num2>num3 && num1>num3){
//     console.log("Max" + num2 + "and Min " + num3)
// }else 
// if(num2>num1 && num2>num3 && num3>num1){
//     console.log("Max " + num2 + "and Min " + num1)
// }else

// if(num3>num2 && num3>num1 && num2>num1){
//     console.log("Max" + num3 + "and Min " + num1)
// }else 
// if(num3>num2 && num3>num1 && num1>num2){
//     console.log("Max " + num3 + "and Min " + num2)
// }

/////////////////////////////////////////////////////////////////
// Q6


// var num1 = prompt("Enter num1");

// if(num1%2 == 0 && num1 != 0 ){
//     console.log("Num is Oven")
// }else if(num1 == 0){
//     console.log("Num is zero")
// }else{
//     console.log("Num is Odd")
// }

/////////////////////////////////////////////////////////////////
// Q7

// Q 7 not exist 

/////////////////////////////////////////////////////////////////
// Q8

// var letter = prompt("Enter Letter");

// if(letter == "a"||letter == "A"||letter == "e" ||letter == "E" || letter == "i"||
// letter =="I" || letter == "o"|| letter == "O"||letter == "U"|| letter == "u" ){
//     console.log("Letter is vowel")
// }else{
//     console.log("Letter is consonant")
// }

/////////////////////////////////////////////////////////////////
// Q9

// var num = prompt("Enter Num");
// for(i=1 ; i<=num ; i++){
//     console.log(i)
// }

/////////////////////////////////////////////////////////////////
// Q10

// var num = prompt("Enter Num");
// for(i=1 ; i<=12 ; i++){
//     console.log(i * num)
// }

/////////////////////////////////////////////////////////////////
// Q11


// var num = prompt("Enter num")
// for(var i =2 ; i<num ; i+=2){
//     console.log(i)
// }

/////////////////////////////////////////////////////////////////
// Q12

// var x = prompt("Enter the Num");
// var n = prompt("Enter the Num");
// let num = 1; 
// for(let i = 0; i < n ; ++i){ 
//       num = num * x;  
// } 
// console.log(num);

// i Search how to use let in internet Sorry!!!


/////////////////////////////////////////////////////////////////
// Q12 Again

// var sub1 = Number(prompt("Enter your Degree in Subject 1"));
// var sub2 = Number(prompt("Enter your Degree in Subject 2"));
// var sub3 = Number(prompt("Enter your Degree in Subject 3"));
// var sub4 = Number(prompt("Enter your Degree in Subject 4"));
// var sub5 = Number(prompt("Enter your Degree in Subject 5"));

// var tot = ( sub1 + sub2 + sub3 + sub4 + sub5 )

// console.log("Total Marks : " + tot)
// console.log("Aveg :" + (tot/5))
// console.log("Percentage is :" + (tot/5) + "%")

/////////////////////////////////////////////////////////////////
// Q13


// var month = prompt("Enter month Number");

// if(month == 1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12 ){
//     console.log("Day of Month 31")
// }else
// if(month == 4 || month ==6 || month ==9 || month ==11  ){
//     console.log("Day of Month 30")
// }else{
//     console.log("Day of Month 28")
// }

/////////////////////////////////////////////////////////////////
// Q14


// var sub1 = Number(prompt("Enter your Degree in Physics,"));
// var sub2 = Number(prompt("Enter your Degree in Chemistry"));
// var sub3 = Number(prompt("Enter your Degree in Biology"));
// var sub4 = Number(prompt("Enter your Degree in Mathematics"));
// var sub5 = Number(prompt("Enter your Degree in Computer"));

// var tot = (( sub1 + sub2 + sub3 + sub4 + sub5 ) )
// var avrg = (( sub1 + sub2 + sub3 + sub4 + sub5 )/5)

// if(avrg>=90){
//     console.log(tot +"  Grade A" )
// }else  
// if(avrg>=80){
//     console.log(tot +" Grade B" )
// }else
// if(avrg>=70){
//     console.log(tot +"  Grade C" )
// }else
// if(avrg>=60){
//     console.log(tot +"  Grade D" )
// }else
// if(avrg>=40){
//     console.log(tot +" Grade E" )
// }else {
//     console.log(tot +" Grade F" )
// }
       
/////////////////////////////////////////////////////////////////
// //////////////////    Switch Cases   ///////////////////////
// Q15    

// var month = prompt("Enter month Number");

// switch(month){
//     case "1" :
//     case "3" :
//     case "5" :
//     case "7" :
//     case "8" :    
//     case "10" :
//     case "12 ":
//         console.log("31")
//     break;
//     case '2':
//         console.log("28") 
//      break;
//      case '4':
//      case '6':
//      case '9' : 
//      case '11':
//         console.log("30")   
//        break;       
// }

// //////////////////    Switch Cases   ///////////////////////
// Q16    

// var letter = prompt("Enter Letter");

// switch(letter){
//     default:
//         console.log("Letter is consonant")
//         break;
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//      case 'u':   
//          console.log("Letter is vowel") 
   
// }


// //////////////////    Switch Cases   ///////////////////////
// Q17

// var num1 = prompt("Enter num 1");
// var num2 = prompt("Enter num 2");

// switch(true){
//     case (num1 > num2) : 
//         console.log("Max" + num1)
//         break;
//     case(num2 > num1 ) :
//         console.log("Max" + num2)
//         break;
//     default:
//         console.log("Num Equal")        
// }


//////////////////    Switch Cases   ///////////////////////
// Q18


// var num = prompt("Enter num ");

// switch(true){
//     case(num == 0):
//         console.log("Num is zero")
//         break;
//     case (num%2==0) :
//         console.log("Num is Even")
//         break;
//     default:
//         console.log("Num Is odd")    
     
// }

//////////////////    Switch Cases   ///////////////////////
// Q19


// var num = prompt("Enter num ");

// switch(true){
//     case(num == 0):
//         console.log("Num is zero")
//         break;
//     case (num>0) :
//         console.log("Num is +ve")
//         break;
//     default:
//         console.log("Num Is -ve")    
     
// }

//////////////////    Switch Cases   ///////////////////////
// Q20

// alert("use 1 to addition // 2 for subtraction // 3 for Multipication // 4 for division ")
// var x = Number(prompt("Enter the operation Num to do "));
// var num1 = Number(prompt("Enter First Num"));
// var num2 = Number(prompt("Enter Second Num"));

// switch(x){
//     case 1 :
//         console.log(num1+num2)
//         break;
//     case 2 :
//         console.log(num1-num2)
//         break;
//     case 3 :
//         console.log(num1*num2)
//         break;  
//     case 4 :
//         console.log(num1/num2)
//         break;             
// }