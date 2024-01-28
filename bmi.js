var weight = 79;
var height = 2;
var bmi= weight / (height * height);

if (bmi < 18.5) {
    console.log('You are underweight')
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('you are normal')
}

else if (bmi >= 25 && bmi <= 29.9) {
    console.log('you are overweight')
}

else {
    console.log('you are obese')
}

