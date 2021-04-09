import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import * as styles from "./supertile.module.css"



export default function Supertile ({ to, theme, src }){
  const superTileClass = clsx(styles.superTile, theme);
  return (
    <Link to={to}>
      <div className={superTileClass}>
        <img src={src} alt="Image" title="Glasswalker Logo"></img>
      </div>
    </Link>

    
  )
}