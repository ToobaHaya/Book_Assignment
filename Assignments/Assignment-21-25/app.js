// Task:1
// var first = prompt('Enter first Name:')
// var last = prompt('Enter last name:')
// var result= first + last;
// alert('Hello '+result)

// Task:2
// var favoriteModel = prompt("What is your favorite phone model?");
// var length = favoriteModel.length;
// document.write("Your favourite phone is "+ favoriteModel +". The lenght of your favourite mobile phone model is" + length + ".");


// // Task:3
// var s='Pakistani';
// document.write('string ;'+s+"<br>")
// var index = s.indexOf("n");
// document.write('index of n :' + index)


// // Task:4
// var s='Hello world';
// document.write('string ;'+ s +"<br>")
// var index = s.lastIndexOf("l");
// document.write('last index of l :' + index)

// // Task:5
// var s='Pakistani';
// document.write('string ;'+s+"<br>")
// var index = s.charAt(3);
// document.write('Character at index 3 is :' + index)


// Task:6
// var firstName = prompt("Enter your First name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName.concat(lastName);
// alert('Hello'+fullName);

// // Task:7
// var city ='Hyderabad';
// document.write(city+"<br>")
// var newcity=city.replace('Hyder','Islam')
// document.write(newcity)


// // Task:8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write(message+"<br>")
// var newmsg=message.replace(/and/g, "&")
// document.write(newmsg)

// // Task:9
// var num = '472';
// document.write('string:' + num+"<br>")
// var result= num.toString();
// document.write('Number :'+result)


// // // Task:10
// var input = prompt('enter input:')
// document.write('User input :'+input+"<br>")
// var result=input.toUpperCase()
// document.write('Uppercase :'+result)

// // Task:11
// var input = prompt('enter input:')
// document.write('User input :'+input+"<br>")
// var result=input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// document.write('Titlecase :'+result)


// // Task:12
// var num = 35.36 ;
// var result=num.toString().replace('.','')
// document.write('number :'+num+"<br>")
// document.write('String :'+result)


// // Task:13
// var username = prompt("Enter your username:");
// if (username.match(/[@ . , !]/)){
//     alert("Please enter a valid username without any special symbols (@, ., !, ,,)");
// } else {
//     alert("Username is :" + username);
// }


// // Task:14
// A = ['cake','apple pie', 'cookie', 'chips', 'patties']
// var ask = prompt('Welcome to ABC Bakery \n What do you want to order sir/maám?')
// var Ask = ask.toLocaleLowerCase();
// ask.toLowerCase();
// var result = false;
// for (var i = 0; i< A.length; i++){
//     if(A[i] === Ask){
//         result = true;
//         break;
//     }
// }
// if(result){
//     document.write('<h2>' +Ask + " is avalible in our bakery at index " + A.indexOf(Ask));
// } else {
//     document.write('<h2>' + 'We are sorry. '+Ask + " is not avalible in our bakery");
// }

// // // Task:15
// var password = prompt("Enter a password:");
// var Alphabets = /[a-zA-Z]/.test(password);
// var Numbers = /\d/.test(password);
// var number = /^\d/.test(password);
// var Long = password.length >= 6;
// if (Alphabets && Numbers && !number && Long) {
//   alert("Valid password!");
// } else {
//   alert("Please enter a valid password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number.");
// }

// Task:16
// var university = "University of karachii";
// var array = university.split("");
// console.log(array);
// for ( var i = 0; i< array.length; i ++) {
//     document.write(array[i] + "<br>");
// }

// Task:17
// var s='Pakistan';
//  document.write('User input :'+s+"<br>")
// var result = s.charAt(s.length-1);
// document.write('Last character of input :' + result)

// Task:18
// var string ='The quick brown fox jumps over the lazy dog';
// var some = string.toLowerCase();
// var result=some.match(/the/g).length
// document.write(string+"<br>")
// document.write('There are '+ result+' occurence of word "the"')