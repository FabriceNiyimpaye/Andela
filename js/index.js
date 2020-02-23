var myRandom = [];
var winNumber = [];
function getRandomInt(myRandom) {
    return Math.floor(Math.random() * 100) + 10;
  }
  

  for (i = 0; i < 20; i++){
      myRandom.push(getRandomInt());
  }

console.log(myRandom);

function winner(number){
   let numbery = number.toString().split("");
   return numbery;
   
}

for(i = 0; i < 20; i++){
    let newArray=(winner(myRandom[i]));
    let newArrayInt= newArray.map(number=>parseInt(number));
// console.log(newArrayInt);
}

function check(winNumber){

  for(i = 0; i < 20; i++){
    var squareRoot = newArrayInt[0] * newArrayInt[0] + newArrayInt[1] * newArrayInt[1] == 1;
    winNumber.push(check(newArrayInt[i][i]));
  }
}

console.log(winNumber);


