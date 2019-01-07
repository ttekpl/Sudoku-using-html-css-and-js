 let isNumbersDuplicate = false;
 let inputsValues = [];
 let isNumbersOnly = true;


 function validate() {
     isNumbersDuplicate = false;
     isNumbersOnly = true;
     inputsValues = [];
     const inputsArray = document.querySelectorAll('input');


     inputsArray.forEach(function (input, index) {
         inputsValues[index] = input.value;
     })



     inputsValues.forEach(function (value, index) {

         if (((isNaN(value * 1) == true) || (value == "")) || (value == " ")) {

             isNumbersOnly = false;
         }
     });


     if (isNumbersOnly == false) {
         window.alert(
             "You entered invalid type of values or didn't fill evey gap!"
         );
         return;
     }

     function checkY() {
         const isDuplicate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
         let whichColumn = 0;



         for (let i = 0; i < 10; i++) {
             for (let j = 0; j < 10; j++) {
                 switch (inputsValues[j + whichColumn]) {
                     case "0":
                         isDuplicate[0]++;
                         break;

                     case "1":
                         isDuplicate[1]++;
                         break;
                     case "2":
                         isDuplicate[2]++;
                         break;
                     case "3":
                         isDuplicate[3]++;
                         break;
                     case "4":
                         isDuplicate[4]++;
                         break;
                     case "5":
                         isDuplicate[5]++;
                         break;
                     case "6":
                         isDuplicate[6]++;
                         break;
                     case "7":
                         isDuplicate[7]++;
                         break;
                     case "8":
                         isDuplicate[8]++;
                         break;
                     case "9":
                         isDuplicate[9]++;
                         break;


                 }

             }
             for (const is of isDuplicate) {

                 if (is > 1) {

                     window.alert(
                         "Numbers are repeating");
                     isNumbersDuplicate = true;
                     return;
                 }


             }
             for (let i = 0; i < 10; i++) {
                 isDuplicate[i] = 0;
             }

             whichColumn += 10;



         }



     }




     function checkX() {
         console.log("weszło");
         const isDuplicate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



         for (let i = 0; i < 10; i++) {
             for (let j = 0; j < 10; j++) {
                 console.log("weszło 2 a index to ");
                 console.log(j * 10 + i);
                 switch (inputsValues[j * 10 + i]) {
                     case "0":
                         isDuplicate[0]++;
                         break;

                     case "1":
                         isDuplicate[1]++;
                         break;
                     case "2":
                         isDuplicate[2]++;
                         break;
                     case "3":
                         isDuplicate[3]++;
                         break;
                     case "4":
                         isDuplicate[4]++;
                         break;
                     case "5":
                         isDuplicate[5]++;
                         break;
                     case "6":
                         isDuplicate[6]++;
                         break;
                     case "7":
                         isDuplicate[7]++;
                         break;
                     case "8":
                         isDuplicate[8]++;
                         break;
                     case "9":
                         isDuplicate[9]++;
                         break;


                 }

             }
             for (const is of isDuplicate) {

                 if (is > 1) {

                     window.alert(
                         "Numbers are repeating X");
                     isNumbersDuplicate = true;
                     return;
                 }


             }
             for (let i = 0; i < 10; i++) {
                 isDuplicate[i] = 0;
             }





         }



     }

     checkY();
     if (isNumbersDuplicate) return;
     checkX();
     if (isNumbersDuplicate) return;

 }