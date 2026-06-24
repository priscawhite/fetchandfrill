import { useState } from "react"
import { Header } from "./Header"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
import "../App.css"

export function Layout({ cart = [] }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="layout-container">
            <div className="header-container">
                <div className="layout-inner">
                    <Header onHamburgerClick={() => setMenuOpen(o => !o)} />
                    <Navbar cart={cart} menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                </div>
            </div>
            <main className="main-content layout-inner">
                <Outlet/>
            </main>
            <footer className="footer-full">
                <Footer/>
            </footer>
        </div>
    )
}