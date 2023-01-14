const funObj = require('./longestElement')

test('return longest element',()=>{
    expect(funObj.longestElementReg(["we", "love", "code", "academy"])).toBe("academy")
})

test('return longest element',()=>{
    expect(funObj.longestElementArrow(["Hi", "My name", "is", "Pratul"])).toBe("My name")
})