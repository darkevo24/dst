import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import data from "../images/data.png"
import web from "../images/web.png"
import lampu from "../images/lampu.png"
import Footer from './footer'

export default function whatWeOffer() {
  return (
    <div>
        <Navbar></Navbar>
        <div className=' mt-10 flex flex-col items-center'>
            <p className=' text-4xl font-bold'>What We offer</p>
            <div className=' flex mt-5 items-center justify-center'>
                <div className='m-10 hover:bg-blue-400 cursor-pointer rounded-full shadow-2xl'>
                    <Image src={data}></Image>
                </div>
                <div className='m-10 hover:bg-blue-400 cursor-pointer rounded-full shadow-2xl'>
                    <Image src={web}></Image>
                </div>
                <div className='m-10 hover:bg-blue-400 cursor-pointer rounded-full shadow-2xl'>
                    <Image src={lampu}></Image>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}
