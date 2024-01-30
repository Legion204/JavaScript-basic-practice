//with for()
//Subtask-1:
let sum1 = 0;
for (let i1 = 91; i1 <= 192; i1++) {
  if (i1 % 2 !== 0) {
    sum1 = sum1 + i1;
    console.log('sum of all the odd numbers from 91 to 1.',sum1);
  }
}

//Subtask-2:
let sum2 = 0;
for (let i2 = 51; i2 <= 85; i2++) {
  if (i2 % 2 === 0) {
    sum2 = sum2 + i2;
    console.log('sum of all the even numbers from 51 to 85',sum2);
  }
}

//with while

//Subtask-1:
let n1 = 81;
let sum3 = 0;
while (n1 <= 131) {
  if (n1 % 2 !== 0) {
    sum3 = sum3 + n1;
    console.log('sum of all the odd numbers from 81 to 131.',sum3);
  }
  n1++;
}


//Subtask-2:
let n2 = 206;
let sum4 = 0;
while (n2 <= 311) {
  if (n2 % 2 === 0) {
    sum4 = sum4 + n2;
    console.log('sum of all the even numbers from 206 to 311',sum4);
  }
  n2++;
}
