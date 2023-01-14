function changeCaseReg (str) {
    let newStr = ''
    let newChar
   for(let val of str){
    
        newChar = val==val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
        newStr = newStr + newChar
    }
    return newStr
}

const changeCaseArrow = str => {
    let newStr = ''
    let newChar
   for(let val of str){
    
        newChar = val==val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
        newStr = newStr + newChar
    }
    return newStr
}

module.exports = {
    changeCaseReg,changeCaseArrow
}