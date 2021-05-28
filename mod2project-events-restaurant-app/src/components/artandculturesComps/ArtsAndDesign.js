import React, { useState, useEffect } from 'react'


function ArtsAndDesign() {
    
    const [artArticle, setArtArticle] = useState([])

       
  const loadWatch = () => {
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk.contains:("watching")&fq=source:("The New York Times")&page=1&page=2&sort=newest&api-key=LENP3jU16355lJAA1HGdGIhdEAlqu9ih')
    .then((response) => {
        return response.json()
    }).then( (data) => {
      
       setArtArticle(data.response.docs)
    
    }).catch((error) => console.log(error))
  }

  const loadArt = () => {
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")ANDq=art-and-design&page=2&sort=newest&api-key=LENP3jU16355lJAA1HGdGIhdEAlqu9ih')
    .then((response) => {
        return response.json()
    }).then( (data) => {
      
        setArtArticle(data.response.docs)
        
    
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
   
    loadArt()
 
}, [])
    
    return (
        <div>
            
       <h3 onClick={loadArt}> arts and design</h3>
       <h3 onClick={loadWatch}> What to Watch</h3>

       <div className="TrendingEventsContainer">  
       
       {(artArticle || []).map((i,n)=> 
         <div className="Home-pg-events"> <a href={i.abstract}>  <h3> {i.title} </h3> </a> <img width="200" src={'https://www.nytimes.com/'+i.multimedia[0].url} />  <p>  {i.snippet } <br/> {i.headline.main} </p>  
         </div>
           
       )}
 
 

</div>

        </div>
    )
}

export default ArtsAndDesign
