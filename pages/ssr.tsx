import { useEffect } from 'react'

export default function SSR (props) {
  useEffect(() => {
    console.log(props.res)
  }, [])
  return <>
    <h1>SSR page</h1>
  </>
}

export async function getServerSideProps () {
  const raw = await fetch('https://s1.huangchengtuo.com/json/app.json')
  const res = await raw.json()
  console.log('node')
  return { props: { res } }
}