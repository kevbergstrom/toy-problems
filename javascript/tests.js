function compareArrays(a, b){
    if(a.length != b.length) return false
    for(let i = 0;i < a.length; i++){
        if(a[i] != b[i]) return false
    }
    return true
}

const bubbleSort = require('./bubbleSort.js')

function testBubbleSort(unsorted){
    let sorted = [...unsorted].sort((a,b) => a-b)
    bubbleSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testBubbleSort([8,2,5,1,7,4,6,9,3])
testBubbleSort([1])
testBubbleSort([])

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
testBinarySearch([1,1,5,5,7,8,9,100,200])
testBinarySearch([1])
testBinarySearch([])

const insertionSort = require('./insertionSort.js')

function testInsertionSort(unsorted){
    let sorted = [...unsorted].sort((a,b) => a-b)
    insertionSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testInsertionSort([8,2,5,1,7,4,6,9,3])
testInsertionSort([8,2,5,1,7,4,6,9,3,10])
testInsertionSort([1])
testInsertionSort([])

const mergeSort = require('./mergeSort.js')

function testMergeSort(unsorted){
    let sorted = [...unsorted].sort((a,b) => a-b)
    mergeSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testMergeSort([8,2,5,1,7,4,6,9,3])
testMergeSort([8,2,5,1,7,4,6,9,3,10])
testMergeSort([1])
testMergeSort([])

const quickSort = require('./quickSort.js')

function testQuickSort(unsorted){
    let sorted = [...unsorted].sort((a,b) => a-b)
    unsorted = quickSort(unsorted)
    console.assert(
        compareArrays(sorted, unsorted), 
        `[${arguments.callee.name}] arrays are not equal`
    )
}

testQuickSort([8,2,5,1,7,4,6,9,3])
testQuickSort([8,2,5,1,7,4,6,9,3,10])
testQuickSort([1])
testQuickSort([])

//TODO test on different sizes of arrays?