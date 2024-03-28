import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import SharedLayout from "./Page/SharedLayout"
import Shop from "./Page/Shop"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
