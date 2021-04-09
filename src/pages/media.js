import React from "react"
import Navbar from "../components/navbar-dark"
import Footer from "../components/footer"
import HeroImage from "../components/HeroImage"
import * as styles from "../components/HeroImage.module.css"
import "./media.css"

export default function Media() {
    return (
      <div>
        <Navbar></Navbar>
        <HeroImage
          theme={styles.dark} 
          logosrc="/static/images/glasswalkermedialogo.png"
          blurb1="My name is Nathan Richardson, and I am a travel, 
          landscape and editorial photographer."
          blurb2="Whitegate | Cork | Ireland"
        >
        </HeroImage>
        <Footer></Footer>
      </div>
      
    )
  }