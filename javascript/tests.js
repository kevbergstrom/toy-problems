const bubbleSort = require('./bubbleSort.js')

function compareArrays(a, b){
    if(a.length != b.length) return false
    for(let i = 0;i < a.length; i++){
        if(a[i] != b[i]) return false
    }
    return true
}

function testBubbleSort(unsorted){
    let sorted = [...unsorted].sort()
    bubbleSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testBubbleSort([8,2,5,1,7,4,6,9,3])

