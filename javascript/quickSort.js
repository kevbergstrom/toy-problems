function quickSort(array){
    // base case
    if(array.length <= 1) return array
    // determine the pivot
    let pivot = array[array.length-1]
    // split into two arrays
    let smaller = []
    let larger = []
    for(let i = 0;i<array.length-1;i++){
        if(array[i] <= pivot){
            smaller.push(array[i])
        }else{
            larger.push(array[i])
        }
    }
    // recursively sort the two arrays
    smaller = quickSort(smaller)
    larger = quickSort(larger)
    // combine the two arrays including the pivot
    let newArray = []
    for(let x = 0;x<smaller.length;x++){
        newArray.push(smaller[x])
    }
    newArray.push(pivot)
    for(let y = 0;y<larger.length;y++){
        newArray.push(larger[y])
    }

    return newArray
}

module.exports = quickSort