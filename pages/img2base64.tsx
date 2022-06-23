import { useState } from 'react';
import { Upload, Button, Input } from 'antd'

export default function Img2base64 () {
  const [url, setUrl] = useState('')

  function blob2base64 (blob: Blob) {
    return new Promise<string>(resolve => {
      const fr = new FileReader()
      fr.onload = e => {
        resolve(e.target.result as string)
      }
      fr.readAsDataURL(blob)
    })
  }

  async function upload (blob: Blob) {
    const url = await blob2base64(blob)
    console.log(url)
    setUrl(url)
    return false
  }

  return <>
    <Upload accept=".png,.jpg,.svg,.ico,jpeg,.webp" showUploadList={false} beforeUpload={upload}>
      <Button>上传图片</Button>
    </Upload>
    <br />
    <Input.TextArea value={url} autoSize={{ minRows: 3, maxRows: 10 }} disabled={!url} style={{ margin: '12px 0' }} placeholder="base64" />
    <img src={url} alt="empty" style={{ maxWidth: '100%' }} />
  </>
}
