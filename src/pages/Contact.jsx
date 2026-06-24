import { useState } from "react"
import "../Pages.css"

export function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState ("")

    function handleSubmit() {

    }

    return (
        <>
            <div className="contact-container">
                <div className="contact-content">
                    <section className="contact-us">
                        <h1>Contact Us</h1>
                        <div className="contact-wrapper">
                            <div className="contact-form">
                                <form className="contact-item">
                                    <label>Name: </label>
                                    <input onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                                </form>
                                <form className="contact-item">
                                    <label for="email">Email: </label>
                                    <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                                </form>
                                <form className="contact-item">
                                    <label for="message">Message: </label>
                                    <textarea id="message" rows="5" cols="50" onChange={(e) => setComment(e.target.value)} placeholder="Drop us a line" minLength={10} required></textarea>
                                </form>
                                <form className="contact-item">
                                    <button onClick={() => handleSubmit()}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="faqs" id="faqs">
                        <h1>FAQs</h1>
                        <h2>1. How long does shipping take?</h2>
                        <p>Most orders are processed within 1–2 business days and delivered within 3–7 business days within the continental United States.</p>
                        <h2>2. Do you offer free shipping?</h2>
                        <p>Yes! Orders over $75 qualify for free standard shipping within the United States.</p>
                        <h2>3. What if my dog doesn't like a product?</h2>
                        <p>We want every purchase to be a great fit. Eligible products may be returned within 30 days of delivery for a refund or exchange, subject to our return policy.</p>
                    </section>
                    <section className="shipping" id="shipping">
                        <h1>Shipping & Returns</h1>
                        <h2>Shipping</h2>
                            <ul>
                                <li>Standard Shipping (3–7 Business Days): $6.99</li>
                                <li>Expedited Shipping (2–3 Business Days): $14.99</li>
                                <li>Free Standard Shipping on orders over $75</li>
                                <li>Orders are typically processed within 1–2 business days</li>
                            </ul>
                            <p>Delivery times may vary during holidays, promotional periods, or severe weather conditions.</p>
                        <h2>Returns</h2>
                            <p>If you're not completely satisfied with your purchase, eligible items may be returned within 30 days of delivery.</p>
                            <p>To qualify for a return:</p>
                            <ul>
                                <li>Items must be unused and in their original packaging</li>
                                <li>Personalized or custom products are not eligible for return unless damaged or defective</li>
                                <li>Customers are responsible for return shipping costs unless the item arrived damaged or incorrect</li>
                            </ul>
                            <p>Approved refunds will be issued to the original payment method within 5–10 business days after the returned item has been received and inspected.</p>
                    </section>
                    <section className="privacy" id="privacy">
                        <h1>Privacy Policy</h1>
                        <p>Last Updated: June 2026</p>
                        <p>Fetch & Frill respects your privacy and is committed to protecting your personal information.</p>
                        <h2>Information We Collect</h2>
                            <p>We may collect:</p>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Shipping and billing addresses</li>
                                <li>Phone number</li>
                                <li>Order history</li>
                                <li>Website usage information through cookies and analytics tools</li>
                            </ul>
                        <h2>How We Use Your Information</h2>
                            <p>Your information may be used to:</p>
                            <ul>
                                <li>Process and fulfill orders</li>
                                <li>Communicate order updates</li>
                                <li>Respond to customer inquiries</li>
                                <li>Improve website functionality and user experience</li>
                                <li>Send promotional communications if you choose to subscribe</li>
                            </ul>
                        <h2>Data Protection</h2>
                            <p>We implement industry-standard security measures to help protect your personal information from unauthorized access, disclosure, or misuse.</p>
                        <h2>Information Sharing</h2>
                            <p>Fetch & Frill does not sell customer information. We may share necessary information with trusted service providers such as payment processors, shipping carriers, and website analytics providers solely for business operations.</p>
                    </section>
                    <section className="terms" id="terms">
                        <h1>Terms of Service</h1>
                        <p>Last Updated: June 2026</p>
                        <p>By accessing or using the Fetch & Frill website, you agree to comply with these Terms of Service.</p>
                        <h2>Products and Pricing</h2>
                            <p>We strive to provide accurate product descriptions, pricing, and availability information. However, errors may occasionally occur, and we reserve the right to correct inaccuracies without prior notice.</p>
                        <h2>Orders</h2>
                            <p>Fetch & Frill reserves the right to refuse, cancel, or limit orders at our discretion, including orders that appear fraudulent or violate our policies.</p>
                        <h2>Intellectual Property</h2>
                            <p>All content on this website, including logos, graphics, product descriptions, images, and written content, is the property of Fetch & Frill and may not be reproduced without permission.</p>
                        <h2>Limitation of Liability</h2>
                            <p>Fetch & Frill shall not be liable for indirect, incidental, or consequential damages arising from the use of our products or website.</p>
                        <h2>Changes to Terms</h2>
                            <p>We reserve the right to update these Terms of Service at any time. Continued use of the website after updates constitutes acceptance of the revised terms.</p>
                        <h2>Contact Us</h2>
                            <p>Questions regarding these policies may be directed to:</p>
                            <p>support@fetchandfrill.com</p>
                            <p>Austin, Texas, USA</p>
                    </section>
                </div>
            </div>
        </>
    );
}