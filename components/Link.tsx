import NextLink from 'next/link'
import React from 'react';

interface Props {
  to: string,
  className?: string,
  children: React.ReactNode
}

export default function Link (props: Props) {
  return <NextLink href={props.to}>
    <a className={props.className}>{props.children}</a>
  </NextLink>
}
