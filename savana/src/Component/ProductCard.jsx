import { useState } from "react"

function ProductCard({ data }) {
   const [isFav, setIsFav] = useState(false)

   return (
      <>
         <div className="product-item">
            <a href='#' className='text-decoration-none'>
               <img src={data.image} className="img-fluid product-thumbnail" />
               <div className='product-content d-flex justify-content-center'>
                  <div className='product-wrapper w-75'>
                     <h4 className="text-black">{data.name}</h4>
                     <p>
                        {[...Array(data.rating)].map((_, index) => (
                           <i key={index} className="fa-solid fa-star"></i>
                        ))}
                        {[...Array(5 - data.rating)].map((_, index) => (
                           <i key={index} className="fa-regular fa-star"></i>
                        ))}
                     </p>
                     <span className="text-decoration-line-through">${data.price}</span>
                     <h5 className='text-black'>${data.price * data.discount / 100} <span className='text-danger'>-{data.discount}%</span></h5>
                  </div>
               </div>
            </a>
            <span className='product-icon'>
               <i className="fa-solid fa-plus fa-lg"></i>
               <i className={`fa-heart fa-lg ${isFav ? 'fa-solid' : 'fa-regular'}`}
                  style={{ color: isFav ? '#ff5c5c' : '' }} onClick={() => { setIsFav(!isFav) }}></i>
            </span>
         </div>
      </>
   )
}
export default ProductCard