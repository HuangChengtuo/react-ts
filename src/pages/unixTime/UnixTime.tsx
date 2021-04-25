import { useState, ChangeEvent } from 'react'
import dayjs from 'dayjs'
import { Input } from 'antd';
import './UnixTime.scss'

export default function UnixTime() {
  const [unix1, setUnix1] = useState<number>(dayjs().unix())
  const changeUnix1 = (e: ChangeEvent<HTMLInputElement>) => {
    setUnix1(Number(e.target.value))
  }
  return (
    <div id="unix-time-page">
      <Input value={unix1} onChange={changeUnix1} type="number" />
      {unix1}
    </div>
  )
}