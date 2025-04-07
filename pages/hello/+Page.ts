export default Page

import van from "vanjs-core"
import { useData } from '../../renderer/useData'
import type { Data } from './+data'

const { div, h1, p, ul, li, a, b, code } = van.tags;

function Page() {
  const { name } = useData<Data>()
  return [
    h1("Hello"),
    p("Hi ", b(name), "."),
    ul(
      li(
        a({ href: "/hello/eli"}, "/hello/eli"),
      ),
      li(
        a({ href: "/hello/jon"}, "/hello/jon")
      )
    ),
    p(
      "Parameterized routes can be defined by exporting a route string in ",
      code("+route.ts"),
      "."
    )
  ];
}
