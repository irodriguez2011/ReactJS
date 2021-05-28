import React from 'react'
import ResData from './restaurantPageComps/ResData'

function Restaurants() {
    return (
        <section>   

        <div className="restaurantsHeader"> 
             <h1 className="restaurantsH1"> Search Restaurants</h1>

             </div>
       

        <p> <ResData/> </p>
        </section>
    )
}

export default Restaurants
