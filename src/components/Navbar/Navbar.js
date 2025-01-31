import React, { useState, useEffect } from 'react'

// REACT ICONS
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

// GLOBAL STYLES
import { Button } from '../../globalStyles'

// COMPONENT'S ELEMENTS
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'

const Navbar = () => {

const [ click, setClick ] = useState(false);
const [ button, setButton ] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if (window.innerWidth  <= 960){
        setButton(false);
    } else {
        setButton (true);
    }
}

useEffect(() => {
     showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
        <>
         <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/ultra-landing-page" onClick={closeMobileMenu}> 
                        <NavIcon />
                            ULTRA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>  
                        {click ? <FaTimes/> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/ultra-landing-page">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products">
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>Sign Up</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>Sign Up</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>   
        </IconContext.Provider>
        </>
    )
}

export default Navbar