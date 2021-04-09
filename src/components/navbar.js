import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"


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
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">Photography</ListLink>
            <ListLink to="/contact/">Video</ListLink>
            <ListLink to="/contact/">Case Studies</ListLink>
            <ListLink to="/about/">About</ListLink>
            </ul>
        </header>      
  )
}