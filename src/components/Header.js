import * as React from "react"
import { Link } from "gatsby"

import Nav from "./nav"

export const Header = ({ activePath, title }) => {
  return (
    <header className="flex flex-col items-center py-6 px-6 bg-gray-800 text-white">
      <div className="border-4 border-orange-400 rounded-md p-10 mb-10">
        <h1 className="text-2xl font-bold text-center">
          <Link to="/">{title}</Link>
        </h1>
      </div>
      <Nav activePath={activePath} />
    </header>
  )
}

export default Header
