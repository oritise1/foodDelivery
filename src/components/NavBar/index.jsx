import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/logo.svg'
import './index.css'

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="NavbarWrapper">
                <div className='NavbarContentWrapper'>
                    <Logo className='img'/>
                    <h2 className="title">
                        Lilies
                    </h2>
                </div>
                <div className="IconWrapper">
                    <ul>
                        <li>Home</li>
                        <li onClick={() => navigate('/login')}>Login</li>
                    </ul>
                    <button onClick={() => navigate("/signup")} className="signIn">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar