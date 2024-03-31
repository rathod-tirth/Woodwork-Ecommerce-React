import crossSVG from '../assets/images/cross.svg'
import product1PNG from '../assets/images/product-1.png'
import product2PNG from '../assets/images/product-2.png'
import product3PNG from '../assets/images/product-3.png'
import ProductCard from '../Component/ProductCard'

function Shop() {

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
                        <ProductCard data={{ image: product1PNG, name: 'Nordic Chair', rating: 4, price: '50.00', discount: '50' }} />
                     </div>
                     {/* End Column 1 */}
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product1PNG, name: 'Nordic Chair', rating: 4, price: '50.00', discount: '50' }} />
                     </div>
                     {/* End Column 2 */}
                     {/* Start Column 3 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product2PNG, name: 'Kruzo Aero Chair', rating: 5, price: '78.00', discount: '50' }} />
                     </div>
                     {/* End Column 3 */}
                     {/* Start Column 4 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product3PNG, name: 'Ergonomic Chair', rating: 5, price: '43.00', discount: '50' }} />
                     </div>
                     {/* End Column 4 */}
                     {/* Start Column 1 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product3PNG, name: 'Nordic Chair', rating: 4, price: '50.00', discount: '50' }} />
                     </div>
                     {/* End Column 1 */}
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product1PNG, name: 'Nordic Chair', rating: 4, price: '50.00', discount: '50' }} />
                     </div>
                     {/* End Column 2 */}
                     {/* Start Column 3 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product2PNG, name: 'Kruzo Aero Chair', rating: 5, price: '78.00', discount: '50' }} />
                     </div>
                     {/* End Column 3 */}
                     {/* Start Column 4 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5">
                        <ProductCard data={{ image: product3PNG, name: 'Ergonomic Chair', rating: 5, price: '43.00', discount: '50' }} />
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