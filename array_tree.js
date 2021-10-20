function cut_down_min_trees(arr){
    let n = arr.Length;
    let even = 0;
    let odd = 0;
    let new_arr = [];
    for(let i=0;i<n;i++)
    {
        new_arr[i] = arr[i];
    }
    for(let i=0;i<n;i++)
    {
        if(i+1<n)
        {
            if(i%2==0)  //checking for even position only
            {
                if(arr[i]<=arr[i+1])
                {
                    let diff = arr[i+1]-arr[i];
                    even += diff+1;
                    arr[i+1] = arr[i+1] - (diff+1);
                }
            }
            else
            {
                if(arr[i]>=arr[i+1])
                {
                    let diff = arr[i]-arr[i+1];
                    even += diff+1;
                    arr[i] = arr[i] - (diff+1);
                }
            }
        }
    }
    return arr
}


let arr = [10,20,30,31]
console.log(cut_down_min_trees(arr))
