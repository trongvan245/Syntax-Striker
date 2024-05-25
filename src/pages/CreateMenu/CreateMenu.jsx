import { useEffect, useState } from 'react'
import styles from './CreateMenu.module.scss'
import {
  MDBInput,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit'

import MenuManagement from '../../model/MenuManagement'

export default function CreateMenu() {
  const [step, setStep] = useState(1)
  const [restaurantInfo, setRestaurantInfo] = useState({
    address: '3/2 Street',
    location: 'District 10',
    phone: '03325543267',
    name: 'Strike Restaurant'
  })

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const [menuItems, setmenuItems] = useState([])

  const [newItem, setNewItem] = useState({
    image: '',
    type: 'food', // Default type
    name: '',
    price: '10000',
    description: '',
    rating: 0
  })

  useEffect(() => {
    const getInfo = async () => {
      await MenuManagement.getMenuList(
        (items) => {
          console.log('Items: ', items)
          setmenuItems(items)
        },
        (error) => {
          console.log(error)
        }
      )
    }
    getInfo()
  }, [setmenuItems])

  const handleAddItem = (type) => {
    if (newItem.name.trim() !== '') {
      // Check if name is not empty
      console.log(type)
      const newItems = [...menuItems, newItem]
      setmenuItems(newItems)
      console.log('Add: ', newItems)
      MenuManagement.updateMenu(
        newItems,
        (response) => {
          console.log(response)
        },
        (response) => {
          console.log(response)
        }
      )
      setNewItem({
        image: '',
        type: 'food', // Default type
        name: '',
        price: '10000',
        description: '',
        rating: 0
      })
    }
  }

  const handleRemoveItem = (type, index) => {
    //console.log(newItem);
    const newmenuItems = [...menuItems]
    newmenuItems.splice(index, 1)
    setmenuItems(newmenuItems)
    console.log(newmenuItems)
    MenuManagement.updateMenu(
      newmenuItems,
      (response) => {
        console.log(response)
      },
      (response) => {
        console.log(response)
      }
    )
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setNewItem((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }
  const handleRatingChange = (event) => {
    setNewItem((prevItem) => ({ ...prevItem, rating: event.target.value }))
  }

  return (
    <>
      {step === 1 && (
        <div className>
          <div className={styles.createMenu}>
            {/* <h1 className={styles.headingMenu} style={{textAlign: "center"}}>Create Your Menu</h1> */}

            <div className={styles.menuContainer}>
              <h1 className={styles.heading}>Your Menu</h1>

              <div className={styles.divider}> </div>

              <div className={styles.menuItems}>
                {menuItems.map((item, index) => (
                  <div key={item.index} className={styles.menuItem}>
                    <img
                      src={item.avatar ? item.avatar : '/src/assets/images/Menu/img.png'}
                      alt={item.name}
                      className={styles.menuItemImage}
                    />
                    <div className={styles.menuItemInfo}>
                      <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                      <p className={styles.menuItemPrice}>{item.price} VND</p>
                    </div>
                    <button onClick={() => handleRemoveItem('food', index)} className={styles.removeButton}>
                      Remove
                    </button>
                  </div>
                ))}
                <div className={styles.menuItem}>
                  <button
                    type='button'
                    data-bs-toggle='modal'
                    data-bs-target='#staticBackdrop1'
                    className={`${styles.addButton} btn btn-primary`}
                  >
                    Thêm món ăn
                  </button>

                  <div
                    className='modal fade'
                    id='staticBackdrop1'
                    data-bs-backdrop='static'
                    data-bs-keyboard='false'
                    tabIndex='-1'
                    aria-labelledby='staticBackdropLabel'
                    aria-hidden='true'
                    style={{ width: '90vw' }}
                  >
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                            Thông tin sản phẩm
                          </h1>
                          <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div
                          className='modal-body'
                          style={{
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          <MDBInput
                            id='name'
                            wrapperclassName='mb-4'
                            label='Tên sản phẩm'
                            value={newItem.name}
                            onChange={handleChange}
                          />
                          <MDBInput
                            type='number'
                            id='price'
                            wrapperclassName='mb-4'
                            label='Giá cả'
                            value={newItem.price}
                            onChange={handleChange}
                          />
                          <MDBInput
                            wrapperclassName='mb-4'
                            textarea
                            id='description'
                            rows={4}
                            label='Miêu tả sản phẩm'
                            value={newItem.description}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='modal-footer'>
                          <button type='button' className='btn btn-primary' onClick={() => handleAddItem('food')}>
                            Add item
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.formNavigation}>
              <button type='button' onClick={handlePreviousStep} className={styles.button} disabled>
                Back
              </button>
              <button type='button' onClick={handleNextStep} className={styles.button}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div>
          <section style={{ backgroundColor: '#eee' }}>
            <h1 className={styles.heading} style={{ margin: 0, paddingTop: 40, fontSize: '3em' }}>
              Review
            </h1>
            <MDBContainer className='py-5'>
              <MDBRow>
                <MDBCard className='mb-4' style={{ fontSize: '20px' }}>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol>
                        <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                          <MDBBreadcrumbItem style={{ fontWeight: 'bold', fontSize: '30px' }}>
                            Restaurant Infomation
                          </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Restaurant name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>{restaurantInfo.name}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {restaurantInfo.address + ', ' + restaurantInfo.location}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>{restaurantInfo.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <hr />
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>

              <MDBRow>
                <MDBCard className='mb-4' style={{ fontSize: '20px' }}>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol>
                        <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                          <MDBBreadcrumbItem style={{ fontWeight: 'bold', fontSize: '30px' }}>Menu</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                      </MDBCol>
                    </MDBRow>
                    <div className={styles.menuItems}>
                      {menuItems.map((item, index) => (
                        <div key={item.index} className={styles.menuItem}>
                          <img
                            src={'/src/assets/images/Menu/img.png'}
                            alt={item.name}
                            className={styles.menuItemImage}
                          />
                          <div className={styles.menuItemInfo}>
                            <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                            <p className={styles.menuItemPrice}>{item.price} VND</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className={styles.menuSection}></div>
          <div className={styles.formNavigation}>
            <button type='button' onClick={handlePreviousStep} className={styles.button}>
              Back
            </button>
            <button type='button' className={styles.button}>
              <a href='/' style={{ color: 'white' }}>
                Submit
              </a>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
