import { useState } from 'react'
import crossSVG from '../assets/images/cross.svg'
import product1PNG from '../assets/images/product-1.png'
import product2PNG from '../assets/images/product-2.png'
import product3PNG from '../assets/images/product-3.png'

function Shop() {
   const [isFav, setIsFav] = useState(false)

   return (
      <div className="main-section">
         <div>
            {/* Start Hero Section */}
            <div className="hero">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-lg-5">
                        <div className="intro-excerpt">
                           <h1>Shop</h1>
                        </div>
                     </div>
                     <div className="col-lg-7">
                     </div>
                  </div>
               </div>
            </div>
            {/* End Hero Section */}
            <div className="untree_co-section product-section before-footer-section">
               <div className="container">
                  <div className="row">
                     {/* Start Column 1 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <div className="product-item">
                           <img src={product3PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Nordic Chair</h3>
                           <strong className="product-price">$50.00</strong>
                           {/* <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" title='Add to Cart' />
                           </span> */}
                           <span className='product-icon'>
                              <i class="fa-solid fa-plus fa-lg"></i>

                              {isFav ? (<i class="fa-solid fa-heart fa-lg" style={{ color: '#ff5c5c', background: 'white' }} onClick={() => setIsFav(false)}></i>
                              ) : (<i class="fa-solid fa-heart fa-lg" onClick={() => setIsFav(true)}></i>)}
                           </span>
                        </div>
                     </div>
                     {/* End Column 1 */}
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product1PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Nordic Chair</h3>
                           <strong className="product-price">$50.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 2 */}
                     {/* Start Column 3 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product2PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Kruzo Aero Chair</h3>
                           <strong className="product-price">$78.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 3 */}
                     {/* Start Column 4 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product3PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Ergonomic Chair</h3>
                           <strong className="product-price">$43.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 4 */}
                     {/* Start Column 1 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product3PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Nordic Chair</h3>
                           <strong className="product-price">$50.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 1 */}
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product1PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Nordic Chair</h3>
                           <strong className="product-price">$50.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 2 */}
                     {/* Start Column 3 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product2PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Kruzo Aero Chair</h3>
                           <strong className="product-price">$78.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 3 */}
                     {/* Start Column 4 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <a className="product-item" href="#">
                           <img src={product3PNG} className="img-fluid product-thumbnail" />
                           <h3 className="product-title">Ergonomic Chair</h3>
                           <strong className="product-price">$43.00</strong>
                           <span className="icon-cross">
                              <img src={crossSVG} className="img-fluid" />
                           </span>
                        </a>
                     </div>
                     {/* End Column 4 */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Shop