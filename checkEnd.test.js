const funObj = require('./checkEnd')

test('check if input ends with "Script"', ()=>{
    expect(funObj.isEndsWithScriptReg('JavaScript')).toBe(true)
})

test('check if input ends with "Script"', ()=>{
    expect(funObj.isEndsWithScriptArrow('Javascript')).toBe(false)
})