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

function partTwo(input, target){
  for(let a=0; a<input.length; a++){
    for(let b=0; b<input.length; b++){
      for(let c=0; c<input.length; c++){
        if(input[a]+input[b]+input[c] === target){
          return input[a]*input[b]*input[c]
        }
      }
    }
  }
}

console.log(findAnswer(dayOne, 2020))
console.log(partTwo(dayOne, 2020))