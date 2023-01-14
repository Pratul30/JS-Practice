const funObj= require('./largestEvenNumber')


test('return the largest even number',()=>{
    expect(funObj.isLargestEvenReg([3,4,42,2,23])).toBe(42)
})

test('return the largest even number',()=>{
    expect(funObj.isLargestEvenArrow([1])).toBe(-1)
})