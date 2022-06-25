import React from 'react'
import Navbar from './navbar'
import dataCenter1 from "../images/data-center1.jpg"
import dataCenter3 from "../images/data-center03.jpg"
import dataCenter4 from "../images/data-center3.jpg"
import Image from 'next/image'
import dataCenter2 from "../images/data-center2.jpg"
import Footer from './footer'

export default function AboutUs() {
  return (
    <div>
        <Navbar ></Navbar>

    <div className=' flex items-center'>
        <div className=' w-full p-5 '>
            <p>DST is a revolutionary concept in this new era of data centre. An Edge Computing Server with decentralized server farm, focuses on easy accessibility, flexibility, composed of multiple compact data centres spread across every edge of cities, even countries. Our Data Centres use the latest hyperconverged technology, and have many special advantages, because of the decentralization there will not be any single point of failure, it is not like a conventional data centre. Our availability can be compared to a Tier 4 DC but with more efficient in costs and lower total investment, more agile, and more secured, safer, none zero downtime, having the quickest and shortest path from users to access their servers anywhere in the world.</p>
        </div>
        <div className=' w-full fade-right'>
            <Image src={dataCenter1}></Image>
        </div>
    </div>

    <div className=' flex items-center'>
    <div className=' w-full fade-left'>
            <Image src={dataCenter2}></Image>
        </div>
        <div className=' w-full p-5 '>
            <p>Our Latest technologies are prepared to face the next era of Industrial Revolution 4.0, such as Machine Learning, Artificial Intelligent, Blockchain platform, Internet of Things, and many more. We want every user not to just follow the future, but to be The Future. Our mission is to build decentralized data centres at every edge of the world, across 100.000 cities, preparing the world for new era of industry, the more they are built the more they can approach and serve every user with more friendly applications, more secure, cheaper, and quicker access. We would like to bring this opportunity to any person or institution to join and realize this mission.</p>
        </div>
    </div>

    <Footer></Footer>

    </div>
  )
}
