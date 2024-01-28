const studentScore = 76;

if (studentScore >= 90 && studentScore <= 100) {
  console.log("A");
} else if (studentScore >= 80 && studentScore <= 89) {
  console.log("B");
} else if (studentScore >= 70 && studentScore <= 79) {
  console.log("C");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("D");
} else if (studentScore <= 59 && studentScore >= 0) {
  console.log("F");
} else {
  console.log("invalid input");
}
