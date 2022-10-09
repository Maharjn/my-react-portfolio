import React from 'react'
import Navbar from './nav/Navbar'
import Footersec from '../components/Footer/Footer'


export default function BaseLayout(props) {
  return (
    <main>

      {/* header */}
      <Navbar/>

      {/* content */}
      {props.children}


      {/* footer */}
      
      <Footersec/>

    </main>
  )
}
