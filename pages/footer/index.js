import Image from 'next/image'
import React from 'react'
import dst from "../../images/DST.png"

export default function Footer() {
  return (
    <div style={{ fontFamily:"Poppins" }} className=' mt-20  flex items-center justify-center flex-col text-2xl italic mt-5 text-center'>
        <div className=' w-full'>
            <div className=' w-full flex justify-center'>
            <div className='w-52 h-44 mt-3 rounded-3xl'>
                <Image width={200} height={200} src={dst}></Image>
            </div>
            </div>
        <p className=' mt-5'>Your Trusted Partner for Data Storage Solution</p>
        <p>Margomulyo Permai AC 10</p>
        <p>SURABAYA</p>
        </div>
    </div>
  )
}
