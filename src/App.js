import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Layout from "./templates/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            sessionStorage.getItem("key") !== "true" ? <Welcome /> : <Layout />
          }
        >
          <Route path="/home" element={<Home />} />
          {/* <Route path="/classDetails/:id"/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
