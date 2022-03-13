import * as React from "react"
import { Link } from "gatsby"

import { Nav } from "./nav"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <h1 className="text-2xl text-slate-600 font-semibold tracking-wider md:text-4xl">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <div
      className="antialiased text-slate-700 font-primary h-full outer-container box-border w-full flex flex-col"
      data-is-root-path={isRootPath}
    >
      <header className="bg-slate-50 px-8 py-4 box-border shadow-md w-full relative md:py-6">
        {header}
        <Nav activePath={location.pathname} />
      </header>
      <main className="flex items-center justify-center pt-12">{children}</main>
      <footer className="bg-slate-700 text-white px-8 py-4 hidden mt-auto md:block">
        JC Web Concepts © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
