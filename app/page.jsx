import React from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import WeaterCard from './components/weatherCardLoaction/WeatherCard/WeaterCard'
import SideBar from './components/sidebar/SideBar'

const page = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed top-0 left-0 -z-50'>
        <img className='w-full h-full object-cover' src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      {/* <WeaterCard/> */}
      <SideBar/>
      <WeatherCardLocation location={"delhi"} temprapure={"35 deg"}/>
      
      
    </div>
  )
}

export default page