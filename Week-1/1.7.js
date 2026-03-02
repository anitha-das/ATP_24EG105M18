function searchElement(arr,search)
{
    let i;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==search)
        {
            return i;
        }
    }
    if(i==arr.length)
        return "Not found";
}
let res=searchElement([10,20,30],50);
console.log(res);