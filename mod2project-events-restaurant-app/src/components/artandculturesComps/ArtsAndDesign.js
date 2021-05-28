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
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")ANDq=art-and-design&page=2&fq=section_name.contains:(" art and design")&sort=newest&api-key=LENP3jU16355lJAA1HGdGIhdEAlqu9ih')
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
            
        <div className="article-heading">  

       <h3 onClick={loadArt}> Arts And design |</h3> 
       <h3 className="what-to-watch"  onClick={loadWatch}> What To Watch</h3>

       </div>


       <div className="TrendingEventsContainer">  
       
       {(artArticle || []).map((i,n)=> 
         <div className="Home-pg-events"> <a href={i.web_url}>    <h2> {i.headline.main}  </h2> </a> <img width="200" src={'https://www.nytimes.com/'+i.multimedia.url} />  <p>  <p> <em>{i.abstract} </em> </p>  {i.lead_paragraph } </p> 
         </div>
           
       )}
 
 

</div>

        </div>
    )
}

export default ArtsAndDesign
