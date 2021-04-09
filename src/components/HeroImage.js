import React from "react"
import clsx from "clsx"
import * as styles from "./HeroImage.module.css"



export default function HeroImage ({ theme, logosrc, blurb }){
  const HeroImageClass = clsx(styles.HeroImage, theme);
  const Layout = clsx(styles.Layout);

  return (



      <div className={HeroImageClass}>
        <div className={Layout}>
          <img src={logosrc} alt="" title="Glasswalker Logo"></img>
          <hr></hr>
          <p>My name is Nathan Richardson, and I am a travel, 
            landscape and editiorial photographer.</p>
            <p>Whitegate | Cork | Ireland</p>
        </div>
      </div>




  )
}