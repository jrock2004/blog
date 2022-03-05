import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-4xl text-white font-semibold tracking-wider">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="text-white" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="antialiased text-slate-500 grid h-full outer-container"
      data-is-root-path={isRootPath}
    >
      <header className="bg-slate-700 p-8 shadow-xl">{header}</header>
      <main className="p-8 overflow-scroll">{children}</main>
      <footer className="bg-slate-700 text-white p-8">
        JC Web Concepts © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
