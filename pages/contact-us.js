import React, { useState } from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import email from "../images/email.png"
import address from "../images/address.png"
import career from "../images/career.png"
import Footer from './footer'

export default function contactUs() {
  const [x,setX] = useState(150);
  const [y,setY] = useState(150);
  const [z,setZ] = useState(150);
  return (
    <div style={{ fontFamily:"Poppins" }}>
            <Navbar></Navbar>
    <div className=' flex flex-col items-center mt-10 p-5'>
      <p className=' text-4xl font-bold shadow-2xl'>Contact Us</p>
      <p className='mt-5'>If You Got Any Questions Please Do Not Hesitate To Send Us a Message</p>
      <div className=' flex lg:flex-row flex-col items-center justify-center'>
        <div className=' m-10 hover:bg-blue-500 cursor-pointer shadow-2xl'>
          <Image width={x} height={x} src={email}></Image>
        </div>
        <div  className=' m-10 hover:bg-blue-500 cursor-pointer shadow-2xl'>
          <Image width={y} height={y} src={address}></Image>
        </div>
        <div  className=' m-10 hover:bg-blue-500 cursor-pointer shadow-2xl'>
          <Image width={z} height={z} src={career}></Image>
        </div>
      </div>
    </div>

    <Footer></Footer>
    </div>
  )
}
