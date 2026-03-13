

/*## Sirf `for j` pe focus! 🎯

---

**`i` ka kaam** = kitne pass hue (bahar wala loop)

**`j` ka kaam** = andar jao aur **ek ek pair compare karo** (andar wala loop)

---

## Visually dekho:

```
[20, 40, 10, 9, 2]
  ↑   ↑
  j  j+1   → compare karo, swap karo
  
[20, 40, 10, 9, 2]
      ↑   ↑
      j  j+1  → compare karo, swap karo

[20, 40, 10, 9, 2]
          ↑  ↑
          j  j+1  → compare karo, swap karo
```

> **`j` ek ek kadam aage badhta hai aur apne agle se compare karta hai!**

---

## `arr.length - i - 1` kyun?

```
Pass 1 ke baad → 40 end mein fix ✅ (use dobara mat dekho)
Pass 2 ke baad → 20 fix ✅
Pass 3 ke baad → 10 fix ✅
```

> **Jo already fix ho gaya usse dobara compare karne ki zaroorat nahi!**

```
i=0 → j 0 se 3 tak chalega
i=1 → j 0 se 2 tak chalega
i=2 → j 0 se 1 tak chalega
        ↑
    fixed wale skip ho gaye!
```

---

## Ek line mein:
> **`j` = andar wala aadmi jo pair pair compare karta hai, aur `i` badhnے se fixed elements skip hote hain!** 🎯

Clear hua? 😊*/



/*## `-1` kyun? 🎯

---

Socho `j` aur `j+1` **pair** hai:

```
[20, 40, 10, 9, 2]
  0   1   2  3  4   ← indexes
```

Agar `j` last index `4` pe pahunch gaya toh:

```
arr[j]   = arr[4] = 2   ✅
arr[j+1] = arr[5] = ❌ EXIST HI NAHI!
```

**Array ke bahar chale jaoge!** 💥

---

## Isliye `-1` kiya:

```
length = 5
j < 5 - 1
j < 4
j last 3 tak jayega (index 3)
```

```
arr[j]   = arr[3] = 9  ✅
arr[j+1] = arr[4] = 2  ✅
```

**Dono exist karte hain!** ✅

---

## Ek line mein:
> **`-1` isliye taaki `j+1` array ke bahar na jaaye!** 🛑

Clear? 😊 */


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