import { useEffect } from "react"
import { useState } from "react"

function ScrollToTop() {

   useEffect(() => {
      const handleScrollVisiblity = () => {
         window.scrollY > 300 ? setIsButton(true) : setIsButton(false)
      }

      window.addEventListener('scroll', handleScrollVisiblity)

      return () => {
         window.removeEventListener('scroll', handleScrollVisiblity)
      }
   }, [])

   const [isButton, setIsButton] = useState(false)

   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   return (
      <>
         {isButton && (
            <div className="scroll-to-top">
               <button className="btn" onClick={handleScrollToTop}><i className="fa-solid fa-chevron-up"></i></button>
            </div>
         )}
      </>
   )
}
export default ScrollToTop