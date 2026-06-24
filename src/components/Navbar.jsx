import { Link } from "react-router-dom"
import "./Header.css"

export function Navbar({ cart = [], menuOpen, onClose }) {
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)
    return (
        <div className={`navbar${menuOpen ? " open" : ""}`} onClick={onClose}>
            <Link to="/">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Cart">Cart {totalQty > 0 && `(${totalQty})`}</Link>
        </div>
    )
}