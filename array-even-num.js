const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNum =[];
for(const num of numbers){
    if(num%2==0){
        evenNum.push(num)
    }
}
console.log(evenNum)