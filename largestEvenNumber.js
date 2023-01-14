function isLargestEvenReg(arr) {
    let evenNum = -1
    console.log(evenNum)
    arr.forEach(val=>{
        evenNum = val%2 === 0 && evenNum<val ? val : evenNum
    })
    return evenNum
}



const isLargestEvenArrow = arr => {
    let evenNum = -1
    console.log(evenNum)
    arr.forEach(val=>{
        evenNum = val%2 === 0 && evenNum<val ? val : evenNum
    })
    return evenNum
}

module.exports = {isLargestEvenReg , isLargestEvenArrow}