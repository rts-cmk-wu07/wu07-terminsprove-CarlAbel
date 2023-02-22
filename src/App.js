import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Layout from "./templates/Layout"
import Search from "./pages/Search"
import MySchedule from "./pages/MySchedule"

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
          <Route path="/search" element={<Search />} />
          <Route path="/myschedule" element={<MySchedule />} />
          <Route path="/classDetails/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
