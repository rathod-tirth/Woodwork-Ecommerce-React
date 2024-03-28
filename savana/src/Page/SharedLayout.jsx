import { Outlet } from "react-router-dom"
import Footer from "../Component/Footer"
import Header from "../Component/Header"

function SharedLayout() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}
export default SharedLayout