// online algorithm; good while dealing with streaming data; they can sort the data live as it is received
function insertionSort(arr) {

    for(let i = 1; i < arr.length; i++) {
        //  start from 1 and move to the right; we assume that the first place is already sorted area if only one element;
        // loop thru and start from the first unsorted area;
        let curEl = arr [i];
        let j = i-1
        while(j >= 0 && curEl < arr[j]) {
            // iterate through the sorted area
            // start from the left of the curEl and move to the left
            
            // keep moving left while curEl is less then the j-th element
            arr[j+1] = arr[j];
            j--;

            
        }
        // insert the curEl to the position: either a position where arr[j] <= curEl; then put curEl to the next;
        // or j= -1; put curEl to j=0 position;
        arr[j+1] = curEl;

    }
}

module.exports = {
    insertionSort
};