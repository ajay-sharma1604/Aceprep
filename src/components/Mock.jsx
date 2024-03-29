import React from 'react'
import Image from './Mock/Image'
import Text from './Mock/Text'
import ImageCards from './Mock/ImageCards'
import Navbar from './Main/Navbar'

function Mock() {
  return (
    <div>
      <Navbar />
        <Image/>
        <Text/>
        <ImageCards/>
    </div>
  )
}

export default Mock