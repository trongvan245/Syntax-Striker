import React from "react";
import { useState } from "react";
import styles from './CreateMenu.module.scss'

export default function CreateMenu() {
    const [menuFoodItems, setmenuFoodItems] = useState([]);
    const [menuDrinkItems, setmenuDrinkItems] = useState([]);
    const [newItem, setNewItem] = useState({
    // image: '',
        type: 'food', // Default type
        name: '',
        price: '',
        description: '',
        rating: 0,
    });
  

  const handleAddItem = () => {
    if (newItem.name.trim() !== '') { // Check if name is not empty
      if(newItem.type === 'food') {
        setmenuFoodItems([...menuFoodItems, newItem]);
      }
      else {
        setmenuDrinkItems([...menuDrinkItems, newItem]);
      }
      setNewItem({
        //image: '',
        type: 'food', // Default type
        name: '',
        price: '',
        description: '',
        // rating: 0,
      });
    }
  };

  const handleRemoveItem = (newItem,index) => {
    console.log(newItem);
    if(newItem.type === 'food') { 
      const newmenuFoodItems = [...menuFoodItems];
      newmenuFoodItems.splice(index, 1);
      setmenuFoodItems(newmenuFoodItems);
    }
    else {
      const newmenuDrinkItems = [...menuDrinkItems];
      newmenuDrinkItems.splice(index, 1);
      setmenuDrinkItems(newmenuDrinkItems);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleRatingChange = (event) => {
    setNewItem((prevItem) => ({ ...prevItem, rating: event.target.value }));
  };
  console.log(menuFoodItems);
  return (
    <div className={styles.createMenu}>
      <h1 className={styles.headingMenu} style={{textAlign: "center"}}>Create Your Menu</h1>
      <form onSubmit={(e) => e.preventDefault()} className={styles.menuForm}>
        {/* <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          name="image"
          value={newItem.image}
          onChange={handleChange}
        /> */}
        <label htmlFor="type">Type:</label>
        <select name="type" id="type" value={newItem.type} onChange={handleChange}>
          <option value="food">Food</option>
          <option value="drink">Drink</option>
        </select>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={newItem.description}
          onChange={handleChange}
        />
        <button onClick={handleAddItem} className={styles.addButton}>Add Item</button>
      </form>


      <div className={styles.menuContainer}> 
      
        <h1 className={styles.headingMenu}>Your Menu</h1>

        <div className= {styles.divider}>
          <h2 className={styles.headingMenuType}>Food</h2>
          <div className={styles.menuItems}>
              {menuFoodItems.map((item, index) => (
              <div key={item.id} className={styles.menuItem}>
                  <img src={"/src/assets/images/Menu/img.png"} alt={item.name} className={styles.menuItemImage} />
                  <div className={styles.menuItemInfo}>
                  <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className={styles.menuItemPrice}>{item.price} VND</p>
                  </div>
                  <button onClick={() => handleRemoveItem(item,index)} className={styles.removeButton}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className= {styles.divider}>
          <h2 className={styles.headingMenuType}>Drink</h2>
            <div className={styles.menuItems}>  
                {menuDrinkItems.map((item, index) => (
                <div key={item.id} className={styles.menuItem}>
                    <img src={"/src/assets/images/Menu/img.png"} alt={item.name} className={styles.menuItemImage} />
                    <div className={styles.menuItemInfo}>
                    <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className={styles.menuItemPrice}>{item.price} VND</p>
                    </div>
                    <button onClick={() => handleRemoveItem(item,index)} className={styles.removeButton}>Remove</button>
                </div>
              ))}
            </div>
        </div>
        
      </div>

    </div>
  );
}