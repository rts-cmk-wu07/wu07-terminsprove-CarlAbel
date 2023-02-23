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
    <div className="z-20 relative">
      <div
        className="absolute left-2 mt-6 cursor-pointer"
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
          <div className="flex text-orange-400">
            <ChevronLeft className="ml-4 text-orange-400" size={24} />
            Back
          </div>
        )}
      </div>
      <Menu className="absolute mr-2 right-2 mt-6" onClick={toggleMenu}>
        Navbar
      </Menu>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="absolute top-0 right-0 m-4">
            <X className="mr-4 right-2 mt-6" onClick={toggleMenu}></X>
          </div>
          <ul className="text-lg flex flex-col items-center mt-32 h-full">
            <li className="my-6 text-[28px] ">
              <Link to="/home" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="my-6 text-[28px]">
              <Link to="/search" onClick={handleMenuItemClick}>
                Search
              </Link>
            </li>
            <li className="my-6 text-[28px]">
              <Link to="/myschedule" onClick={handleMenuItemClick}>
                My Schedule
              </Link>
            </li>
            <li className="my-6 text-[28px]">
              <Link to="/" onClick={handleMenuItemClick}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
