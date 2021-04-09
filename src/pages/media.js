import React from "react"
import Navbar from "../components/navbar-dark"
import HeroImage from "../components/HeroImage"
import * as styles from "../components/HeroImage.module.css"

export default function Media() {
    return (
      <div>
        <Navbar></Navbar>
        <HeroImage
          theme={styles.dark} 
          logosrc="/static/images/glasswalkermedialogo.png"
        >
        </HeroImage>
      </div>
      
    )
  }