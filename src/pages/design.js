import React from "react"
import Navbar from "../components/navbar-light"
import Footer from "../components/footer"
import HeroImage from "../components/HeroImage"
import * as styles from "../components/HeroImage.module.css"
import "./design.css"


export default function Desgn() {
    return (
      <div>
        <Navbar></Navbar>
        <HeroImage
          theme={styles.light} 
          logosrc="/static/images/glasswalkeruxlogo.png"
          blurb1="My name is Nathan Richardson, and I am 
          a UX, UI, and Digital Product Designer."
          blurb2="Whitegate | Cork | Ireland"
        >
        </HeroImage>

        <Footer></Footer>
      </div>
      
    )
  }