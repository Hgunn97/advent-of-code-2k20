const fs = require('fs')

const dataset = fs.readFileSync('./testData')
    .toString()
    .split('\n')

    let total = 0

    let seatId = []

function partOne(data){
    data.map(x => {
        const items = x.trim().split('')
        
        let lowRow = 0
        let highRow = 127
        let lowColumn = 0
        let highColumn = 7
        let finalRow = 0
        let finalColumn = 0

        items.forEach(char => {
            const rowsLeft = highRow - lowRow
            const columnsLeft = highColumn - lowColumn
            const rowHalf = rowsLeft / 2
            const columnHalf = columnsLeft / 2

            switch(char){
                case 'F':
                    if(rowsLeft === 1) finalRow = lowRow
                    highRow = Math.floor(highRow - rowHalf)
                    break;
                case 'B':
                    if(rowsLeft === 1) finalRow = highRow
                    lowRow = Math.ceil(highRow - rowHalf)
                    break;
                case 'L':
                    if(columnsLeft === 1) finalColumn = lowColumn
                    highColumn = Math.floor(highColumn - columnHalf)
                    break;
                case 'R':
                    if(columnsLeft === 1) finalColumn = highColumn
                    lowColumn = Math.ceil(highColumn - columnHalf)
                    break;
                default:
                    break;
            }
        })
        total = (finalRow * 8) + finalColumn
        seatId.push(total)
    })
    console.log(seatId)
    console.log(Math.max(...seatId))
}


partOne(dataset)