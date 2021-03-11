import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function Caro({val}) {
  console.log(val);
  return (
    <Carousel>
      <div>
         <img className="" src={val[0]} alt=""/> 
      </div>
     <div>
       <img className="" src={val[1]} alt=""/> 
     </div>
      <div>
        <img className="" src={val[2]} alt=""/> 
      </div>
      
 {/* <img className="object-contain" src={image1} alt=""/> 
 { image2 !== "" ?  <img className="object-contain" src={image2} alt=""/> : <></> }
          { image3 !== "" ? <img className="object-contain" src={image3} alt=""/> : <></> } */}
      
  </Carousel>
  )
}
