# js-DSA-practice notes

##QuickSort


1. Base case     → length <= 1? return kar
2. Pivot         → last element
3. Dono arrays   → left = [], right = []
4. Loop          → chhota = left, bada = right (pivot skip)
5. Return        → [...left sort, pivot, ...right sort]


## step:1
Jab bhi quickSort likhna ho — pehle sirf yeh likho.
Ek function jo arr leta hai. Bas itna yaad rakho shuru mein.

                    function quickSort(arr){
                        // yha sb kuch hoga
                    }

## step:2 

if(arr.length<=1){
return arr;
}

Base case — ruk jaane ki condition:
Recursion mein ruk jaane ki jagah hamesha pehle likhte hain.

Socho — agar array mein sirf 1 ya 0 cheez hai, toh sort kya karein? Already sorted hai!
Isliye seedha return kar do.

✏️ Yaad karo: "Ek ya zero = kuch kaam nahi, wapas bhejo"
arr.length <= 1 → return arr


## step:3 
Pivot — ek element chuno jo reference banega

     let pivot = arr[arr.length - 1];
 
 Pivot = woh element jiske around baaki sab ko sort karenge.

Hum last element ko pivot banate hain — kyunki easy hai access karna.

arr = [8, 3, 1, 7, 0, 10, 2]
arr[arr.length - 1] = arr[6] = 2
✏️ Yaad karo: "Last wala pivot" → arr[arr.length - 1]

 
 ## step:4

Do khaali arrays — left aur right

let left = [];
let right = [];

Pivot se chhote kahan jayenge? left mein.
Pivot se bade kahan jayenge? right mein.

Abhi dono khaale hain — loop ke baad bharenge.

Ye sirf do dabba hain — chhota wala aur bada wala.
✏️ Yaad karo: left = chhote, right = bade. Do lines, do khaali arrays.

## step:5


Loop — har element pivot se compare karo

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivot) {
    left.push(arr[i]);  // chhota → left
  } else {
    right.push(arr[i]); // bada → right
  }
}


Loop 0 se arr.length - 1 tak — matlab pivot ko skip karo (-1 isliye).

Har element ke liye ek sawaal:
→ arr[i] < pivot? → left mein daalo
→ Nahi? → right mein daalo

[8,3,1,7,0,10] ke liye pivot=2:
1,0 → left  |  8,3,7,10 → right
✏️ Yaad karo: "i < arr.length - 1" — last wala (pivot) skip karo loop mein


## step: 6


Return — dono sides sort karke jodo


return [...quickSort(left), pivot, ...quickSort(right)];


Yeh poori magic hai!

quickSort(left) → left ko sort karo (same function, chhote array pe)
pivot → beech mein fixed
quickSort(right) → right ko sort karo

... (spread) matlab: array ke andar se nikaal ke line mein rakh do.

Result: [0,1] + 2 + [3,7,8,10] = [0,1,2,3,7,8,10]
✏️ Yaad karo: "left sort + pivot + right sort" — teenon spread karke return



## step:8

function quickSort(arr) {
  // 1. base case
  if (arr.length <= 1) return arr;
  // 2. pivot = last element
  let pivot = arr[arr.length - 1];
  // 3. do khaale arrays
  let left = [], right = [];
  // 4. loop — pivot skip karo
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  // 5. jodo — left + pivot + right
  return [...quickSort(left), pivot, ...quickSort(right)];
}
