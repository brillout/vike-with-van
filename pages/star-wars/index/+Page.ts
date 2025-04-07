export default Page

import van from "vanjs-core"
import { Link } from '../../../renderer/Link';
import { useData } from '../../../renderer/useData'
import type { Data } from './+data'

const { h1, p, a, ol, li, code } = van.tags;

function Page() {
  const { movies } = useData<Data>();
  return [
    h1("Star Wars Movies"),
    ol(
      movies.map(({ id, title, release_date }) => (
        li({ id },
          Link({ href: `/star-wars/${id}` }, title), " (", release_date, ")")
        )
      )
    ),
    p(
      "Source: ",
      a({ href: "https://star-wars.brillout.com" }, "star-wars.brillout.com"),
      "."
    ),
    p(
      "Data can be fetched by using the ",
      code("data()"),
      " hook."
    )
  ]
}
