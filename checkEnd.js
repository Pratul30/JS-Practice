function isEndScriptReg(str) {
    let endStr = str.slice(-6)
    let res
    res = endStr === 'Script' ? true : false
    return res
}   

const isEndScriptArrow = str => {
    let endStr = str.slice(-6)
    let res
    res = endStr === 'Script' ? true : false
    return res
} 

console.log(isEndScriptArrow('Javascript'))

module.exports = {
    isEndScriptReg,isEndScriptArrow
}