// IMPORTS
import CartWidget from "../CartWidget/CartWidget";
import FutbolSolid from "./Logo/FutbolSolid";
import LogoUser from "../CartWidget/LogoUser";
import "./NavBar.css";
import { NavLink, Link } from 'react-router-dom'


// COMPONENTE
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid navbar-prop">
                    <div className="prop-logo-flex">
                    <Link to='/'>
                    <a className="navbar-brand" href="#">JSport</a>
                    </Link>
                    <FutbolSolid />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to={`/camisetas/todas`} className="nav-link prop-link">Home</NavLink>
                            <NavLink to={`/camisetas/america`} className={({ isActive}) => isActive ? 'ActiveOption nav-link prop-link' : 'Option nav-link prop-link'}>Camisetas de America</NavLink>
                            <NavLink to={`/camisetas/europa`} className={({ isActive}) => isActive ? 'ActiveOption nav-link prop-link' : 'Option nav-link prop-link nav-link prop-link' }>Camisetas de Europa</NavLink>
                        </div>
                        <CartWidget />
                        <LogoUser />
                </div> 
                </div>
            </nav>
        </> 
    )
}


// EXPORTS
export default NavBar
