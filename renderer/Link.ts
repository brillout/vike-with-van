import van, { type State, type ChildDom } from "vanjs-core";

import { usePageContext } from "./usePageContext";
import { VanComponent } from "@vanjs/router";

export { Link };

const Link: VanComponent<'a'> = ({ href, ...initialProps } = {}, ...children: ChildDom[]) => {
  const { a } = van.tags;
  const { urlPathname } = usePageContext();
  const hrefAtt = () =>
    (href as State<string>)?.val ? (href as State<string>).val : href as string;
  const isActive = () => hrefAtt() === "/"
    ? urlPathname === hrefAtt()
    : urlPathname?.startsWith(hrefAtt()) || false;
  
  const props = { ...initialProps };
  van.derive(() => {
    if (initialProps.class || isActive()) {
      props.class = [initialProps.class, isActive() && 'is-active'].filter(Boolean).join(' ');
    }
  });

  return a({ href: hrefAtt, ...props },
    ...children
  );
};
