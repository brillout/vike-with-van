export default Page

import van from "vanjs-core"
import { navigate } from 'vike/client/router'
import { Counter } from '../../components/Counter'

function Page() {
  const { h1, p, ul, li, button } = van.tags;
  return [
    h1("Welcome to Vike"),
    p("This page is:"),
    ul(
      li("Rendered to HTML."),
      li("Interactive.", Counter()),
    ),
    p(
      button(
        {
          onclick: () => {
            const target = ['/star-wars', '/hello/alice']
            const randomIndex = Math.floor(Math.random() * target.length)
            navigate(target[randomIndex])
          },
        },
        "Random Page"
      )
    )
  ]
}
