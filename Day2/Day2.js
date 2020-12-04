const fs = require('fs');

const dataSet = fs.readFileSync('./dataset')
    .toString()
    .split('\n')

function partOne(data){
    let passwordsCorrect = 0
    data.map((item) => {
        let [num, char, password] = item.replace(':', '').split(' ')
        let [min, max] = num.split('-')

        let count = password.split('').filter(x => x === char).length
        
        if(count >= min && count <= max){
            passwordsCorrect++
            console.log(`There is ${count} letter ${char} in the password. This answer is correct`)
        }else{
            console.log(`There is ${count} letter ${char} in the password. WRONG`)
        }
    })
    return passwordsCorrect
}


function partTwo(data){
    let passwordsCorrect = 0
    data.map((item) => {
        let [num, char, password] = item.replace(':', '').split(' ')
        let [pos1, pos2] = num.split('-')

        const pos1Check = password.charAt(pos1 - 1) === char
        const pos2Check = password.charAt(pos2 - 1) === char
        
        if(pos1Check !== pos2Check){
            passwordsCorrect++
        }
    });
    return passwordsCorrect
}

console.log(partOne(dataSet))
console.log(partTwo(dataSet))