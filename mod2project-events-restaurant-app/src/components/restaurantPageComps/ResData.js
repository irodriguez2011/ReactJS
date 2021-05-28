import React, { useState, useEffect } from 'react'
import RestaurantStore from './RestaurantStore';


function ResData() {
  
    const [restaurants, setRestaurants] = useState([])
    const [inputCuisine, setinputCuisine] = useState('')
    const [zipCode, setZipCode] = useState('')
 
  /*    zip_code/11249?fullmenu=true  */


    useEffect(() => {
   
        
    
             
            }, [])

 
const handleSubmit = (e) => {
    
    fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}${inputCuisine.length? `?cuisine=${inputCuisine}`: ''}&fullmenu=true?key=8fb3ab62ffc46e2beb2b2fce0080bf43/1`, {
        "method": "GET", 
        "headers" : {
            "X-API-KEY": "8fb3ab62ffc46e2beb2b2fce0080bf43"
        }
        
    })
    .then(response => {
        return response.json();
    }).then(items => {

        console.log(items)

        setRestaurants(items.data.map( data => 
            <RestaurantStore name={data.restaurant_name} phone={data.restaurant_phone} website={ data.restaurant_website} cuisines={data.cuisines} address={data.adress} menu={data.menus} />
            ))
       
               
    })
    .catch(err => {
        console.error(err);
    });


}
    
  
  return (
        <div> 

     
     Search by Zipcode<input onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Search by cuisine, zip code, " value={zipCode} />
   and cuisine <input onChange={(e) => setinputCuisine(e.target.value)} type="text" placeholder="Search by cuisine, zip code, " value={inputCuisine} />
               
                    <input  onClick={handleSubmit} className="submit" type="button" value="Submit" />
                   
               

           <p> {restaurants.slice(0,10).map(items => 
           <ul>  
                    <li> {items} </li>
                    <li> </li>

           
             </ul> )} </p>


        </div>
    )
}

export default ResData
