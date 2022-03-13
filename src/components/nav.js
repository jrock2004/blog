import * as React from "react"
import { Link } from "gatsby"

export const Nav = ({ activePath }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav>
      <button
        aria-label="Toggle menu"
        className=""
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          id="menu-button"
          className="h-8 w-8 cursor-pointer block"
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
        className={`${
          isOpen ? "flex flex-col" : "hidden"
        } absolute top-0 bottom-0 left-0 w-64 z-10 shadow-xl bg-slate-50 shadow-slate-500 md:w-72`}
        id="menu"
      >
        <div className="flex justify-end pt-5 pb-1 pr-5">
          <button
            aria-label="Close Menu"
            className=""
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="text-base text-gray-700 pt-4 w-full">
          <li>
            <Link
              className={`px-2 py-2 block text-xl ${
                activePath === "/"
                  ? "text-teal-900 bg-teal-50"
                  : "text-teal-700"
              } md:px-6 hover:bg-teal-200 hover:text-teal-900`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`px-2 py-2 block text-xl ${
                activePath === "/what-i-use"
                  ? "text-teal-900 bg-teal-50"
                  : "text-teal-700"
              } md:px-6 hover:bg-teal-200 hover:text-teal-900`}
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
