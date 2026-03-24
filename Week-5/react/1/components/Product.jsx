function Product(props)  //props: {productObj:{}}///props receive a single object everytime  
{
    const {productObj}=props;//Destructuring taking the properties from prop and storent in a variable productObj
    //return react elememt
    return(<div className="bg-white shadow-lg rounded-x1 p-4">
      
      <h2 className="text-lg mb-2">
        {productObj.title}
      </h2>

      <p className="text-pink-400 text-sm mb-2">
        {productObj.category}
      </p>

      <p className="text-green-600 font-bold mb-2">
        {productObj.price}
      </p>

      <p className="text-red-600 text-sm">
         {productObj.rating.rate} ({productObj.rating.count})
      </p>

    </div>
)
}
export default Product;