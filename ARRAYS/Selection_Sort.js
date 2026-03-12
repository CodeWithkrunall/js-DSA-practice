// [64, 25, 12, 22, 11]

const selectionSort = (arr) => {
const n = arr.length;

for(let i = 0; i < n; i++){

         let minIndex= i;

         for(let j= i+1; j< n; j++){

            if(arr[j] < arr[minIndex]){

                minIndex =j;
            }
         }
         let temp = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex]= temp;
}
return arr;
}
let arr = [ 10 ,8 ,50 ,89,2, 3];

console.log(selectionSort(arr));