const funObj = require('./checkEnd')

test('check if input ends with "Script"', ()=>{
    expect(funObj.isEndScriptReg('JavaScript')).toBe(true)
})

test('check if input ends with "Script"', ()=>{
    expect(funObj.isEndScriptArrow('Javascript')).toBe(false)
})