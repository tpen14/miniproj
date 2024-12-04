import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
export default function Header(){
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        {/* <Link to="/"><img src="https://placeholder.pics/svg/120x50" alt="Logo"/></Link> */}
        <Link to="/" className='title'>KeyStaxx</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            {/* <FontAwesomeIcon icon={faBars} className='bars'/> */}
        </div>
        <ul className={menuOpen?'open':''}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">Contact Us</NavLink>
            </li>
        </ul>
    </nav>
  )
}