import React from "react"
import Medicine from "../../asset/images/Medicine.svg"
import "..//..//css/header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Card } from "./Card"
import { User } from "./User"
import { Link } from "react-router-dom"

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              <img src={Medicine} alt='Medicine' />
            </Link>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          <div className='account flexCenter'>
            <Card openState={false}/>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;
