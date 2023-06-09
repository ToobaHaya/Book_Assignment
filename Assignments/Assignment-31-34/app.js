// Task:1
// var current = new Date();
// document.write(current)

// Task:2
// var current = new Date();
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// document.write ("Current month = " + month_name[current.getMonth()]);


// Task:3
// var current = new Date();
// var day = current.toString();
// var result = day.slice(0,3);
// document.write("Today is " + result);

// Task:4
// var current = new Date();
// var day = current.toString();
// var result = day.slice(0,3);
// if(result=='Sat' || result == 'Sun'){
//     alert("It's a fun day")
// }

// Task:5
// var current = new Date();
// var result = current.getDay()
// if(result < 16){
//     alert('First fifteen  days of the month')
// }
// else{
//     alert('Last days of the month')
// }

// Task:6
// var current = new Date();
// document.write(current)
// var New = new Date();
// New.setDate(15);
// New.setMonth(0);
// New.setYear(1991);
// var milli = current - New;
// document.write( "<br> Elapsed milliseconds since Jan 1, 1970: " +milli)
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " +  milli/1000*60)

// Task:7
// var current = new Date();
// var result = current.getHours();
// if(result<=12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// Task:8
// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate);

// Task:9
// var startingDate = new Date("April 22, 2023");
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - startingDate.getTime(); 
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);

// // Task:10
// var reference = new Date('june 2, 2023 00:00:00');  
// var beginning = new Date("January 1, 2015 00:00:00");  
// var Seconds = Math.floor((beginning - reference) / 1000);  
// document.write("Seconds elapsed since the beginning of 2015: " + Seconds);
// // Task:11
// var current = new Date ();
// var hours = current.getHours();
// var hour = hours + 1;
// var hourDate = new Date(current.setHours(hour));
// document.write("date object an hour ahead:" + current);


// // Task:12
// var current = new Date ();
// document.write(current+'<br>');
// var year = current.getFullYear();
// var add = year - 100;
// var result = new Date(current.setFullYear(add));
// document.write("dit was" + current);

// Task:13
// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("<h2>"+"Your birth year is: " + birthYear);


// Task:14
// document.write("<h2>K-Electric Bill" + "<br>" + "</h2>")
// var customerName = " ABC Customer"
// var currentMonth = "May"
// var unitsNumber = 410;
// var chargesPerUnits = 16;
// var NetAmountPayable =3566;
// var LatePaymentSurcharge = 350;
// var GrossAmountPayable = 6910;
// document.write("Customer Name:"+ customerName + "<br>"+ "Month: "+currentMonth + "<br>" +"Units Number: " +unitsNumber + "<br>"+"Charges pr units:"+chargesPerUnits 
// +"<br>"+ "<br>"+ "NetAmountPayable: "  +NetAmountPayable +  "<br>"+ "LatePaymentSurcharge: " +LatePaymentSurcharge + "<br>"+ "GrossAmountPayable:"+" " +GrossAmountPayable + "<br>") 
// var nAP = 410*16;
// var gAP = 3566+350;
// document.write("<br>"+"Net Amount Payable (within Due Date) = "+ nAP +"<br>")
// document.write("Gross Amount Payable (after Due Date) = "+ gAP + "<br>")