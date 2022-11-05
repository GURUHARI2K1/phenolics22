import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import logo from '../images/logo.png'
import { toggleHide } from '../utils'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        setActive(!active)
        toggleHide()
    }
    return(
        <nav className={`${menu?'open':''} container`}>
            <a href="#"><img src={logo} alt="logo" /></a>
            <span>CIPET</span>
            <div className="hm" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${active?'active':''} hidden`} onClick={handleMenu}></div>
            <div className='menu'>
                <div className="bg"></div>
                <span onClick={handleMenu}><Link to="/">Home</Link></span>
                <span onClick={handleMenu}><Link to="/events">Events</Link></span>
                <span onClick={handleMenu}><Link to="#about">About</Link></span>
                <span onClick={handleMenu}><Link to="#">Contact</Link></span>
            </div>

        </nav>
    )
}
export default Navbar