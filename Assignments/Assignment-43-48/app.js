// task:1
// function Alert()
//  {
//     alert("Linked Clicked !")
// }

// task:2
// function Alert()
// {
//     alert("Thankyou for purchasing mobile :) !")
// }

// // task:3
// function remove(row){
    //     var i = row.parentNode.parentNode.rowIndex;
    //     document.getElementById("student").deleteRow(i);
    //     console.log(i);
// }

// // task:4
// function mouseover(element, secondimg) {
//         element.src = secondimg;
//         console.log(element.src);
//       }
// function mouseout(element, firstimg) {
//             element.src = firstimg;
//             console.log(element.src);
//           }

// // task:5
var count=0;
function increase(){
        count++;
        writeCounterValue()
    }
    function decrease(){
      count--;
      writeCounterValue();
    }
    function writeCounterValue(){
        document.getElementById("writeValue").textContent=count;
    }
        