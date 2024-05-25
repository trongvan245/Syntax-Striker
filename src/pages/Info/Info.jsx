import { useState, useEffect } from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput
} from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AccountManagement from '../../model/AccountManagement'

function UploadImageModal({ selectedFile, setSelectedFile }) {
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

    const successCallback = () => {
      alert('Upload successful')
      window.location.reload()
    }

    const errorCallback = (response) => {
      alert('Upload failed')
      console.log(response)
    }

    AccountManagement.imageUploader(formData, successCallback, errorCallback)
  }
  return (
    <div
      className='modal fade'
      id='uploadImageModal'
      tabIndex='-1'
      aria-labelledby='uploadImageModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='uploadImageModalLabel'>
              Cập nhật ảnh đại diện nhà hàng
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form>
              <input className='form-control' type='file' id='formFile' onChange={handleFileChange} />
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={handleUpload}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Info() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [avatar, setAvatar] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp')
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
    owner_name: '',
    address: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      await AccountManagement.getAccountInformation((response) => {
        setInfo(response)
        setAvatar(response.avatar)
      })
    }
    fetchData()
  }, [setInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = (response) => {
      setInfo(response)
    }
    const failure = (response) => {
      console.log('Data sent: ', info)
      console.log('Response: ', response)
      window.alert('Update failed')
      // Reload the page
      window.location.reload()
    }
    AccountManagement.updateAccountInformation(info, success, failure)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value
    }))
    console.log(info)
  }

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
              <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                Thông tin
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                <a href='/yourMenu'>Menu</a>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg='4'>
            <MDBCard className='mb-4'>
              <MDBCardBody className='text-center'>
                <MDBCardImage src={avatar} alt='avatar' className='' style={{ width: '90%' }} fluid />
                <div className='d-flex justify-content-center mb-2'>
                  <MDBBtn data-bs-toggle='modal' data-bs-target='#uploadImageModal' style={{ marginTop: '20px' }}>
                    Chỉnh sửa
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className='mb-4 mb-lg-0'>
              <MDBCardBody className='p-0'>
                <MDBListGroup flush className='rounded-3'>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBIcon fab icon='twitter fa-lg' style={{ color: '#55acee' }} />
                    <MDBCardText>@twitter</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBIcon fab icon='instagram fa-lg' style={{ color: '#ac2bac' }} />
                    <MDBCardText>@instagram</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBIcon fab icon='facebook fa-lg' style={{ color: '#3b5998' }} />
                    <MDBCardText>@facebook</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg='8'>
            <MDBCard className='mb-4'>
              <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                  Quản lý nhà hàng
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Họ và tên</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.owner_name}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='2'></MDBCol>
                  <div
                    className='modal fade'
                    id='exampleModal'
                    tabIndex='-1'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title' id='exampleModalLabel'>
                            Chỉnh sửa thông tin
                          </h5>
                          <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div className='modal-body'>
                          <form>
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='name'
                              label='Tên nhà hàng'
                              value={info.name}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='email'
                              id='email'
                              label='Email'
                              value={info.email}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='number'
                              id='phone_number'
                              label='Số điện thoại'
                              value={info.phone_number}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='owner_name'
                              label='Chủ nhà hàng'
                              value={info.owner_name}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='address'
                              label='Địa chỉ (Số nhà, Đường, Phường/Xã)'
                              value={info.address}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='address'
                              label='Quận/Huyện/Tỉnh/Thành phố'
                              value={info.location}
                              onChange={handleChange}
                            />
                          </form>
                        </div>
                        <div className='modal-footer'>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                            onClick={handleSubmit}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <UploadImageModal selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Số điện thoại</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.phone_number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>

            <MDBCard className='mb-4'>
              <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                  Thông tin nhà hàng
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Tên nhà hàng</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Địa chỉ</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>
                      {info.address + (info.location ? ', ' + info.location : '')}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className='mb-4'>
              <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                  QR Menu
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <MDBRow>
                <img
                  src='/src/assets/images/qr.png'
                  alt='QR code'
                  style={{ height: 300, width: 300, margin: 'auto', marginBottom: 20 }}
                />
              </MDBRow>
            </MDBCard>
            <div className='d-flex flex-row-reverse'>
              <MDBBtn data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Chỉnh sửa thông tin
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
