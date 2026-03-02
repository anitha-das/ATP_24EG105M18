function findBig(a,b,c)
{
    if(a>b)
{
    if(c>a)
        return c;
    else
        return a;
}
else
{
    if(c>b)
    return c;
    else
    return b;

}
}
let res=findBig(10,20,30);
console.log(res);