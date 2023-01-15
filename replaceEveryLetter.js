function replaceFollowingReg (str) {
    let newStr = ''
    let charCode
    for(let it in str){
        charCode = str.charCodeAt(it) + 1
        newStr = newStr + String.fromCharCode(charCode)
    }
    return newStr
}

const replaceFollowingArrow = str => {
    let newStr = ''
    let charCode
    for(let it in str){
        charCode = str.charCodeAt(it) + 1
        newStr = newStr + String.fromCharCode(charCode)
    }
    return newStr
}

module.exports = {
    replaceFollowingReg,replaceFollowingArrow
}
