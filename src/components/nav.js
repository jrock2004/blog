import * as React from "react"
import { Link } from "gatsby"

export const Nav = ({ activePath }) => {
  return (
    <nav className="w-full">
      <ul className="text-base">
        <li>
          <Link
            className={`px-3 py-2 block w-full ${
              activePath === "/"
                ? "bg-amber-800 hover:opacity-90"
                : "text-white hover:opacity-50"
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`px-3 py-2 block w-full ${
              activePath === "/what-i-use"
                ? "bg-amber-800 hover:opacity-90"
                : "text-white hover:opacity-50"
            }`}
            to="/what-i-use"
          >
            What I Use
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
