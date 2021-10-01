function heapSort(array){
    // create a max heap from array
    let heap = []
    for(let i = 0;i<array.length;i++){
        heapInsert(heap, array[i])
    }
    // remove max from heap one at a time
    for(let j = 0;j<array.length;j++){
        array[array.length-j-1] = heapPop(heap)
    }
}

function heapInsert(array, n){
    array.push(n)
    heapifyUp(array, array.length-1)
}

function heapifyUp(array, i){

    let parent = Math.round((i-2)/2)

    if(parent < 0) return

    if(array[parent] < array[i]){
        let hold = array[parent]
        array[parent] = array[i]
        array[i] = hold

        heapifyUp(array, parent)
    }
}

function heapPop(array){
    if(array.length < 1) return
    let top = array[0]
    array[0] = array.pop()
    heapifyDown(array, 0)
    return top
}

function heapifyDown(array, i){
    let left = (i*2) + 1
    let right = (i*2) + 2

    if(left >= array.length) return
    if(array[left] > array[i]){
        let hold = array[left]
        array[left] = array[i]
        array[i] = hold
        heapifyDown(array, left)
    }

    if(right >= array.length) return
    if(array[right] > array[i]){
        let hold = array[right]
        array[right] = array[i]
        array[i] = hold
        heapifyDown(array, right)
    }
}

module.exports = heapSort