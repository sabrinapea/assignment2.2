/* esline-env browser */
let x = parseInt(prompt('Enter a number'),10);
let y = parseInt(prompt('Enter another number'),10);
if (x == y) {
    window.document.write("Both numbers are the same.");   
} else if (x > y) {
    window.document.write(x , " is the larger number.");
} else  {
    window.document.write(y , " is the larger number.");
} 