export { Page }

import van from "vanjs-core"
import { usePageContext } from '../../renderer/usePageContext'
import { VanComponent } from "@vanjs/router";

const { div, p } = van.tags;

function Page() {
  const pageContext = usePageContext()
  let { is404, abortReason } = pageContext
  if (!abortReason) {
    abortReason = is404 ? 'Page not found.' : 'Something went wrong.'
  }
  return Center({},
      p({ style: "font-size: 1.3em" },
      abortReason
    )
  )
}

const Center: VanComponent<'div'> = (props, ...children) => {
  return div({
    style: `
      height: calc(100vh - 100px);
      display: flex;
      justify-content: center;
      "align-items": center`,
      ...props
    },
    ...children
  )
}
