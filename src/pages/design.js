import React from "react"
import Navbar from "../components/navbar-dark"
import Footer from "../components/footer"
import HeroImage from "../components/HeroImage"
import * as HeroStyles from "../components/HeroImage.module.css"
import * as FooterStyles from"../components/footer.module.css"
import "./design.module.css"


export default function Design() {
    return (
      <div>
        <Navbar></Navbar>
        <HeroImage
          theme={HeroStyles.light} 
          logosrc="/static/images/glasswalkeruxlogo.png"
          blurb1="My name is Nathan Richardson, and I am 
          a UX, UI, and Digital Product Designer."
          blurb2="Whitegate | Cork | Ireland"
        >
        </HeroImage>

          Some content

        <Footer
        theme={FooterStyles.light}
        logosrc="/static/images/glasswalkeruxlogo.png"
        copyright="Copyright 2021 © Nathan Richardson, Glasswalker UX. All Rights Reserved."
        ></Footer>
      </div>
      
    )
  }