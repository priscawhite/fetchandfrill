import { useCallback, useState } from 'react'
import { Link } from "react-router-dom";
import dane from '../assets/images/dane-frame.png'
import CheckoutModal from '../components/CheckoutModal'

function CartItem({ item, onRemove, onQuantityChange }) {
    const handleClick = useCallback(() => onRemove(item), [item, onRemove])
    const handleQty = useCallback((e) => {
        const val = parseInt(e.target.value)
        if (val > 0) onQuantityChange(item.title, val)
    }, [item, onQuantityChange])

    return (
        <div className="cart-item" key={item.title}>
            <img className="item-img" src={new URL(`../assets/images/products/${item.img}`, import.meta.url).href} alt={item.title}/>
            <h2 className="item-title">{item.title}</h2>
            <p className="item-price">${item.price}</p>
            <input
                type="number"
                min="1"
                value={item.quantity ?? 1}
                onChange={handleQty}
                style={{ width: '50px', textAlign: 'center' }}
            />
            <button className="remove-btn" onClick={handleClick}>Remove item</button>
        </div>
    )
}

export function Cart({cart, setCart}) {

    const handleRemove = useCallback((item) => {
        setCart(cart.filter((product) => product.title !== item.title))
    }, [cart, setCart])

    const handleQuantityChange = useCallback((title, qty) => {
        setCart(cart.map((item) => item.title === title ? { ...item, quantity: qty } : item))
    }, [cart, setCart])

    const [showCheckout, setShowCheckout] = useState(false)

    const checkoutClick = useCallback(() => setShowCheckout(true), [])

    const handleCheckoutClose = useCallback(() => {
        setShowCheckout(false)
        setCart([])
    }, [setCart])

    if (cart.length === 0) return (
        <>
            <div className="emptycart-container">
                <img className="cart-pup" src={dane} alt='great dane puppy'/>
                <h1 className="emptycart-heading">Oh dear</h1>
                <p className="emptycart-text">Looks like someone got distracted by squirrels!<br></br> Your cart is empty, but the possibilities are positively fetching</p>
                <Link to="/Shop">
                    <button className="continue-button">Continue Shopping</button>
                </Link>
            </div>
        </>
    )

    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0)
    const shipping = subtotal < 75 ? 6.99 : 0
    const total = subtotal + shipping

    return (
        <>
            <h1>Cart</h1>
            <div className="cart-container">
            {cart.map((item) => (
                <CartItem key={item.title} item={item} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
            ))}
            </div>
            <div className="cart-summary">
                <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
                <h2>Shipping: {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</h2>
                <h2><strong>Total: ${total.toFixed(2)}</strong></h2>
            </div>
            <div>
                <button className="checkout-btn" onClick={checkoutClick}>Checkout</button>
            </div>
            <CheckoutModal isOpen={showCheckout} onClose={handleCheckoutClose} total={total} />
        </>
    )
}