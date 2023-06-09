Task:1
// function power(a,b){
//         document.write(a+" to the power "+b+" is "+a**b);
//     }
// var number = +prompt("Enter number");
//      var powerOfNumber = +prompt("Enter power of a number"); 
//      power(number,powerOfNumber)
    
// Task:2
// function leapyear(year)
// { 
//     if(year%4==0)
//     {
//         document.write(year+" is a leap year")
//     }
//     else
//     document.write(year+" is not a leap year")
// }
// var year = +prompt("Enter Year"); 
// var result = leapyear(year)



// Task:3
// function area(a,b,c,s){
//          var area = s*(s - a)*(s - b)*(s - c);
//          var Area = Math.sqrt(area);
//          document.write("Area is  "+Area.toFixed(2));
//     }
//     function forS(a,b,c){
//         var s = (a+b+c) / 2;
//         console.log(s);
//         return s;
//     }
//     var a= +prompt("Enter First side :")
//     var b= +prompt("Enter Second side :")
//     var c= +prompt("Enter Third side :")
//     var s = forS(a,b,c);
//     var result = area(a,b,c,s);
    
// Task:4
// function marks(f,s,t){
//         function average(f,s,t){
//         return ((f+s+t)/300);
//         }
//         function percentage(f,s,t){
//             return average(f,s,t)*100; 
//         }
//        var finalPercentage = percentage(f,s,t);
//        document.write("Percentage of 3 subjects :"+finalPercentage+"%"); 
//     }
//     var marks1 = +prompt("enter marks of First subject");
//     var marks2 = +prompt("enter marks of Second subject");
//     var marks3 = +prompt("enter marks of Third subject");
//     marks(marks1,marks2,marks3);

// Task:5
// function indexOf(word,value)
// {
//     var sentence = word.split("");
//     var index = 0;
//     for(var i=0;i<sentence.length;i++)
//     {
//         if(sentence[i]==value){
//             index = i;        }
//     }
//     console.log(index);
//     document.write("Index of "+value+" is "+index);
// }
// var string = prompt("enter any string :");
// var letter = prompt("enter the letter which index value you want to find");
// indexOf(string,letter);


// Task:6
// function vowels(string){
    //     var aeiou = [ 'a', 'e', 'i', 'o', 'u', 
    //                'A', 'E', 'I', 'O', 'U' ];
    //     var result = "";
          
    //     for( i = 0; i < string.length; i++) 
    //     {
              
    //         if (!aeiou.includes(string[i]))
    //         {
    //             result += string[i];
    //         }
    //     }  
    //    document.write("without Vowels string is "+result);
    // }
    // var string = prompt("Enter string:");
    // vowels(string);

// Task:7
// function occurrences(){
    //     var aeiou = [ 'a', 'e', 'i', 'o','u'];
    //     var count =0;
    //     for(i=0;i<string.length;i++){
    //     switch(string[i])
    // {   case 'a':
    //     {if(aeiou.includes(string[i+1]))
    //     {count++}
    //     break;}
    //     case 'e':
    //         {if(aeiou.includes(string[i+1]))
    //             {count++}
    //             break;}
    //     case 'i':
    //         {if(aeiou.includes(string[i+1]))
    //             {count++}
    //             break;}
    //     case 'o':
    //         {if(aeiou.includes(string[i+1]))
    //             {count++}
    //             break;}
    //     case 'u':
    //         {if(aeiou.includes(string[i+1]))
    //             {count++}
    //             break;}
    //     default:
    //         break;
    //     } 
    // }
    // document.write(" Vowels occurence in string is "+count)}
    // var string = prompt("Enter string:");
    // occurrences(string);
    

// Task:8
// function meters(km){
    //     var meter = km* 1000;
    //     document.write("<br> Distance in meter is "+meter);
    // }
    // function feet(km){
    //     var f = km*3281;
    //     document.write("<br> Distance in feet is "+f);
    // }
    // function inches(km){
    //     var inche = km*39370;
    //     document.write("<br> Distance in inches is "+inche);
    // }
    // function centimeters(km){
    //     var centi=km*100000;
    //     document.write("<br> Distance in centimeter is "+centi);
    // }
    // var distance = +prompt("Enter the distance between two cities (in km.):");
    // document.write("<br> Distance in Kilometer is "+distance);
    // meters(distance);
    // centimeters(distance);
    // feet(distance);
    // inches(distance);

// Task:9
// function OvertimePay(hoursWorked) {
    //     var regularHours = 40;
    //     var overtimeRate = 12.00;
    //     var ExtraPay = 0;
      
    //     if (hoursWorked > regularHours) {
    //       var ExtraHours = hoursWorked - regularHours;
    //       ExtraPay = ExtraHours * overtimeRate;
    //     }
      
    //     document.write("Overtime Pay is "+ExtraPay.toFixed(2));
    //   }
      
    //   var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
      
    //   OvertimePay(hoursWorked);
    
// Task:10
// function CurrencyNotes(amount) {
//     var Note100 = amount/ 100;
//     var Note50 = amount / 50;
//     var Note10 = amount / 10;
  
// document.write("<br>Note of 100: "+Note100);
// document.write("<br>Note of 50: "+Note50);
// document.write("<br>Note of 10: "+Note10);
// }
// var amount = +(prompt("Enter the amount to be withdrawn in hundreds:"));
//   CurrencyNotes(amount);

    
