import React from 'react'

function HouseCard() {
  return (
<div className="house-card">
    <h2>House Title</h2>
    <p>House description goes here.</p>
            <video width="320" height="240" controls autoPlay muted loop playsInline> 
              <source src="house-video.mp4"
                  type="video/mp4"/>
        Your browser does not support the video tag.
          </video>
          
</div>
  )
}

export default HouseCard

