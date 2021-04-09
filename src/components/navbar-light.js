import React from "react"
import { Link } from "gatsby"
import styles from "./navbar-light.module.css"


const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Navbar (){
  return (
        <header>
            <Link to="/"></Link>
            <ul>
            <ListLink to="/media">Home</ListLink>
            <ListLink to="/about/">Case Studies</ListLink>
            <ListLink to="/about/">About</ListLink>
            </ul>
        </header>      
  )
}