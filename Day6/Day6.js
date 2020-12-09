const fs = require('fs')

const dataset = fs.readFileSync('./dataset')
    .toString()
    .split('\n\n')

function partOne(data){
    let count = 0
    for(const group of data){
        let currentG = group.replace(/[^a-z]/g, "")
        currentCount = new Set(currentG).size;
        console.log(currentCount)
        count += currentCount
    }
    console.log(count)
}

function partTwo(data){
    let count = 0
    for (const group of data){
        let responses = group.split("\n")
        let answered = new Set(group.replace(/[^a-z]/g, ""))
        let inCommon = Array.from(answered).filter((a) =>
        responses.every((resp) => resp.includes(a))
        )
        console.log(inCommon)
        count += inCommon.length
    }
    console.log(count)
}

//partOne(dataset)
partTwo(dataset)