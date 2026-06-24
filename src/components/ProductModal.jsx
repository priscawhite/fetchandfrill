import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './ProductModal.css';
import { Link } from 'react-router-dom';

const ProductModal = ({ isOpen, onClose, product, rawProduct, cart, setCart }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusable = contentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first)?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image" />
          <div className="modal-details">
            <h2>{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            <p className="modal-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => setCart([...cart, rawProduct])}>
              {cart.find((item) => item.title === rawProduct?.title) ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <Link className="view-cart" to="/cart">View Cart</Link>
          </div>
        </div>
      </div>
    </div>
  , document.body);
};

export default ProductModal;
