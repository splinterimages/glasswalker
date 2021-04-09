import React from "react"
import Navbar from "../components/navbar-dark"
import Footer from "../components/footer"
import HeroImage from "../components/HeroImage"
import * as HeroStyles from "../components/HeroImage.module.css"
import * as FooterStyles from"../components/footer.module.css"
import "./media.module.css"

export default function Media() {
    return (
      <div>
        <Navbar></Navbar>
        <HeroImage
          theme={HeroStyles.dark}
          logosrc="/static/images/glasswalkermedialogo.png"
          blurb1="My name is Nathan Richardson, and I am a travel, 
          landscape and editorial photographer."
          blurb2="Whitegate | Cork | Ireland"
        >
        </HeroImage>
        
        Some other content

        <Footer
        theme={FooterStyles.dark}
        logosrc="/static/images/glasswalkermedialogo.png"
        copyright="Copyright 2021 © Nathan Richardson, Glasswalker Media. All Rights Reserved."
        ></Footer>
      </div>
      
    )
  }