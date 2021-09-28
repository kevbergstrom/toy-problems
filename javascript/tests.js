function compareArrays(a, b){
    if(a.length != b.length) return false
    for(let i = 0;i < a.length; i++){
        if(a[i] != b[i]) return false
    }
    return true
}

const bubbleSort = require('./bubbleSort.js')

function testBubbleSort(unsorted){
    let sorted = [...unsorted].sort()
    bubbleSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testBubbleSort([8,2,5,1,7,4,6,9,3])

const binarySearch = require('./binarySearch.js')

function testBinarySearch(sorted){
    for(let i = 0; i < 100; i++){
        let found = sorted.includes(i)
        let foundIndex = binarySearch(sorted, i)
        if(found){
            console.assert(
                sorted[foundIndex] == i, 
                `[${arguments.callee.name}] Coudln't find ${i}`
            )
        }else{
            console.assert(
                foundIndex == -1, 
                `[${arguments.callee.name}] Found index ${foundIndex} for nonexistent value ${i}`
            )
        }
    }
}

testBinarySearch([1,1,5,5,7,8,9,100])

