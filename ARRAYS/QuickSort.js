
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
