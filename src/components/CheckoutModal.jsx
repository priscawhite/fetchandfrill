import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../components/ProductModal.css';
import './CheckoutModal.css';
import visa from "../assets/images/visa.png"
import truck from "../assets/images/truck.png"
import timeline from "../assets/images/order-timeline.png"

const confirmationNumber = () => Math.floor(10000000 + Math.random() * 90000000);

const arrivalDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 10);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const NAME = 'Jane Holloway';
const ADDRESS = '482 Elmwood Drive\nPortland, OR 97201';

const CheckoutModal = ({ isOpen, onClose, total }) => {
  const contentRef = useRef(null);
  const confirmRef = useRef(confirmationNumber());

  useEffect(() => {
    if (!isOpen) return;
    const focusable = contentRef.current?.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    focusable?.[0]?.focus();
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content checkout-modal" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h1 className="logo">Fetch & Frill</h1>
        <h1>Thank you for your order</h1>
        <p className="confirmation-number">Confirmation #: {confirmRef.current}</p>
        <img className="timeline" src={timeline} alt="order timeline"/>
        <div className="tracking">
          <img className="truck-logo" src={truck} alt="truck logo"/>
          <h2>&nbsp;We'll send you an email with tracking information when your order ships</h2>
        </div>
        <section className="checkout-container">
          <div className="payment-details">
            <h3>Payment Details</h3>
            <p><strong>Order Total: ${total.toFixed(2)}</strong></p>
            <div className="payment-card">
              <img className="visa-logo" src={visa} alt="visa logo"/>
              <p>&nbsp;ending in 4242</p>
            </div>
            <p className="billing-address">Billing Address<br />{NAME}<br />{ADDRESS.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
          </div>
          <div className="shipping-details">
            <h3>Shipping Details</h3>
            <p>Your order is expected to arrive by {arrivalDate()}</p>
            <p className="shipping-address">Shipping Address<br />{NAME}<br />{ADDRESS.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
          </div>
        </section>
      </div>
    </div>,
    document.body
  );
};

export default CheckoutModal;
