import Image from 'next/image'
import React from 'react'
import dst from "../../images/DST.png"

export default function Footer() {
  return (
    <div className=' mt-10  flex items-center justify-center flex-col text-2xl italic mt-5 text-center'>
        <div className=' w-full border-2 border-blue-400'>
        </div>
        <div className=' bg-blue-300 w-full'>
            <div className=' w-full flex justify-center'>
            <div className='shadow-2xl w-52 h-44 mt-3 rounded-3xl'>
                <Image width={200} height={200} src={dst}></Image>
            </div>
            </div>
        <p>Your Trusted Partner for Data Storage Solution</p>
        <p>Margomulyo Permai AC 10</p>
        <p>SURABAYA</p>
        </div>
    </div>
  )
}
