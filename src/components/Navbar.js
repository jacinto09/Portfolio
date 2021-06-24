import React,{useState} from 'react'
import {FaBars, FaTimes,} from 'react-icons/fa'
import logo from '../images/Logo.png'
function Navbar() {

    const [open, setOpen] = useState(false)

   const openClick = ()=>{
        setOpen(!open)
    }
    return (
        <nav className="navbar  animate__animated  animate__fadeInUp ">
            <ul className="nav-links">
            <li className="nav-link">
                   <img src={logo} alt="" className="logo"/>
                   <h3>Jacinto Martinez</h3>
                   <p className="p-job">Web & UI Developer</p>
                </li>
                <li className="nav-link bars ">
                    <h3 className="h-menu" onClick={openClick}>{open? "CLOSE" : "MENU"}</h3>
                    {open?<FaTimes className="fa-times" onClick={openClick}/>:<FaBars className="fa-bars" onClick={openClick}/>}
                    
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
