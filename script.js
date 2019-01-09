 let isNumbersDuplicate = false;
 let inputsValues = [];
 let isNumbersOnly = true;


 function validate() {
     isNumbersDuplicate = false;
     isNumbersOnly = true;
     inputsValues = [];
     const inputsArray = document.querySelectorAll('input');
     const first = document.querySelectorAll(".first");
     const second = document.querySelectorAll(".second");
     const third = document.querySelectorAll(".third");
     const fourth = document.querySelectorAll(".fourth");
     const fifth = document.querySelectorAll(".fifth");
     const sixth = document.querySelectorAll(".sixth");
     const seventh = document.querySelectorAll(".seventh");
     const eigth = document.querySelectorAll(".eigth");
     const nineth = document.querySelectorAll(".nineth");


     inputsArray.forEach(function (input, index) {
         inputsValues[index] = input.value;
     })



     inputsValues.forEach(function (value, index) {

         if (((isNaN(value * 1) == true) || (value == "")) || (value == " ") || (value == "0")) {

             isNumbersOnly = false;
         }
     });


     if (isNumbersOnly == false) {
         window.alert(
             "You entered invalid type of values or didn't fill evey gap!"
         );
         return;
     }

     const firsta = first.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;

     });
     console.log(firsta);

     const seconda = second.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const thirda = third.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });

     const fourtha = fourth.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const fiftha = fifth.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const sixtha = sixth.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const seventha = seventh.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const eigtha = eigth.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });
     const ninetha = nineth.forEach(function (input, index) {
         let a = [];
         a[index] = input.value;
         return a;
     });

     function checkY() {
         const isDuplicate = [0, 0, 0, 0, 0, 0, 0, 0, 0, ];
         let whichColumn = 0;



         for (let i = 0; i < 9; i++) {
             for (let j = 0; j < 9; j++) {
                 switch (inputsValues[j + whichColumn]) {

                     case "1":
                         isDuplicate[0]++;
                         break;
                     case "2":
                         isDuplicate[1]++;
                         break;
                     case "3":
                         isDuplicate[2]++;
                         break;
                     case "4":
                         isDuplicate[3]++;
                         break;
                     case "5":
                         isDuplicate[4]++;
                         break;
                     case "6":
                         isDuplicate[5]++;
                         break;
                     case "7":
                         isDuplicate[6]++;
                         break;
                     case "8":
                         isDuplicate[7]++;
                         break;
                     case "9":
                         isDuplicate[8]++;
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
             for (let i = 0; i < 9; i++) {
                 isDuplicate[i] = 0;
             }

             whichColumn += 10;



         }



     }

     function checkX() {
         console.log("weszło");
         const isDuplicate = [0, 0, 0, 0, 0, 0, 0, 0, 0];



         for (let i = 0; i < 9; i++) {
             for (let j = 0; j < 9; j++) {
                 console.log("weszło 2 a index to ");
                 console.log(j * 9 + i);
                 switch (inputsValues[j * 9 + i]) {

                     case "1":
                         isDuplicate[0]++;
                         break;
                     case "2":
                         isDuplicate[1]++;
                         break;
                     case "3":
                         isDuplicate[2]++;
                         break;
                     case "4":
                         isDuplicate[3]++;
                         break;
                     case "5":
                         isDuplicate[4]++;
                         break;
                     case "6":
                         isDuplicate[5]++;
                         break;
                     case "7":
                         isDuplicate[6]++;
                         break;
                     case "8":
                         isDuplicate[7]++;
                         break;
                     case "9":
                         isDuplicate[8]++;
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
             for (let i = 0; i < 9; i++) {
                 isDuplicate[i] = 0;
             }


         }

     }



     function squareOneCheck(str) {
         console.log("weszło");
         const isDuplicate = [0, 0, 0, 0, 0, 0, 0, 0, 0];


         str.forEach((f) => {
             switch (f) {
                 case "1":
                     isDuplicate[0]++;
                     break;
                 case "2":
                     isDuplicate[1]++;
                     break;
                 case "3":
                     isDuplicate[2]++;
                     break;
                 case "4":
                     isDuplicate[3]++;
                     break;
                 case "5":
                     isDuplicate[4]++;
                     break;
                 case "6":
                     isDuplicate[5]++;
                     break;
                 case "7":
                     isDuplicate[6]++;
                     break;
                 case "8":
                     isDuplicate[7]++;
                     break;
                 case "9":
                     isDuplicate[8]++;
                     break;
             }


         })


         for (const is of isDuplicate) {
             console.log(is);
             if (is > 1) {

                 window.alert(
                     "Numbers are repeating square");
                 isNumbersDuplicate = true;
                 return;
             }


         }
     }

     function checkSquare() {
         squareOneCheck(firsta);
         squareOneCheck(seconda);
         squareOneCheck(thirda);
         squareOneCheck(fourtha);
         squareOneCheck(fiftha);
         squareOneCheck(sixtha);
         squareOneCheck(seventha);
         squareOneCheck(eigtha);
         squareOneCheck(ninetha);


     }
     checkSquare();
     if (isNumbersDuplicate) return;
     checkY();
     if (isNumbersDuplicate) return;
     checkX();
     if (isNumbersDuplicate) return;

 }