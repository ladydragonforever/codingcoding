function swap(array, idx1, idx2) {

    let temp = array[idx1];
    array[idx1] = array[idx2]
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i=0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                // swap(array, array[i], array[i+1]);
                [array[i], array[i+1]] = [array[i+1], array[i]]
                sorted = false;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};