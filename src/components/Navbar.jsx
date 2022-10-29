import React, {useState} from 'react'
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
                <span>Home</span>
                <span>Events</span>
                <span>About</span>
                <span>Contact</span>
            </div>

        </nav>
    )
}
export default Navbar