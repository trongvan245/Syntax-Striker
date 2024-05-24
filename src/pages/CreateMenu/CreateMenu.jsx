import React from 'react'
import { useState } from 'react'
import styles from './CreateMenu.module.scss'

export default function CreateMenu() {
  const [step, setStep] = useState(1)
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantInfo, setRestaurantInfo] = useState({
    address: '',
    city: '',
    phone: ''
  })

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const [menuFoodItems, setmenuFoodItems] = useState([])
  const [menuDrinkItems, setmenuDrinkItems] = useState([])

  const [newItem, setNewItem] = useState({
    // image: '',
    type: 'food', // Default type
    name: '',
    price: '100',
    description: '',
    rating: 0
  })

  const handleAddItem = (type) => {
    if (newItem.name.trim() !== '') {
      // Check if name is not empty
      console.log(type)
      if (type === 'food') {
        setmenuFoodItems([...menuFoodItems, newItem])
      } else if (type) {
        setmenuDrinkItems([...menuDrinkItems, newItem])
      }
      setNewItem({
        //image: '',
        type: 'food', // Default type
        name: '',
        price: '100',
        description: ''
        // rating: 0,
      })
    }
  }

  const handleRemoveItem = (type, index) => {
    //console.log(newItem);
    if (type === 'food') {
      const newmenuFoodItems = [...menuFoodItems]
      newmenuFoodItems.splice(index, 1)
      setmenuFoodItems(newmenuFoodItems)
    } else {
      const newmenuDrinkItems = [...menuDrinkItems]
      newmenuDrinkItems.splice(index, 1)
      setmenuDrinkItems(newmenuDrinkItems)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }))
  }

  const handleRatingChange = (event) => {
    setNewItem((prevItem) => ({ ...prevItem, rating: event.target.value }))
  }
  console.log(menuFoodItems)

  const FormRow = ({ label, value, onChange }) => {
    return (
      <div className='row'>
        <div className='col-lg-3'>
          <label>{label}:</label>
        </div>
        <div className='col-lg-9'>
          <input type='text' value={value} onChange={onChange} className={styles.input} />
        </div>
      </div>
    )
  }

  return (
    <>
      {step === 1 && (
        <div className={`${styles.stepContainer} container-fluid`}>
          <h1 className={styles.heading}>Business Info</h1>
          <div className='row'>
            <div className='col-lg-3'>
              <label>Restaurant Name:</label>
            </div>
            <div className='col-lg-9'>
              <input
                type='text'
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
          {/* <FormRow label='Restaurant Name' value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} /> */}

          <div className='row'>
            <div className='col-lg-3'>
              <label>Address:</label>
            </div>
            <div className='col-lg-9'>
              <input
                type='text'
                value={restaurantInfo.address}
                onChange={(e) => setRestaurantInfo({ ...restaurantInfo, address: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-3'>
              <label> City: </label>
            </div>
            <div className='col-lg-9'>
              <input
                type='text'
                value={restaurantInfo.city}
                onChange={(e) => setRestaurantInfo({ ...restaurantInfo, city: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>
          {/*
          <div>
            City:
            <input
              type='text'
              value={restaurantInfo.city}
              onChange={(e) => setRestaurantInfo({ ...restaurantInfo, city: e.target.value })}
              className={styles.input}
            />
          </div> */}
          {/* <FormRow
            label='Address'
            value={restaurantInfo.address}
            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, address: e.target.value })}
          /> */}

          {/* <FormRow
            label='City'
            value={restaurantInfo.city}
            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, city: e.target.value })}
          /> */}

          <div className='row'>
            <div className='col-lg-3'>
              <label> Phone Number: </label>
            </div>
            <div className='col-lg-9'>
              <input
                type='text'
                value={restaurantInfo.phone}
                onChange={(e) => setRestaurantInfo({ ...restaurantInfo, phone: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>
          {/* <FormRow
            label='Phone Number'
            value={restaurantInfo.phone}
            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, phone: e.target.value })}
          /> */}
          <div className={styles.formNavigation}>
            <button type='button' onClick={handleNextStep} className={styles.button} disabled>
              Previous
            </button>

            <button type='button' onClick={handleNextStep} className={styles.button}>
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className>
          <div className={styles.createMenu}>
            {/* <h1 className={styles.headingMenu} style={{textAlign: "center"}}>Create Your Menu</h1> */}

            <div className={styles.menuContainer}>
              <h1 className={styles.heading}>Your Menu</h1>

              <div className={styles.divider}>
                <h2 className={styles.headingMenuType}>Food</h2>
                <div className={styles.menuItems}>
                  {menuFoodItems.map((item, index) => (
                    <div key={item.index} className={styles.menuItem}>
                      <img src={'/src/assets/images/Menu/img.png'} alt={item.name} className={styles.menuItemImage} />
                      <div className={styles.menuItemInfo}>
                        <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                        <p>{item.description}</p>
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
                      class='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop1'
                      className={styles.addButton}
                    >
                      Add item
                    </button>

                    <div
                      class='modal fade'
                      id='staticBackdrop1'
                      data-bs-backdrop='static'
                      data-bs-keyboard='false'
                      tabindex='-1'
                      aria-labelledby='staticBackdropLabel'
                      aria-hidden='true'
                    >
                      <div class='modal-dialog'>
                        <div class='modal-content' style={{ width: '600px' }}>
                          <div class='modal-header'>
                            <h1 class='modal-title fs-5' id='staticBackdropLabel'>
                              Item Info
                            </h1>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                          </div>
                          <div
                            class='modal-body'
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <div>
                              <label htmlFor='name'>Name:</label>
                              <input type='text' name='name' value={newItem.name} onChange={handleChange} required />
                            </div>

                            <div>
                              <label htmlFor='price'>Price:</label>
                              <input
                                type='number'
                                name='price'
                                value={newItem.price}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor='description'>Description:</label>
                              <textarea name='description' value={newItem.description} onChange={handleChange} />
                            </div>
                          </div>
                          <div class='modal-footer'>
                            <button type='button' class='btn btn-primary' onClick={() => handleAddItem('food')}>
                              Add item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.divider}>
                <h2 className={styles.headingMenuType}>Drink</h2>
                <div className={styles.menuItems}>
                  {menuDrinkItems.map((item, index) => (
                    <div key={item.index} className={styles.menuItem}>
                      <img src={'/src/assets/images/Menu/img.png'} alt={item.name} className={styles.menuItemImage} />
                      <div className={styles.menuItemInfo}>
                        <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className={styles.menuItemPrice}>{item.price} VND</p>
                      </div>
                      <button onClick={() => handleRemoveItem('drink', index)} className={styles.removeButton}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className={styles.menuItem}>
                    <button
                      type='button'
                      class='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop2'
                      className={styles.addButton}
                    >
                      Add item
                    </button>

                    <div
                      class='modal fade'
                      id='staticBackdrop2'
                      data-bs-backdrop='static'
                      data-bs-keyboard='false'
                      tabindex='-1'
                      aria-labelledby='staticBackdropLabel'
                      aria-hidden='true'
                    >
                      <div class='modal-dialog'>
                        <div class='modal-content' style={{ width: '600px' }}>
                          <div class='modal-header'>
                            <h1 class='modal-title fs-5' id='staticBackdropLabel'>
                              Item Info
                            </h1>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                          </div>
                          <div
                            class='modal-body'
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <div>
                              <label htmlFor='name'>Name:</label>
                              <input type='text' name='name' value={newItem.name} onChange={handleChange} required />
                            </div>

                            <div>
                              <label htmlFor='price'>Price:</label>
                              <input
                                type='number'
                                name='price'
                                value={newItem.price}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor='description'>Description:</label>
                              <textarea name='description' value={newItem.description} onChange={handleChange} />
                            </div>
                          </div>
                          <div class='modal-footer'>
                            <button type='button' class='btn btn-primary' onClick={() => handleAddItem('drink')}>
                              Add item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formNavigation}>
              <button type='button' onClick={handlePreviousStep} className={styles.button}>
                Back
              </button>
              <button type='button' onClick={handleNextStep} className={styles.button}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {step == 3 && (
        <div className={styles.stepContainer}>
          <h1 className={styles.heading}>Review</h1>
          <div className={styles.restaurantInfo}>
            <h3>Restaurant Info</h3>
            <p>Name: {restaurantName}</p>
            <p>Address: {restaurantInfo.address}</p>
            <p>City: {restaurantInfo.city}</p>
            <p>Phone: {restaurantInfo.phone}</p>
          </div>
          <h3>Menu</h3>
          <div className={styles.menuSection}>
            <h4>Food</h4>
            <div className={styles.menuItems}>
              {menuFoodItems.map((item, index) => (
                <div key={item.index} className={styles.menuItem}>
                  <img src={'/src/assets/images/Menu/img.png'} alt={item.name} className={styles.menuItemImage} />
                  <div className={styles.menuItemInfo}>
                    <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className={styles.menuItemPrice}>{item.price} VND</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.menuSection}>
            <h4>Drink</h4>
            <div className={styles.menuItems}>
              {menuDrinkItems.map((item, index) => (
                <div key={item.index} className={styles.menuItem}>
                  <img src={'/src/assets/images/Menu/img.png'} alt={item.name} className={styles.menuItemImage} />
                  <div className={styles.menuItemInfo}>
                    <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className={styles.menuItemPrice}>{item.price} VND</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.formNavigation}>
            <button type='button' onClick={handlePreviousStep} className={styles.button}>
              Back
            </button>
            <button type='button' onClick={handleNextStep} className={styles.button}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  )
}
