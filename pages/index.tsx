import { useEffect } from 'react'

export default function Index (props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return <>
    <h1>index</h1>
  </>
}

export async function getStaticProps () {
  const raw = await fetch('https://s1.huangchengtuo.com/json/app.json')
  const res = await raw.json()
  console.log('node')
  return { props: { res } }
}
