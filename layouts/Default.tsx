import Nav from '@/components/Nav'

export default function Default (props: { children: React.ReactNode }) {
  return <>
    <Nav />
    <div className="default-body">
      {props.children}
    </div>
  </>
}
