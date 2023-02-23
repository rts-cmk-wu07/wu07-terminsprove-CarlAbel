import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Layout from "./templates/Layout"
import Search from "./pages/Search"
import MySchedule from "./pages/MySchedule"
import ClassDetails from "./pages/ClassDetails"

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
          <Route path="/classDetails/:id" element={<ClassDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
