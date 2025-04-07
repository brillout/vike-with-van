export default Page

import van from 'vanjs-core'
import { useData } from '../../../renderer/useData'
import type { Data } from './+data'

function Page() {
  const { h1, br, p } = van.tags;
  const { movie } = useData<Data>()
  return [
    h1(movie.title),
    p("Release Date: ",
      movie.release_date,
      br(),
      "Director: ", movie.director,
      br(),
      "Producer: ", movie.producer
    )
  ]
}
