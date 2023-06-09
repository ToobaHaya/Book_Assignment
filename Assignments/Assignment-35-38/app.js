// Task:1 
// function date(){
//     document.write(new Date());
// }
// var date = new date();

// // Task:2

// function greet(firstName, lastName) {
//   var fullName = firstName + " " + lastName;
//   alert("Hello " + fullName);
// }
// var firstName = prompt('Enter firt name :'); 
// var lastName=  prompt('Enter last name :'); 
// greet(firstName, lastName);


// // Tak:3

// function greet(firstNum, SecondNum) {
//   var sum = firstNum + SecondNum;
//   alert("Hello " + sum);
// }
// var firstNum = +prompt('Enter firt number :'); 
// var SecondNum=  +prompt('Enter second number :'); 
// greet(firstNum, SecondNum);

// // Task:4

// function Calculator(num1, num2, operator) {
//   var result;
// if (operator == '+') {
//     return (num1 + num2);
//   }
//   else if (operator == '-') {
//     return (num1 - num2);
  
//   }
//   else if (operator == '*') {
//     return (num1 * num2);
//   }
//   else if (operator == '/') {
//     return (num1 / num2);
//   }
//   else {
//     alert("Invalid operator!");
//   }
// }
// var num1 = +prompt('Enter first Number :')
// var num2 = +prompt('Enter second number :');
// var operator = prompt("Enter operator : \n '+','-','*', '/' ")
// var result = Calculator(num1,num2,operator);
// alert(result)

//  Task:5
//  function square(num)
// {
//     return(num*num);
// }
// var number=+prompt("Enter Number");
// var result = square(number);
//     document.write(result);

//  Task:6
// function fact(num)
// { var f=1;
//     for(i=1;i<=num;i++)
//     {
//         f*=i;
//     }
//     return f;
// }
// var number=+prompt("Enter Number");
// var result = fact(number);
//     document.write(result);

// //  Task:7
// function count(firstnum,lastnum)
// {
//   for(i=firstnum; i<=lastnum; i++)
//   {
//         document.write(i+"<br>");
//        }
// }
// var firstnum =+prompt("Enter first Number");
// var lastnum =+prompt("Enter last Number");
// var result = count(firstnum,lastnum);


// //  Task:8
// function calcHyp(b,p)
// {    
//   function Square(num)
//   {
//       return(num*num);
//   }
//      var hyp = Square(b) + Square(p);
//         hyp = Math.sqrt(hyp).toFixed(2);
//    return hyp;
// }
// var base=+prompt("Enter Base Number");
// var perp=+prompt("Enter perpendicular Number");
// var hyp = calcHyp(base,perp);
// document.write("The hypotenuse of a right triangle with base " +base+ " and perpendicular " +perp+ " is " +hyp);

// //  Task:9
// function calculateRectangleArea(width, height) {
//       var area = width * height;
//       return area;
//     }
//     var width = +prompt("Enter width");
//     var height = +prompt("Enter height");
//     var rectangleArea = calculateRectangleArea(width, height);
//     document.write("<h2>"+"The area of a rectangle is :"+" " +rectangleArea+ );
  
//  Task:10
//  function checkPalindrome(string) {
//   var len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//       if (string[i] !== string[len - 1 - i]) {
//           return 'It is not a palindrome';
//       }
//   }
//   return 'It is a palindrome';
// }
// var string = prompt('Enter a string: ');
// var value = checkPalindrome(string);
// alert(value);

//  Task:11
// function Letter(text) {
//    var words = text.split(" ");
//    for (let i = 0; i < words.length; i++) {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//    }
//    return words.join(" ");
//  }
//  var text = 'the quick brown fox.';
//  var result = Letter(text);
//  document.write(text + '<br>')
//  document.write (result); 

//  Task:12
// function Letter(text) {
//      var words = text.split(" ");
//      var word = '';
//       for (var i = 0; i < words.length; i++) 
//        {
//       if (words[i].length > word.length) 
//       {
//         word = words[i];
//       }
//     }
//     return word; 
//   }
// var text = 'Web Development Tutorial'
// var result = Letter(text)
// document.write(text + '<br>')
// document.write(result)

//  Task:13
// function occurrences(string,letter)
// {
//     var count = 0;
//     var sentence = string.split("");
//     for(var i=0; i<sentence.length; i++)
//     {
//         if(sentence[i] == letter){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// var string = prompt("Enter String:");
// var letter = prompt("Enter letter to find its occurrence");
// document.write("Text: "+string+"<br>");
// document.write("<br>There are "+occurrences(string,letter)+" occurence of the Letter "+letter);


// Task:14

// function Circumference(radius){
//     var Circumference = 2*Math.PI*radius;
//     document.write("The circumference is "+Circumference.toFixed(2));
// }
// function Area(radius){
//     var area = 2*radius*radius;
//     document.write("<br>The area is "+area);   
// }
// var radius=prompt("enter the radius: ");
// Circumference(radius);
// Area(radius);

