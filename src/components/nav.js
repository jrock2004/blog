import * as React from "react"
import { Link } from "gatsby"

import Bio from "./bio"

export const Nav = ({ activePath }) => {
  return (
    <>
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
                activePath === "/all-posts"
                  ? "bg-amber-800 hover:opacity-90"
                  : "text-white hover:opacity-50"
              }`}
              to="/all-posts"
            >
              All Posts
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
      <div className="mt-10">
        <h2 className="text-lg mb-2">About</h2>
        <p className="text-left">
          I'm a full stack Javascript engineer. I enjoy creating all types of
          websites and create tutorials on my spare time.
        </p>
      </div>
      <div className="w-full mt-10">
        <Bio />
      </div>
    </>
  )
}

export default Nav
