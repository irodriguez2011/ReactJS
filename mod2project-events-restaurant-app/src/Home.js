import React from 'react'
import Pic from './nycpic.jpg'

function Home() {

    const yelp = require('yelp-fusion');
const client = yelp.client('QIJtfLwDdfU67LU2mAG8a-ywrZPrlMHmn1YV4R9lBXgz0ta1zA0RwWVu2GLjnl5WVOvO9wY8mBfWC2mXPCshLYKtTQYsxDBB2CX0D5cN7KQ88DgTis720SovfgerYHYx');
 
client.eventSearch({
  categories: 2,
  is_free: true,
  location: 'claremont, ca'
}).then(response => {
  console.log(response.jsonBody.events[0].name);
}).catch(e => {
  console.log(e);
});
     




    return (
       
        <section> 

        <div className ="header">
                <div className="imgDiv"> <img width="650" height="434" src={Pic}/> </div>
            <div className="headerText"> <h1> Home page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ac felis donec et odio pellentesque diam volutpat. Tortor posuere ac ut consequat semper viverra nam libero justo. Enim sed faucibus turpis in eu mi. Urna id volutpat lacus laoreet. Ultrices neque ornare aenean euismod elementum nisi quis. Enim nulla aliquet porttitor lacus luctus. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec.  </p>
            </div>
        </div>

            <section className="middle-content"> 

        <div className="TrendingEventsContainer">  
       <span>  <h2> Trending Events </h2> </span>
            <div className="Home-pg-events"> content </div>
            <div className="Home-pg-events"> content </div>
            <div className="Home-pg-events"> content</div>
            <div className="Home-pg-events"> content </div>
            <div className="buttonDiv"> <button> View</button> </div>
        
         </div>

         <div className="TrendingEventsContainer">  
       <span>  <h2> Tops Restaurants </h2> </span>
            <div className="Home-pg-events"> content </div>
            <div className="Home-pg-events"> content </div>
            <div className="Home-pg-events"> content</div>
            <div className="Home-pg-events"> content </div>
            <div className="buttonDiv"> <button> View</button> </div>
         
            
        
         </div>


         </section>

        </section>
    )
}

export default Home
