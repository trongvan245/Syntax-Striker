import React from 'react'
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
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AccountManagement from '../../model/AccountManagement'

export default function Info() {
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
      })
    }
    fetchData()
  }, [setInfo])

  //Van tu cap nhat trong database
  const handleChange = (e) => {
    const { id, value } = e.target
    const newIndo = (prevInfo) => ({
      ...prevInfo,
      [id]: value
    })
    const successChange = (response) => {
      setInfo(response)
    }
    const errorChange = (response) => {
      console.log(response)
    }
    AccountManagement.updateAccountInformation(newIndo, successChange, errorChange)
  }

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className='py-5'>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
              <MDBBreadcrumbItem active style={{ fontWeight: 'bold' }}>
                Infomation
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg='4'>
            <MDBCard className='mb-4'>
              <MDBCardBody className='text-center'>
                <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                  alt='avatar'
                  className='rounded-circle'
                  style={{ width: '150px' }}
                  fluid
                />
                {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                <div className='d-flex justify-content-center mb-2'>
                  <MDBBtn style={{ marginTop: '20px' }}>Edit</MDBBtn>
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
                  Owner Profile
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Full Name</MDBCardText>
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
                            Edit Information
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
                              label='Full name'
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
                              label='Number'
                              value={info.phone_number}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='owner_name'
                              label='Restaurant Name'
                              value={info.owner_name}
                              onChange={handleChange}
                            />
                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='type'
                              label='Type'
                              value={info.type}
                              onChange={handleChange}
                            />

                            <MDBInput
                              className='mb-4'
                              type='text'
                              id='address'
                              label='Address'
                              value={info.address}
                              onChange={handleChange}
                            />
                          </form>
                        </div>
                        <div className='modal-footer'>
                          <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <MDBCardText>Mobile</MDBCardText>
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
                  Restaurant Infomation
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Restaurant Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm='3'>
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm='7'>
                    <MDBCardText className='text-muted'>{info.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <div className='d-flex flex-row-reverse'>
              <MDBBtn data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Edit
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
