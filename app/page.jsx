import React from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import WeaterCard from './components/weatherCardLoaction/WeatherCard/WeaterCard'

const page = () => {
  return (
    <div>
      <div className='w-screen h-screen fixed top-0 left-0'>
        <img className='w-full h-full object-cover' src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      <WeatherCardLocation/>
      <WeaterCard/>
      
    </div>
  )
}

export default page