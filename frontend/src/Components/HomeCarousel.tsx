import React from 'react'
import '../pages/Home/Home.css'
 
function HomeCarousel({img, head, desc1, desc2}:any) {
  return (
    <>
        <img className='cover-image' src={img} alt="" />
        <div className="nav-links">
          <h1>{head}</h1>
          <h4> {desc1} <br/>{desc2}</h4>
        </div>
    </>
  )
}

export default HomeCarousel