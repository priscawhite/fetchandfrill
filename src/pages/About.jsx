import { Link } from "react-router-dom";
import alicia from "../assets/images/team/alicia.jpg"
import shannon from "../assets/images/team/shannon.jpg"
import michael from "../assets/images/team/michael.jpg"
import steven from "../assets/images/team/steven.jpg"
import ScrollFadeIn from "../components/ScrollFadeIn";

export function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-content">
                    <h1>Our Story</h1>
                    <p>Fetch & Frill was founded in Austin, Texas in 2016 by lifelong dog lover Jonathan Wilbur, whose passion for pets and eye for style inspired him to create something special for fellow dog enthusiasts. Alongside a close-knit group of dog-loving friends who shared a flair for approachable luxury and upscale accessories, Jonathan began curating modern, trendy, and fashionable items that helped dogs look as stylish as the people who loved them. What started as a small passion project quickly grew into a beloved online boutique dedicated to combining comfort, quality, and personality in every product. Today, Fetch & Frill continues to celebrate the bond between pets and their owners while giving back by donating a portion of proceeds to local animal shelters across the United States.</p>
                    <p>Enjoy all of our products and be sure to contact us with any questions!</p>
                    <Link to="/contact">
                    <button>Contact Us!</button>
                    </Link>
                    <h1 className="about-pack">Meet the Pack</h1>
                    <ScrollFadeIn>
                    <div className="pack-container">
                        <div className="pack-card">
                            <div className="pack-image"><img src={alicia} alt="pack member"/></div>
                            <div className="pack-title"><h3>Alicia Stanton</h3></div>
                            <div className="pack-desc"><p>Alicia of Charleston, South Carolina, is the Creative Director at Fetch & Frill, where she curates product collections and shapes the brand’s warm, upscale style across the online shop and social media. She loves discovering unique pet accessories that blend charm and practicality, and outside of work she enjoys coastal photography with her rescue Spaniel, Rosie.</p></div>
                        </div>
                        <div className="pack-card">
                            <div className="pack-image"><img src={shannon} alt="pack member"/></div>
                            <div className="pack-title"><h3>Shannon Gerber</h3></div>
                            <div className="pack-desc"><p>Shannon of Austin, Texas, serves as the Customer Experience Manager, helping pet parents find the perfect products while ensuring every order feels personal and thoughtful. She brings energy and care to the support team each day, and in her free time she enjoys hosting backyard brunches for friends and family.</p></div>
                        </div>
                        <div className="pack-card">
                            <div className="pack-image"><img src={michael} alt="pack member"/></div>
                            <div className="pack-title"><h3>Michael Johns</h3></div>
                            <div className="pack-desc"><p>Michael of Denver, Colorado, is the Operations & Fulfillment Lead, keeping inventory organized and making sure orders are packed and shipped quickly and accurately. His attention to detail helps Fetch & Frill run smoothly behind the scenes, and outside of work he spends weekends hiking trails with his Golden Retriever, Scout.</p></div>
                        </div>
                        <div className="pack-card">
                            <div className="pack-image"><img src={steven} alt="pack member"/></div>
                            <div className="pack-title"><h3>Steven Tolliver</h3></div>
                            <div className="pack-desc"><p>Steven of Portland, Oregon, works as the Digital Marketing Specialist, creating email campaigns and online content that connect dog lovers with Fetch & Frill’s newest arrivals. He enjoys blending creativity with analytics to grow the brand, and when he’s offline he loves brewing small-batch coffee at home.</p></div>
                        </div>
                    </div>
                    </ScrollFadeIn>
                    <h1>Community</h1>
                    <p>At Fetch & Frill, we believe every dog deserves a loving home and access to the care they need. That's why a portion of every purchase supports local animal shelters and rescue organizations across the United States. We also partner with community pet adoption events, sponsor donation drives for shelter supplies, and encourage our customers to give back by supporting animal welfare initiatives in their own communities. Together, we're helping improve the lives of pets while strengthening the bond between animals and the people who love them.</p>
                    <h1 id="sustainability">Sustainability</h1>
                    <p>Fetch & Frill is committed to making responsible choices that help protect the environment for future generations. We prioritize products made from durable, high-quality materials designed to last, reducing unnecessary waste from frequently replaced items. Whenever possible, we use recyclable shipping materials and work with suppliers who share our commitment to ethical sourcing and sustainable business practices. While we're continually seeking ways to reduce our environmental footprint, our goal remains simple: create products that pets and their owners can feel good about.</p>
                </div>
            </div>
        </>
    );
}