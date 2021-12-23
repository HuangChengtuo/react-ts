import Default from "./Default";
import type { Router } from 'next/router'

export default function Layout (props: { children: React.ReactElement, router: Router }) {
  switch (props.router.route) {
    case '/test':
      return props.children
    default:
      return <Default>{props.children}</Default>
  }
}
