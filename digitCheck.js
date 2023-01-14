function isDigitSameReg(num) {
    num = num.toString()
    let numString = num.split('')
    let prevChar = numString[0]
    let res 
    numString.forEach(
        val => {
            res = val===prevChar ? true : false
            prevChar = val 
        }
    )
    return res
}

const isDigitSameArrow = num => {
    num = num.toString()
    let numString = num.split('')
    let prevChar = numString[0]
    let res 
    numString.forEach(
        val => {
            res = val===prevChar ? true : false
            prevChar = val 
        }
    )
    return res
}

module.exports = {
    isDigitSameReg,isDigitSameArrow
}