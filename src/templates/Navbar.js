import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Triangle, X, Menu, ChevronLeft } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div
        className="absolute left-3 mt-6 cursor-pointer"
        onClick={() => {
          if (location.pathname === "/home") {
            toggleMenu()
          } else {
            window.location.href = "/home"
          }
        }}
      >
        {location.pathname === "/home" ? (
          <Triangle className="ml-4 text-gray-500" size={24} />
        ) : (
          <div className="flex">
            <ChevronLeft className="ml-4" size={24} />
            Back
          </div>
        )}
      </div>
      <Menu className="absolute mr-4 right-3 mt-6" onClick={toggleMenu}>
        Navbar
      </Menu>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="absolute top-0 right-0 m-4">
            <X className="mr-4 right-3 mt-6" onClick={toggleMenu}></X>
          </div>
          <ul className="text-lg flex flex-col items-center justify-center h-full">
            <li className="my-4">
              <Link to="/home" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="my-4">
              <Link to="/search" onClick={handleMenuItemClick}>
                Search
              </Link>
            </li>
            <li className="my-4">
              <Link to="/myschedule" onClick={handleMenuItemClick}>
                My Schedule
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
