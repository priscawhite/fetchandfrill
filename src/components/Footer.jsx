import { Link } from "react-router-dom";
import instagramLogo from "../assets/images/instagram.png" 
import facebookLogo from "../assets/images/facebook.png"
import twitterLogo from "../assets/images/twitter.png"
import "./Footer.css"


export function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-socials">
                        <p className="col-header">Fetch & Frill</p>
                        <p>Fetch & Frill brings together modern design, trendy accessories, and premium pet essentials for dogs who deserve to stand out</p>
                        <p className="col-header">Sign up for our newsletter</p> 
                        <p>Be the first to hear about our upcoming curations</p>
                        <label>Email address: </label>
                        <input placeholder="Email address"/>&emsp;
                        <button>Submit</button><br></br>
                        <div className="social-links">
                            <Link to="https://instagram.com"><img src={instagramLogo} alt="Instagram Logo" height="30" width="30" target="_blank"/></Link>
                            <Link to="https://facebook.com"><img src={facebookLogo} alt="Facebook Logo" height="30" width="30" target="_blank"/></Link>
                            <Link to="https:/x.com"><img src={twitterLogo} alt="Twitter Logo" height="30" width="30" target="_blank"/></Link>
                        </div>
                    </div>
                    <div className="link-list">
                        <p className="col-header">Helpful Links</p>
                        <Link to="/contact#faqs">FAQs</Link><br></br>
                        <Link to="/contact#shipping">Shipping Policy</Link><br></br>
                        <Link to="/contact#shipping">Returns & Exchanges</Link><br></br>
                        <Link to="/contact#privacy">Privacy Policy</Link><br></br>
                        <Link to="/contact#terms">Terms of Service</Link><br></br>
                    </div>
                    <div className="link-list">
                        <p className="col-header">Navigation</p>
                        <Link to="/">Home</Link><br></br>
                        <Link to="/about">Our Story</Link><br></br>
                        <Link to="/shop">Shop All</Link><br></br>
                        <Link to="/contact">Contact Us</Link><br></br>
                        <Link to="/cart">Cart</Link>
                    </div>
                </div>
            <p>&copy; {new Date().getFullYear()} Fetch & Frill. All rights reserved.</p>

            </footer>
</>
    )
}