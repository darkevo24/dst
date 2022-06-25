import { Button, Slide } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar/index"
import dataCenter2 from "../images/data-center2.jpg"
import hand from "../images/hand.png"
import rocket from "../images/rocket.png"
import stock from "../images/stock.png"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ups from "../images/ups.png"
import rack from "../images/rask.png"
import cctv from "../images/cctv.png"
import cable from "../images/cable.png"
import cloud from "../images/cloud.png"
import wa from "../images/wa.png"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import dataCenter1 from "../images/data-center1.jpg"
import dataCenter3 from "../images/data-center03.jpg"
import dataCenter4 from "../images/data-center3.jpg"
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './footer'
import { useRouter } from 'next/router'
import img2 from "../images/data-center02.jpg"

export default function Home() {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className=' text-sm' style={{ background:"linear-gradient(to right,white,skyblue)",fontFamily:"Poppins"}}>
    <Navbar></Navbar>

    <div className='shadow-2xl' >
        <div className='openn'>
          <Image height={600} src={dataCenter3}></Image>
        </div>
    </div>

    <div style={{ padding:"20px",display : "flex",justifyContent:"center" }}>
      <div className='shadow-2xl flex flex-col items-center' style={{ padding:"20px",width:"80%",background:"linear-gradient(to right,white,skyblue)" }}>
        <h1 className=' text-3xl text-center'>Welcome to DST</h1>
<h3 className=' text-xl text-center'>Your Neighborhood Data Storage Solution</h3>
<button onClick={function(){
    router.push("/about-us");
}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
  More Information
</button>
      </div>
    </div>

    <div style={{ marginTop:"20px",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",alignItems : "center" }}>
      <div className='p-5 shadow-2xl' style={{ display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"80%",background:"linear-gradient(to right,white,skyblue)"}}>
      <h2 className=' text-2xl'>Envision Digital Transformation with Limitless and Endless Possibilities</h2>
    <div className=' text-xl sm:flex-row flex-col flex' style={{ display : 'flex',alignItems : 'center' ,justifyContent:"center" }}>
      <div style={{ margin:"20px",display : "flex",alignItems : 'center' ,justifyContent:"center",flexDirection:"column" }}>
      <RocketLaunchIcon />
        <h3 className=' mt-3'>Future Generation</h3>
      </div>
      <div style={{ margin:"20px",display : "flex",alignItems : 'center' ,justifyContent:"center",flexDirection:"column" }}>
        <div>
        <HandshakeIcon />
        </div>
        <h3 className=' mt-3' >Business Relationship</h3>
      </div>
      <div style={{ margin:"20px",display : "flex",alignItems : 'center' ,justifyContent:"center",flexDirection:"column" }}>
        <div className=' relative bottom-1'>
        <ShowChartIcon fontSize='large' />
        </div>
        <h3>Rising Trend</h3>
      </div>
      </div>
    </div>
    </div>

    <div style={{ marginTop:"20px",display : 'flex',alignItems : 'center' ,justifyContent:"center", flexDirection:"column",background:"linear-gradient(to right,white,skyblue)"}}>
      <div className='p-5 shadow-2xl' style={{ display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"80%" ,background:"linear-gradient(to right,white,skyblue)" }}>
      <h2 className=' text-2xl' style={{ textDecoration:"underline"  }}>Our Commitment:</h2>
      <br></br>
      <p className=' text-lg text-center'>We provide the best, practical ecosystem, and most efficient infrastructure, to support all users to develop their visions.</p>
    </div>
    </div>

    <div style={{ marginTop : "10px",display : 'flex',alignItems : 'center' ,justifyContent:"center", flexDirection:"column"}}>
    <div className='p-5 shadow-2xl' style={{ display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",width:"80%" ,background:"linear-gradient(to right,white,skyblue)" }}>
    <h2 className=' text-2xl' style={{ textDecoration:"underline"  }}>
VARIOUS PRODUCTS AND SOLUTIONS:</h2>
    <div className=' flex-col lg:flex-row' style={{ display : "flex", alignItems : "center" }}>
      <div onMouseOver={function(){
          document.getElementsByClassName("price")[0].classList.remove("hidden");
      }} 
      onMouseOut={function(){
        document.getElementsByClassName("price")[0].classList.add("hidden");
      }}
      className=' ' style={{ margin:"20px" }}>
        <Image width={200} height={200} src={cable}></Image>
        <div className='bg-white absolute w-40 h-10 hidden price flex items-center justify-center'>
          <p>Price :20.000 IDR</p>
        </div>
      </div>
      <div onMouseOver={function(){
          document.getElementsByClassName("price")[1].classList.remove("hidden");
      }} 
      onMouseOut={function(){
        document.getElementsByClassName("price")[1].classList.add("hidden");
      }} style={{ margin:"20px" }}>
        <Image width={200} height={200} src={rack}></Image>
        <div className='bg-white absolute w-40 h-10 hidden price flex items-center justify-center'>
          <p>Price :20.000 IDR</p>
        </div>
      </div>
      <div onMouseOver={function(){
          document.getElementsByClassName("price")[2].classList.remove("hidden");
      }} 
      onMouseOut={function(){
        document.getElementsByClassName("price")[2].classList.add("hidden");
      }} style={{ margin:"20px" }}>
        <Image width={200} height={200} src={cctv}></Image>
        <div className='bg-white absolute w-40 h-10 hidden price flex items-center justify-center'>
          <p>Price :20.000 IDR</p>
        </div>
      </div>
      <div onMouseOver={function(){
          document.getElementsByClassName("price")[3].classList.remove("hidden");
      }} 
      onMouseOut={function(){
        document.getElementsByClassName("price")[3].classList.add("hidden");
      }} style={{ margin:"20px" }}>
        <Image width={200} height={200} src={ups}></Image>
        <div className='bg-white absolute w-40 h-10 hidden price flex items-center justify-center'>
          <p>Price :20.000 IDR</p>
        </div>
      </div>
    </div>

    </div>
    </div>

    <div style={{ marginTop : "20px",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",alignItems : "center" }}>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Learn More
</button>
    </div>

    <div style={{marginTop : "20px",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",alignItems : "center" }}>
     <div className='p-5 shadow-2xl' style={{ width:"80%",background:"linear-gradient(to right,white,skyblue)" }}>
      <h2 className=' text-2xl' style={{ textAlign:"center" }}>INQUIRY OF OUR PRODUCTS & SERVICES</h2>
      <h2 className=' text-2xl text-center'>Our Support Team Member Will Be Ready to Help You</h2>
<div className=' flex-col lg:flex-row mt-4' style={{display:"flex",alignItems:"center" ,justifyContent:"center"}}>
  <p>CONTACT OUR HOTLINE</p>
  <div className='item'>
    <Image width={80} height={80} src={wa}></Image>
  </div>
  <p>08233 3311 2268 (PHONE & WA)</p>
</div>
<div className=' flex-col lg:flex-row mt-4' style={{display:"flex",alignItems:"center" ,justifyContent:"center"}}>
  <p>CONTACT OUR SUPPORT TEAM</p>
  <div>
    <Image width={80} height={80} src={wa}></Image>
  </div>
  <p>0821 4303 1697 (PHONE & WA)</p>
</div>
    </div>
    </div>

    <div style={{ marginTop : "20px",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",alignItems : "center" }}>
    <a href="mailto:timotius_albert@yahoo.com" className='hover:underline cursor-pointer'>Send Email </a>
    </div>

    <div style={{ marginTop : "20px",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center" }}>
      <div className='p-5 shadow-2xl' style={{ width:"80%",display : "flex",flexDirection:"column",alignItems:"center" ,justifyContent:"center",background:"linear-gradient(to right,white,skyblue)" }}>
        <h3 className=' text-2xl'>Or leave your contact information and we will contact you...</h3>
        <div className=' flex-col lg:flex-row' style={{ display : 'flex',alignItems:"center" }}>
          <div style={{ margin:"20px" }}>
            <h4>Name</h4>
            <input type="text"></input>
          </div>
          <div style={{ margin:"20px" }}>
            <h4>Telephone</h4>
            <input type="tel"></input>
          </div>
          <div style={{ margin:"20px" }}>
            <h4>Email</h4>
            <input type="email"></input>
          </div>
        </div>
        <p className=' text-xl'>DST representative staff will immediately contact you again</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
  Submit
</button>
      </div>
    </div>
    
    <Footer></Footer>

    </div>
  )
}
