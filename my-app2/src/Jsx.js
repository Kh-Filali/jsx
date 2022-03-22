import React from 'react'
import imageInSrc from './unnamed.jpg'

const Jsx = () => {
  return (
    <>

<div style={{ border:"solid 1px black" ,maxWidth: "100vw"}}>

<h1 class="title red">Your name here</h1>

<br />

<img src={imageInSrc} alt ="test" />

<br />

<img src="/R.png" alt ="test" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </>
  )
}

export default Jsx