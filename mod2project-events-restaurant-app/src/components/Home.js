import { useState, useEffect } from 'react'
import Pic from './goodvibes_pic.jpg'
import fetch from 'node-fetch'
import {Link} from 'react-router-dom'

function Home() {
   
   
  
    const [article, setArticle] = useState([])

    useEffect(() => {
   
fetch('https://api.nytimes.com/svc/topstories/v2/dining.json?api-key=LENP3jU16355lJAA1HGdGIhdEAlqu9ih')
.then((response) => {
    return response.json()
}).then( (data) => {
  
    setArticle(data.results)
    console.log(data.results)

}).catch((error) => console.log(error))

     
    }, [])




    return (
       
        <section> 

        <div className ="header">
                <div className="imgDiv"> <img width="100%" height="100%" src={Pic}/> <div className="banner"> <p></p>  </div> </div>
               
               

        </div>
              <span>  <h1> Top Stories </h1> </span>

            <div className="topStories">  
              {article.slice(0,1).map((i,n)=> 
                    <div className="firstArticle"> <a href={i.short_url}>  <h3> {i.title} </h3> </a> <img className="firstArticlePic" width="500" src={i.multimedia[0].url} />  <p>  {i.abstract } <br/> {i.byline} </p>  
                    </div>
                      
                  )}

                <div className="organizeTopArticles"> 
                  {article.slice(1,3).map((i,n)=> 
                    <div className="top-right-articles"> <a href={i.short_url}>  <h3> {i.title} </h3> </a> <img width="150" src={i.multimedia[0].url} />  <p>  {i.abstract } <br/> {i.byline} </p>  
                    </div>
                    
                  )}
                  </div>
                  </div>
            <section className="middle-content"> 
            
        <div className="TrendingEventsContainer">  
       
                  
            
            
        
         </div>

         <div className="TrendingEventsContainer2">  
       <span>   </span>
       {article.slice(3,8).map((i,n)=> 
                    <div className="Home-pg-events"> <a href={i.short_url}>  <h3> {i.title} </h3> </a>  <img width="200" src={i.multimedia[0].url} /> <p>  {i.abstract } <br/> {i.byline} </p>  </div>
                      
                  )}
            
            
         
            
        
         </div>
         

         </section>

         <div className="buttonDiv"> 

         {article.slice(8,12).map((i,n)=> 
                    <div > <a href={i.short_url}>  <h3> {i.title} </h3> </a>  <img width="200" src={i.multimedia[0].url} /> <p>  {i.abstract } <br/> {i.byline} </p>  </div>
                      
                  )}
         
         <Link to="/restaurants"> <button> View</button> </Link> </div>
        </section>
    )
}

export default Home
