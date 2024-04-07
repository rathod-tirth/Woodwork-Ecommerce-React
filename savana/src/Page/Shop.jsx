import product1PNG from '../assets/images/product-1.png'
import product2PNG from '../assets/images/product-2.png'
import product3PNG from '../assets/images/product-3.png'
import ProductCard from '../Component/ProductCard'

function Shop() {

   return (
      <div className="main-section">
         <div>
            <div className="product-section">
               <div className="container">
                  {/* Start searchbar, filter, sort */}
                  <div className="row justify-content-between mb-2">
                     <div className="col-6">
                        <div className="input-group mb-3 searchbar">
                           <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                           <button className="input-group-text search-icon" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                     </div>
                     <div className="col-3">
                        <input type="button" className="form-control" placeholder="Filter" value='Filter' />
                     </div>
                     <div className="col-3">
                        <div className="input-group mb-3">
                           <label className="input-group-text" htmlFor="inputGroupSelect01">Sort</label>
                           <select className="form-select" id="inputGroupSelect01">
                              <option value={1}>Relevant</option>
                              <option value={2}>High to Low</option>
                              <option value={3}>Low to High</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  {/* End searchbar, filter, sort */}
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