const fs = require('fs');

const dayOne = fs.readFileSync('./dataset')
  .toString()
  .split('\n')
  .map(Number)

function findAnswer(input, target){
  for(let i=0; i<input.length; i++){
    for(let x=i; x<input.length; x++){
      if(input[i] + input[x] === target){
        return input[i]*input[x]
      }
    }
  }
}

console.log(findAnswer(dayOne, 2020))