import { useState } from 'react'

const UploadImage = () => {
  const [file, setFile] = useState(null)
  const [type, setType] = useState('bukti_pembayaran')
  const [uploadResponse, setUploadResponse] = useState('')

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  const handleUpload = async (event) => {
    
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <select value={type} onChange={handleTypeChange}>
          <option value="bukti_pembayaran">Bukti Pembayaran</option>
          <option value="bukti_follow">Bukti Follow</option>
          <option value="ktm">KTM</option>
        </select>
        <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
        <button type="submit">Upload</button>
      </form>
      {uploadResponse && <pre>Response: {uploadResponse}</pre>}
    </div>
  )
}

export default UploadImage
