const funObj= require('./largestEvenNumber')


test('return the largest even number',()=>{
    expect(funObj.isLargestEvenReg([1,2])).toBe(2)
})

test('return the largest even number',()=>{
    expect(funObj.isLargestEvenArrow([1])).toBe(-1)
})