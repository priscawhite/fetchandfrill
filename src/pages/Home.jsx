import { Link } from "react-router-dom";
import "../Pages.css"
import distinguishedDoggo from "../assets/images/distinguished-doggo.png"
import ribbon from "../assets/images/blue-ribbon.jpg"
import ProductGrid from "../components/ProductGrid"

export function Home({ cart, setCart }) {
    return (
        <>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Fetch & Frill</h1>
                    <p>Where stylish pups and savvy pet parents discover thoughtfully curated dog accessories, toys, treats, and essentials with an approachable touch of luxury</p>
                    <img className="blue-ribbon" src={ribbon} alt="blue ribbon"/>
                </div>
                <div className="hero-content">
                    <img src={distinguishedDoggo}/>
                </div>
            </div>
            <Link to="/Shop">
            <button className="cta-button">Shop</button>
            </Link>
            <div className="featured">
                <div className="featured-wrapper">
                    <div className="featured-treats">
                        <h1>Featured Treats</h1>
                        <p>Curated just for your pup, from everyday must-haves to charming statement pieces, we're here to help your best friend look good, feel great, and wag a little happier every day.</p>
                    </div>
                </div>
            </div>
            <ProductGrid cart={cart} setCart={setCart}/>
        </>
    )
}