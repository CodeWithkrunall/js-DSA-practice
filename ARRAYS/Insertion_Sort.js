[4,1,5,2,3]

for(let i=1; i<n; i++)

    let currunt = arr[i]

    let prev = i-1;


    while(prev>= 0 && arr[prev]> currunt){

        arr[prev +1 ]= arr[prev];
        prev--;
    }

    arr[prev+1]= currunt;