import * as React from "react"
import { Link } from "gatsby"

import { Nav } from "./Nav"

export const Header = ({ activePath, title }) => {
  return (
    <header className="flex flex-row py-6 px-6 items-center">
      <div>
        <Nav activePath={activePath} />
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center">
          <Link to="/">{title}</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
