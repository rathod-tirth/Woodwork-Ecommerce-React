import coverPNG from '../assets/images/couch.png'
import crossSVG from '../assets/images/cross.svg'
import product1PNG from '../assets/images/product-1.png'
import product2PNG from '../assets/images/product-2.png'
import product3PNG from '../assets/images/product-3.png'
import truckSVG from '../assets/images/truck.svg'
import bagSVG from '../assets/images/bag.svg'
import supportSVG from '../assets/images/support.svg'
import returnSVG from '../assets/images/return.svg'
import whyChooseUsImgJPG from '../assets/images/why-choose-us-img.jpg'
import imgGrid1JPG from '../assets/images/img-grid-1.jpg'
import imgGrid2JPG from '../assets/images/img-grid-2.jpg'
import imgGrid3JPG from '../assets/images/img-grid-3.jpg'
import person1PNG from '../assets/images/person-1.png'
import post1JPG from '../assets/images/post-1.jpg'
import post2JPG from '../assets/images/post-2.jpg'
import post3JPG from '../assets/images/post-3.jpg'

function Home() {

   return (
      <>
         <section className='main-section'>
            {/* Start Hero Section */}
            <div className="hero">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-lg-5">
                        <div className="intro-excerpt">
                           <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                           <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.</p>
                           <p><a href="#" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                        </div>
                     </div>
                     <div className="col-lg-7">
                        <div className="hero-img-wrap">
                           <img src={coverPNG} className="img-fluid" alt='cover image' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End Hero Section */}
            {/* Start Sale Section */}
            <div className="sale-section">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-lg-5 pb-5">
                        <h2 className="section-title">Mega Sale</h2>
                        <h3 className='text-warning fw-bolder fs-2'>24h : 15m : 08s</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Rerum ratione numquam doloremque quae suscipit dolorem. Nihil praesentium
                           ipsam vel quidem cumque fugiat ducimus nam, placeat libero consectetur at
                           veritatis blanditiis.</p>
                        <p><a href="shop.html" className="btn">Get The Offer</a></p>
                     </div>
                     <div className="col">
                        <div id="saleCarousel" className="carousel slide carousel-dark w-100" data-bs-ride="carousel">
                           <div className="carousel-indicators top-100">
                              <button type="button" data-bs-target="#saleCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#saleCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#saleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                           </div>
                           <div className="carousel-inner">
                              <div className="carousel-item active">
                                 <div className='row'>
                                    <div className='col-6'>
                                       <img src={product1PNG} className="d-block w-100" />
                                    </div>
                                    <div className='col-6 d-flex align-items-center'>
                                       <div>
                                          <h4 className='product-title text-black'>Nordic Chair</h4>
                                          <span className='text-decoration-line-through' >$50.00</span>
                                          <h4 className='text-black'>$25.00 <span className='text-danger'>-50%</span></h4>
                                          <p><a href="#" className="btn btn-secondary mt-3">Add To Cart</a></p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className='row'>
                                    <div className='col-6'>
                                       <img src={product2PNG} className="d-block w-100" />
                                    </div>
                                    <div className='col-6 d-flex align-items-center'>
                                       <div>
                                          <h4 className='product-title text-black'>Kruzo Aero Chair</h4>
                                          <span className='text-decoration-line-through' >$78.00</span>
                                          <h4 className='text-black'>$39.00 <span className='text-danger'>-50%</span> </h4>
                                          <p><a href="#" className="btn btn-secondary mt-3">Add To Cart</a></p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className='row'>
                                    <div className='col-6'>
                                       <img src={product3PNG} className="d-block w-100" />
                                    </div>
                                    <div className='col-6 d-flex align-items-center'>
                                       <div>
                                          <h4 className='product-title text-black'>Ergonomic Chair</h4>
                                          <span className='text-decoration-line-through' >$43.00</span>
                                          <h4 className='text-black'>$22.50 <span className='text-danger'>-50%</span> </h4>
                                          <p><a href="#" className="btn btn-secondary mt-3">Add To Cart</a></p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End Sale Section */}
            {/* Start Product Section */}
            <div className="product-section">
               <div className="container">
                  <div className="row">
                     {/* Start Column 1 */}
                     <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                           velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                     </div>
                     {/* End Column 1 */}
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
            {/* End Product Section */}
            {/* Start Popular Section */}
            <div className="popular-section product-section">
               <div className="container">
                  <div className="row">
                     {/* Start Column 2 */}
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
                     <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
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
                     <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Popular Items</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                           velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                     </div>
                     {/* End Column 1 */}
                  </div>
               </div>
            </div>
            {/* End Popular Section */}
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                           imperdiet dolor tempor tristique.</p>
                        <div className="row my-5">
                           <div className="col-6 col-md-6">
                              <div className="feature">
                                 <div className="icon">
                                    <img src={truckSVG} alt="Image" className="imf-fluid" />
                                 </div>
                                 <h3>Fast &amp; Free Shipping</h3>
                                 <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                              </div>
                           </div>
                           <div className="col-6 col-md-6">
                              <div className="feature">
                                 <div className="icon">
                                    <img src={bagSVG} alt="Image" className="imf-fluid" />
                                 </div>
                                 <h3>Easy to Shop</h3>
                                 <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                              </div>
                           </div>
                           <div className="col-6 col-md-6">
                              <div className="feature">
                                 <div className="icon">
                                    <img src={supportSVG} alt="Image" className="imf-fluid" />
                                 </div>
                                 <h3>24/7 Support</h3>
                                 <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                              </div>
                           </div>
                           <div className="col-6 col-md-6">
                              <div className="feature">
                                 <div className="icon">
                                    <img src={returnSVG} alt="Image" className="imf-fluid" />
                                 </div>
                                 <h3>Hassle Free Returns</h3>
                                 <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="img-wrap">
                           <img src={whyChooseUsImgJPG} alt="Image" className="img-fluid" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End Why Choose Us Section */}
            {/* Start We Help Section */}
            <div className="we-help-section">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="imgs-grid">
                           <div className="grid grid-1"><img src={imgGrid1JPG} alt="Untree.co" /></div>
                           <div className="grid grid-2"><img src={imgGrid2JPG} alt="Untree.co" /></div>
                           <div className="grid grid-3"><img src={imgGrid3JPG} alt="Untree.co" /></div>
                        </div>
                     </div>
                     <div className="col-lg-5 ps-lg-5">
                        <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                           aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
                           tristique senectus et netus et malesuada</p>
                        <ul className="list-unstyled custom-list my-4">
                           <li>Donec vitae odio quis nisl dapibus malesuada</li>
                           <li>Donec vitae odio quis nisl dapibus malesuada</li>
                           <li>Donec vitae odio quis nisl dapibus malesuada</li>
                           <li>Donec vitae odio quis nisl dapibus malesuada</li>
                        </ul>
                        <p><a herf="#" className="btn">Explore</a></p>
                     </div>
                  </div>
               </div>
            </div>
            {/* End We Help Section */}
            {/* Start Testimonial Slider */}
            <div className="testimonial-section">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                     </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                     <div className="col-lg-12">
                        <div id="testimonialCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                           <div class="carousel-indicators top-100">
                              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                           </div>
                           <div className="carousel-inner">
                              <div className="carousel-item active">
                                 <div className="row justify-content-center">
                                    <div className="col-lg-8 mx-auto">
                                       <div className="testimonial-block text-center">
                                          <blockquote className="mb-5">
                                             <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
                                                dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                                                dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus
                                                et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis
                                                scelerisque.”</p>
                                          </blockquote>
                                          <div className="author-info">
                                             <div className="author-pic">
                                                <img src={person1PNG} alt="Maria Jones" className="img-fluid" />
                                             </div>
                                             <h3 className="font-weight-bold">Maria Jones</h3>
                                             <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* END item */}
                              </div>
                              <div className="carousel-item">
                                 <div className="row justify-content-center">
                                    <div className="col-lg-8 mx-auto">
                                       <div className="testimonial-block text-center">
                                          <blockquote className="mb-5">
                                             <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
                                                dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                                                dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus
                                                et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis
                                                scelerisque.”</p>
                                          </blockquote>
                                          <div className="author-info">
                                             <div className="author-pic">
                                                <img src={person1PNG} alt="Maria Jones" className="img-fluid" />
                                             </div>
                                             <h3 className="font-weight-bold">Maria Jones</h3>
                                             <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* END item */}
                              </div>
                              <div className="carousel-item">
                                 <div className="row justify-content-center">
                                    <div className="col-lg-8 mx-auto">
                                       <div className="testimonial-block text-center">
                                          <blockquote className="mb-5">
                                             <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
                                                dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                                                dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus
                                                et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis
                                                scelerisque.”</p>
                                          </blockquote>
                                          <div className="author-info">
                                             <div className="author-pic">
                                                <img src={person1PNG} alt="Maria Jones" className="img-fluid" />
                                             </div>
                                             <h3 className="font-weight-bold">Maria Jones</h3>
                                             <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* END item */}
                              </div>
                           </div>
                           <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                           </button>
                           <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End Testimonial Slider */}
            {/* Start Blog Section */}
            <div className="blog-section">
               <div className="container">
                  <div className="row mb-5">
                     <div className="col-md-6">
                        <h2 className="section-title">Recent Blog</h2>
                     </div>
                     <div className="col-md-6 text-start text-md-end">
                        <a href="#" className="more">View All Posts</a>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                           <a href="#" className="post-thumbnail"><img src={post1JPG} alt="Image" className="img-fluid" /></a>
                           <div className="post-content-entry">
                              <h3><a href="#">First Time Home Owner Ideas</a></h3>
                              <div className="meta">
                                 <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                           <a href="#" className="post-thumbnail"><img src={post2JPG} alt="Image" className="img-fluid" /></a>
                           <div className="post-content-entry">
                              <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                              <div className="meta">
                                 <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div className="post-entry">
                           <a href="#" className="post-thumbnail"><img src={post3JPG} alt="Image" className="img-fluid" /></a>
                           <div className="post-content-entry">
                              <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                              <div className="meta">
                                 <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End Blog Section */}
         </section>
      </>
   )
}
export default Home