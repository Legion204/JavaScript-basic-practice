let ticketPrice = 800 ;
let age = 40;
const student = true;

if (age < 10) {
    console.log("free");
}
else if (student) {
    let discount = ticketPrice * 50 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    let discount = ticketPrice * 15 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else {
    console.log(ticketPrice)
}