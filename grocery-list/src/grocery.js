import React,{useState} from 'react';





 function Grocery() { 
   
 const [list, setList] = useState([
  {item: 'Banana',
  units: 2,
  quantity: 5,
  isPurchased: false
  },
  
  {item: 'Milk',
   units: 2,
   quantity: 2,
   isPurchased: false},
 
   {item: 'Eggs',
   units: 3,
   quantity: 4,
   isPurchased: false}
  
 ])

 const [itemName, setItemName] = useState('')
const [itemUnits, setItemUnits] = useState('')
const [itemQuantity, setItemQuantity] = useState('')

    const itemList = list.filter(grocery => !grocery.isPurchased).map(grocery => <div>  
           
           {grocery.item} 
           
            <ul>
            
            <li> Units: {grocery.units}</li>   
            <li> Quantity: {grocery.quantity} </li>
            <li> {grocery.isPurchased} </li>
             <button onClick={()=> (grocery.isPurchased= true) && setList([...list])}> Purchased</button>
        </ul>
          
          </div>

          )

        return (
            <div> 
            
            <input value={itemName} placeholder="Item Name" onChange={e => setItemName(e.target.value)} />
            <input value={itemUnits}  placeholder="Item Unit" onChange={e => setItemUnits(e.target.value)} />
            <input value={itemQuantity}  placeholder="Item Quantity" onChange={e => setItemQuantity(e.target.value)} />
            <button onMouseOver onClick={()=> (list.push({item:itemName, units:itemUnits, quantity: itemQuantity, isPurchased:false})) && setList([...list])}> Add Items</button>
            <h3> {itemList} </h3>
           
            </div>
        )
                
} 
        
        
export default Grocery;      
        
    