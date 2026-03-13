/*
Start: [5, 3, 4, 1]

i=1, current=3
  5 > 3? → khiskaao → [5, 5, 4, 1] arr[prev +1] = arr[prev]
  previous=-1, rukk jao
  arr[0] = 3 → [3, 5, 4, 1] ✅

i=2, current=4
  5 > 4? → khiskaao → [3, 5, 5, 1]
  3 > 4? → Nahi, rukk jao
  arr[1] = 4 → [3, 4, 5, 1] ✅

i=3, current=1
  5 > 1? → khiskaao → [3, 4, 5, 5]
  4 > 1? → khiskaao → [3, 4, 4, 5]
  3 > 1? → khiskaao → [3, 3, 4, 5]
  previous=-1, rukk jao
  arr[0] = 1 → [1, 3, 4, 5] ✅

Result: [1, 3, 4, 5] 🎉*/


// [4,1,5,2,3]
const insertionSort = (arr) =>{

    const n = arr.length;

    for(let i=0; i<n; i++){

        let curr = arr[i];
        let prev = i - 1;

        while(prev >= 0 && arr[prev] > curr){

            arr[prev + 1]= arr[prev];
            
            prev --;
        }

        arr[prev + 1] = curr;

    }

   return arr;
}

let arr =[4,1,5,2,3];

console.log(insertionSort(arr));