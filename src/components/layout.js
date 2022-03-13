import * as React from "react"

import Header from "./Header"
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      className="antialiased text-slate-700 font-primary h-full outer-container box-border w-full flex flex-col"
      data-is-root-path={isRootPath}
    >
      <Header activePath={location.pathname} title={title} />
      <main className="flex items-center justify-center pt-12">{children}</main>
      <footer className="my-12 flex justify-center">
        <Bio />
      </footer>
    </div>
  )
}

export default Layout
