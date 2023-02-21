import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div className="absolute left-3 mt-6">Triangle</div>
      <div className="absolute right-3 mt-6" onClick={toggleMenu}>
        Navbar
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="absolute top-0 right-0 m-4">
            <button onClick={toggleMenu}>Close</button>
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
