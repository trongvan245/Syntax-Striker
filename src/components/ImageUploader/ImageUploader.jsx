import { useState } from 'react'
import AccountManagement from '../../model/AccountManagement'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    const successCallback = (response) => {
      alert('Upload successful')
      setUploadProgress(0)
      console.log(response)
    }

    const errorCallback = (response) => {
      alert('Upload failed')
      setUploadProgress(0)
      console.log(response)
    }

    AccountManagement.imageUploader(formData, setUploadProgress, successCallback, errorCallback)
  }

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>}
    </div>
  )
}

export default ImageUpload
