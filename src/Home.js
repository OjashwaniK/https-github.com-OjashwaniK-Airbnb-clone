import React from 'react'
import Banner from './Banner'
import './Home.css'
import Cards from './Cards'


function Home() {
  return (
    <div className='home'>
        <Banner/>
        
       
  
        
       <div className='card_section'>
            
           <Cards
             src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80'
             title='Entire loft,New Delhi'
             description='Its the first time an visiting delhi I really had a great room In Hauz.'
             price='40$/Night'
             rating='4.5(204)'/>
             
           <Cards
             src='https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
             title='Entire service,'
             description='The roof top is amazing and the entire place is well thought. '
             price='30$/Night'
             rating='4.5(407)'/>
             

           <Cards
             src='https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
             title='Entire service,Banglore'
             description='As someone who books Airbnb often, feels Happy!!'
             price='50$/Night'
             rating = '4.8(506)'
             />
       </div>
       <div className='card_section'>
            
            <Cards
              src='https://images.unsplash.com/photo-1472207241423-9e30d66d4b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZsYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
              title='Entire loft,New Delhi'
              description='Its the first time an visiting delhi I really had a great room In Hauz.'
              price='40$/Night'
              rating='4.5(204)'/>
              
            <Cards
              src='https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmxhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
              title='Entire service,'
              description='The roof top is amazing and the entire place is well thought. '
              price='30$/Night'
              rating='4.5(407)'/>
              
 
            <Cards
              src='https://images.unsplash.com/photo-1613214756180-9dd21ae795bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZsYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
              title='Entire service,Banglore'
              description='As someone who books Airbnb often, feels Happy!!'
              price='50$/Night'
              rating = '4.8(506)'
              />
        </div>
       
   </div>
  )
}

export default Home