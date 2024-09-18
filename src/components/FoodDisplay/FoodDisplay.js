import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext);
    
    return (
      <div className='food-display' id='food-display'>
        <h2>Must-Try Local Favorites</h2>
        <div className='food-display-list'>
          {food_list.map((item)=>{
            if (category==="All" || category===item.food_category) {
              return <FoodItem key={item.food_id} image={item.food_image} name={item.food_name} desc={item.food_desc} price={item.food_price} id={item.food_id}/>
            }
          })}
        </div>
      </div>
    )
}

export default FoodDisplay