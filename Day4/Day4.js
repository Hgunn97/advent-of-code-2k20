const fs = require('fs')

const dataset = fs.readFileSync('./dataset')
    .toString()
    .split('\n\n')

const validFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
]
let passportCorrect = 0;

function partOne(data){

    for(let i=0; i<data.length; i++){
        let passportObj = {}
        const passport = data[i].split(/\s+/)

        passport.forEach((element) => {
            const info = element.split(':')
            passportObj[info[0]] = info[1]
        })

        const allValues = validFields.every(value => passportObj.hasOwnProperty(value))
        if(allValues) passportCorrect++
    }
    console.log(passportCorrect)
}

function partTwo(data){
    let validPassport = 0

    let line = data.map(x => x.split("\n"))
    line.forEach(passport => {
        let validFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid',]
        let keyValues = passport.join(" ")
            .split(/\s+/)
            .map(x => x.split(':'))
            .filter(x => x[0] !== "cid")
        
        keyValues.forEach(value => {
            if(validFields.indexOf(value[0] !== -1)){
                if(validate(value[0], value[1])){
                    validFields = validFields.filter(x => x !== value[0])
                }
            }
        })
        if(validFields.length === 0){
            validPassport++;
        }
    })
    console.log(validPassport)
}

function validate(key, value){
    switch (key) {
        case "byr":
            if (value >= 1920 && value <= 2002) {
                return true;
            } else {
                return false;
            }
            break;

        case "iyr":
            if (value >= 2010 && value <= 2020) {
                return true;
            } else {
                return false;
            }
            break;

        case "eyr":
            if (value >= 2020 && value <= 2030) {
                return true;
            } else {
                return false;
            }
            break;

        case "hgt":
            if (value.match(/\d{2}in/)) {
                var number = parseInt(value.substring(0, 2));

                if (number >= 59 && number <= 76) {
                    return true;
                } else {
                    return false;
                }

            } else if (value.match(/\d{3}cm/)) {
                var number = parseInt(value.substring(0, 3));

                if (number >= 150 && number <= 193) {

                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }

            break;

        case "hcl":
            if (value.match(/#[0-9,a-f]{6}/)) {
                return true;
            } else {
                return false;
            }
            break;

        case "ecl":
            var eyeclrs = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

            if (eyeclrs.indexOf(value) !== -1) {
                return true;
            } else {
                return false;
            }

            break;
        case "pid":
            if (value.length === 9) {
                return true;
            } else {
                return false;
            }
            break;
    }
}

partTwo(dataset)