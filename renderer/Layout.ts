export { Layout }

import van from "vanjs-core"
import type { ChildDom } from 'vanjs-core'
import type { PageContext } from 'vike/types'
import type { PageComponent } from '../types/types'
import { Link } from './Link'
import logoUrl from './logo.svg'
import './css/index.css'
import './Layout.css'

type LayoutProps = {
  pageContext: PageContext,
  Page: PageComponent
}

const { div, a, img } = van.tags;

function Layout({ /*pageContext,*/ Page }: LayoutProps) {
  return (
    Frame(
      Sidebar(
        Logo(),
        Link({ href: "/" }, "Welcome"),
        Link({ href: "/star-wars" }, "Data Fetching"),
        Link({ href: "/hello" }, "Routing"),
      ),
      Content(
        Page()
      )
    )
  )
}

function Frame(...children: ChildDom[]) {
  return div(
    { id: "main", style: "display: flex; max-width: 900px; margin: auto"},
      ...children
    )
}

function Sidebar( ...children: ChildDom[]) {
  return div(
    {
      id: "sidebar",
      style: `
        padding: 20px;
        display: flex;
        flex-shrink: 0;
        flex-direction:
        column; line-height: 1.8em;
        border-right: 2px solid #eee`
    },
    ...children
  );
}

function Content(...children: ChildDom[]) {
  return div({ id:"page-container" },
      div({
        id: "page-content",
        style: `
          padding: 20px;
          padding-bottom: 50px;
          min-height: 100vh
        `
      },
      ...children
    )
  )
}

function Logo() {
  return div({
      style: "margin-top: 20px; margin-bottom: 10px"
    },
    a({ href: "/"},
      img({ src: logoUrl, height: 64, width: 64, alt: "logo" })
    )
  );
}
