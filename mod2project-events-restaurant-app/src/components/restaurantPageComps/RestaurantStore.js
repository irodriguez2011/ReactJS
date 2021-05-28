import React, {useState} from 'react'



function RestaurantStore({name,phone,website,priceRange,cuisines,address,menu}) {
    
   const [isModal, setIsModal] = useState(false)
   

      const showModal = () => {
           setIsModal(true)
           console.log('bye')
      }
     
      const closeModal = () => {
                setIsModal(false)
                console.log('hello')
      }

    return (
        <div> 

<div onClick={showModal}  className="resStoreDiv">
            <ul> 
             <li> {name} </li>
            <li> {phone} </li>
             <li> {website} </li>
             <li> {priceRange} </li>
             <li> {cuisines.join(" ,")} </li>
             <li> {address}</li>
            
            </ul>
             
             

        </div>

        <div className="modal" onClick={closeModal} style={{display:isModal ? "block" : "none"}}> 

                    <div className="modal-content" > {menu.map(sub => {
                        console.log(sub)
                            const sections= sub.menu_sections
                            const unified = sections.map(section => {
                                    const toReturn = {}
                                    toReturn.name=section.section_name
                                    toReturn.items = section.menu_items.map(n => ({name:n.name, description:n.description,price:n.price}))
                                    return  <div> <p> {toReturn.name}  </p> <ul> {toReturn.items.map(n => <li> <h3> {n.name} </h3> <p> {n.description} ${n.price} </p>  </li> )} </ul></div>


})
                            
                        return unified

                    })} </div>
             
             
              </div>


        </div> 
    )
}

export default RestaurantStore
