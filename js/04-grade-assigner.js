/* esline-env browser */

let a = parseInt(prompt('Enter a number between 1 and 100'));
if (a > 1 && a <= 100) {
    if (a >= 90 && a <=100) {    
        console.log('You received an A');
    } else if (a >= 80 && a < 90) {
        console.log('You received a B');
    } else if (a >= 70 && a < 80) {
        console.log('You received a C');
    } else if (a >= 60 && a < 70) {
        console.log('You received a D');
    } else if (a < 60) {
        console.log('You received an F');
    } 
} else { 
        console.log('Only numbers between 1 and 100 are accepted.');
}