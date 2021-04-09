import React from "react"
import Supertile from "../components/supertile"
import * as styles from "../components/supertile.module.css"


export default function Home() {
  return (
    <div>
      <Supertile theme={styles.light} to="/design/" src="/static/images/glasswalkeruxlogo.png"></Supertile>
      <Supertile theme={styles.dark} to="/media/" src="/static/images/glasswalkermedialogo.png"></Supertile>
    </div>
  )
}