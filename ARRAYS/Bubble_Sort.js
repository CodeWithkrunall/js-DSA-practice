


const bubbleSort = (arr) => {
    const n = arr.length;

    for(i=0; i<n; i++){
        for(j=0; j < n-i-1; j++){

            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
                // let temp = arr[j];
                // arr[j]= arr[j+1];
                // arr[j+1]= temp;
           }
           }
        }
        return arr;

    }
    
console.log(bubbleSort([ 20, 40,10, 9,2 ]));