import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WhatIUse = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What I Use" />

      <div className="px-5 max-w-4xl md:px-8 dark:text-white">
        <h2 className="text-5xl font-semibold mb-8">What I Use</h2>
        <p className="mb-6">
          I might be doing a demo or training and I will get the question of,
          what do I use. So this page is going to be the place I can point
          people to see what I am using and where to get it.
        </p>
        <h3 className="text-3xl py-3">Editor + Terminal + Fonts</h3>
        <ul className="list-disc ml-8">
          <li className="mb-1">
            <a
              className="text-red-700 hover:text-red-500"
              href="https://neovim.io"
            >
              Neovim
            </a>{" "}
            is the main editor I use on a daily basis.
          </li>
          <li className="mb-1">
            <a
              className="text-red-700 hover:text-red-500"
              href="https://code.visualstudio.com"
            >
              Visual Studio Code
            </a>{" "}
            every once in awhile or if I have merge conflicts I will use it.
          </li>
          <li className="mb-1">
            <a
              className="text-red-700 hover:text-red-500"
              href="https://iterm2.com"
            >
              iTerm2
            </a>{" "}
            is the main terminal I use.{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://github.com/jrock2004/dotfiles#iterm"
            >
              Configuration for iTerm
            </a>{" "}
            can be found on my dotfiles readme
          </li>
          <li className="mb-1">
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.thefontsmaster.com/download-dank-mono-2-fonts/"
            >
              Dank Mono
            </a>{" "}
            is the main font I use for developing.
          </li>
          <li className="mb-1">
            <a
              className="text-red-700 hover:text-red-500"
              href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/FiraCode"
            >
              FiraCode Nerd Font Mono
            </a>{" "}
            is the font I setup as my non-ASCII font in iTerm.
          </li>
        </ul>
        <h3 className="text-3xl py-3">Desktop Apps</h3>
        <ul className="list-disc ml-8">
          <li className="mb-1">
            I use{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.alfredapp.com"
            >
              Alfred
            </a>{" "}
            everyday to open my apps that I am going to use. I use it as my
            calculator as well when I need to do math.
          </li>
          <li className="mb-1">
            For password management I use{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://1password.com"
            >
              1Password
            </a>
          </li>
          <li className="mb-1">
            My main browser I use is Safari, but I have Firefox and Chrome
            installed to do cross browser testing and when I need a special dev
            tools utility that does not work in Safari
          </li>
          <li className="mb-1">
            My markdown editor that I use to take notes for work and other
            things is called{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://apps.apple.com/us/app/drafts/id1435957248?mt=12"
            >
              Drafts
            </a>
          </li>
          <li className="mb-1">
            I am not huge when it comes to journaling but when I do, I go to{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://dayoneapp.com"
            >
              Day One
            </a>
          </li>
        </ul>
        <h3 className="text-3xl py-3">Desk Setup</h3>
        <ul className="list-disc ml-8">
          <li className="mb-1">
            My standing desk is the 70x30 inch{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.autonomous.ai/standing-desks/smartdesk-2-home"
            >
              SmartDesk 2
            </a>{" "}
            from Autonomous
          </li>
          <li className="mb-1">
            The computer I am using on my desk is the 2017 iMac 27".
            <ul className="list-disc ml-8">
              <li className="mb-1">4.2 GHz Quad-Core Intel i7</li>
              <li className="mb-1">40 GB of RAM</li>
            </ul>
          </li>
          <li className="mb-1">
            The dock that I am using is a{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.amazon.com/gp/product/B07CZPV8DF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
            >
              CalDigit
            </a>{" "}
            Thunderbolt 3.
          </li>
          <li className="mb-1">
            My monitor I use is the{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.amazon.com/gp/product/B07JVGLJ6R/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
            >
              LG 34" Curved
            </a>
            .
          </li>
          <li className="mb-1">
            For my keyboard I am using the{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.amazon.com/gp/product/B08LR9GFXX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
            >
              Keychron K4
            </a>{" "}
            96% Mechanical wireless keyboard.
          </li>
          <li className="mb-1">
            For my mouse I am using the Apple wireless trackpad.
          </li>
          <li className="mb-1">
            Microphone, I am using the{" "}
            <a
              className="text-red-700 hover:text-red-500"
              href="https://www.amazon.com/gp/product/B07ZPC2FMQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
            >
              Audio-Technica ATR2500x
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default WhatIUse

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
