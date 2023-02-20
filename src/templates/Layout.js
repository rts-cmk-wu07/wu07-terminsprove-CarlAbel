import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div className="mt-4 ml-5 mr-5">
      <Navbar />
      <Outlet />
    </div>
  )
}
