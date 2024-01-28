let myScore = 88;
let friendScore = 66;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("go for a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("message unseen");
  } else if (friendScore < 40) {
    console.log("block friend");
  }
} else {
  console.log("go home and cry");
}
