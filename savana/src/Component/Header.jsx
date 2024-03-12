import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
   return (
      <>
         {/* Start Header/Navigation */}
         <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
            <div className="container">
               <a className="navbar-brand" href="/">Savana<span>.in</span></a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarsFurni">
                  <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                     <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                     </li>
                     <li><a className="nav-link" href="shop.html">Shop</a></li>
                     <li><a className="nav-link" href="about.html">About us</a></li>
                     <li><a className="nav-link" href="services.html">Services</a></li>
                     <li><a className="nav-link" href="blog.html">Blog</a></li>
                     <li><a className="nav-link" href="contact.html">Contact us</a></li>
                  </ul>
                  <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                     <li><a className="nav-link" href="#">
                        <FontAwesomeIcon icon={faUser} size='lg' style={{ color: "#f9bf29", }} className='icon-hover' />
                     </a></li>
                     <li><a className="nav-link" href="cart.html">
                        <FontAwesomeIcon icon={faCartShopping} size='lg' style={{ color: "#f9bf29", }} className='icon-hover' />
                     </a></li>
                  </ul>
               </div>
            </div>
         </nav>
         {/* End Header/Navigation */}
      </>
   )
}
export default Header