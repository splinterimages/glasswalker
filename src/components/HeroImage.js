import React from "react"
import clsx from "clsx"
import * as styles from "./HeroImage.module.css"



export default function HeroImage ({ theme, logosrc, blurb1, blurb2 }){
  const HeroImageClass = clsx(styles.HeroImage, theme);
  const Layout = clsx(styles.Layout);

  return (



      <div className={HeroImageClass}>
        <div className={Layout}>
          <img src={logosrc} alt="" title="Glasswalker Logo"></img>
          <hr></hr>
          <p>{blurb1}</p>
          <p>{blurb2}</p>
        </div>
      </div>




  )
}