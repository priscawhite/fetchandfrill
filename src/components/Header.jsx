import "./Header.css"
import icon from "../assets/images/fetch-and-frill-icon.png"
import { Link } from "react-router-dom"

export function Header({ onHamburgerClick }) {
    return (
        <div className="header">
            <Link to="/">
                <img src={icon} alt="icon" width="80"/>
            </Link>
            <button className="hamburger" onClick={onHamburgerClick} aria-label="Toggle menu">
                <span /><span /><span />
            </button>
        </div>
    )
}