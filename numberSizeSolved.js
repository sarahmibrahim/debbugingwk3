let num1 = prompt("enter a number"); // missing ) added after number"
let num2 = prompt("Enter another number"); // missing " added before enter
if (num1 > num2) { // nums corrected to num2
    let msg = num1 + " is bigger than " + num2;
    alert (msg)
} else if (num1 < num2) {
    let msg = num1 + " is smaller than " + num2;
    alert(msg)
} else {    
    let msg = num1 + " is the same as " + num2; // additional condition added for equal number
    alert(msg)
}
