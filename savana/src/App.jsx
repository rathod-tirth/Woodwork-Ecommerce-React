import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import SharedLayout from "./Page/SharedLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
