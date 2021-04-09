import React from "react"
import clsx from "clsx"
import * as containerStyles from "./footer.module.css"


export default function SiteFooter ({ theme, logosrc, copyright }){
  const SiteFooterClass = clsx(containerStyles.SiteFooter, theme);

  return (
    <div className={SiteFooterClass}>
        <hr></hr>
        <p>{copyright}</p>
        <img src={logosrc} alt="" title="Glasswalker Logo"></img>     
    </div>
  )
}