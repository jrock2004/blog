import * as React from "react"
import { Link } from "gatsby"

export const Nav = ({ activePath }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav>
      <button
        aria-label="Toggle menu"
        className="absolute top-5 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto `}
        id="menu"
      >
        <ul
          className="
            text-base text-gray-700
            pt-4
            w-full
            md:flex
            md:pt-0"
        >
          <li>
            <Link
              className={`md:p-4 md:pl-0 py-2 block text-lg ${
                activePath === "/" && "text-red-700"
              } hover:text-red-500`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`md:p-4 py-2 block text-lg ${
                activePath === "/what-i-use" && "text-red-700 md:underline"
              } hover:text-red-500`}
              to="/what-i-use"
            >
              What I Use
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
