import { useState } from "react";
import "../Pages.css"
import ProductList from "../components/ProductList";
import { featuredProducts } from "../data/featured-products";
import ProductModal from "../components/ProductModal";

function ProductGrid({ cart, setCart }) {
  return (
    <>
      <div className="featured-container">
            <ProductList products={featuredProducts} cart={cart} setCart={setCart} />   
      </div>
    </>
  );
}

export default ProductGrid;

export function ProductCard({ product, cart, setCart }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleClick() {
        setCart([...cart, product])
    }

  return (
    <>
        <div className="card">
            <img className="card-image" src={new URL(`../assets/images/products/${product.img}`, import.meta.url).href} alt={product.title}/>
            <h2 className="card-title">{product.title}</h2>
            <p className="card-price">${product.price.toFixed(2)}</p>
            <a className="view-details-link" href="#" onClick={(e) => { e.preventDefault(); setSelectedProduct(product); }}>View Details</a>
            <button onClick={() => handleClick()}>
            {cart.find((item) => item.title == product.title) ? "Added to Cart" : "Add to Cart"}
            </button>
        </div>
        <ProductModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            rawProduct={selectedProduct}
            cart={cart}
            setCart={setCart}
            product={selectedProduct ? {
                name: selectedProduct.title,
                image: new URL(`../assets/images/products/${selectedProduct.img}`, import.meta.url).href,
                description: selectedProduct.desc,
                price: selectedProduct.price
            } : null}
        />
    </>
  );
}
