import * as React from "react"

import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="h-full">
      <div
        className="antialiased text-slate-700 font-primary min-h-full outer-container box-border w-full bg-white flex flex-col lg:flex-row dark:bg-stone-900"
        data-is-root-path={isRootPath}
      >
        <Header activePath={location.pathname} title={title} />
        <main className="px-20 py-7 overflow-y-scroll">{children}</main>
      </div>
    </div>
  )
}

export default Layout
