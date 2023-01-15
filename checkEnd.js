function isEndsWithScriptReg(str) {
    let endStr = str.slice(-6)
    let res
    res = endStr === 'Script' ? true : false
    return res
}   

const isEndsWithScriptArrow = str => {
    let endStr = str.slice(-6)
    let res
    res = endStr === 'Script' ? true : false
    return res
} 


module.exports = {
    isEndsWithScriptReg,isEndsWithScriptArrow
}
