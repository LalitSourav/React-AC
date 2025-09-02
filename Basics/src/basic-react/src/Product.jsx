import './Product.css' 
import Price from './Price'

function Product({title,description,idx})  {
  let oldPrices= ["10","20","30","40"];
  let newPrices= ["15","25","35","45"];
  

  return (
    <div className='product'>
      <h1>{title}</h1>
      <p>{description}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
    </div>
  )
}

export default Product
