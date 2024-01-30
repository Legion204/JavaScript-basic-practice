// give me the some of numbers from 1 to 20 that are divisible by 3
let total = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    total = total + i;
    console.log('total', total)
  }
}
console.log("total of the numbers", total);
