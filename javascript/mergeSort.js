function mergeSort(array){
    mergeSortAux(array, 0, array.length-1)
}

function mergeSortAux(array, left, right){
    if(left >= right) return
    let middle = Math.floor((left + right)/2)
    mergeSortAux(array, left, middle)
    mergeSortAux(array, middle+1, right)
    merge(array, left, middle, right)
}

function merge(array, left, middle, right){
    let sorted = []
    let i = left;
    let j = middle+1;

    while(i <= middle && j <= right){
        if(array[i] <= array[j]){
            sorted.push(array[i])
            i++
        }else{
            sorted.push(array[j])
            j++
        }
    }

    while(i <= middle){
        sorted.push(array[i])
        i++
    }

    while(j <= right){
        sorted.push(array[j])
        j++
    }
    // overwrite the sorted parts of the array
    for(let x = 0;x<sorted.length;x++){
        array[left + x] = sorted[x]
    }
}

module.exports = mergeSort