import NextLink from 'next/link'

interface Props {
  to: string,
  className?: string,
  children: React.ReactNode
}

const Link: React.FC<Props> = props => <NextLink href={props.to}>
  <a className={props.className}>{props.children}</a>
</NextLink>

export default Link

// export default function Link (props: Props) {
//   return <NextLink href={props.to}>
//     <a className={props.className}>{props.children}</a>
//   </NextLink>
// } 
