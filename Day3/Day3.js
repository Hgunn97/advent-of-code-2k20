const fs = require('fs');

const dataSet = fs.readFileSync('./dataset')
    .toString()
    .split('\n')

function partOne(data){
    let right = 3
    let positionX = 0
    let treeCount = 0

    data.forEach((line) => {
        if(line[positionX] === '#'){
            treeCount ++
        }
        positionX += right

        if(positionX / 31 >= 1){
            positionX %= 31
        }
    })
    return treeCount
}

function partTwo(data, right, down){
    let treeCount = 0
    let positionX = 0
    let lineNo = 0

    data.forEach((line) => {
        let checkLine = lineNo % down === 0
        if(checkLine && line[positionX] === '#') treeCount++
        positionX += checkLine ? right : 0

        if(positionX / 31 >= 1){
            positionX %= 31
        }
        lineNo++
    })
    return treeCount
}

function multiply(){
    let route1 = partTwo(dataSet, 1,1)
    let route2 = partTwo(dataSet, 3,1)
    let route3 = partTwo(dataSet, 5,1)
    let route4 = partTwo(dataSet, 7,1)
    let route5 = partTwo(dataSet, 1,2)

    console.log([route1, route2, route3, route4, route5])
    let answer = route1*route2*route3*route4*route5
    return answer
}

console.log(partOne(dataSet))
console.log(multiply())