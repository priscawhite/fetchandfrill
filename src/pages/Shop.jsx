import ProductList from "../components/ProductList";
import { products } from "../data/products";

function Shop({cart, setCart}) {
  return (
    <>
        <div className="shop-container">
            <header className="shop-header">
                <h1>Shop</h1>
                <p>From everyday must-haves to charming statement pieces, we're here to help your best friend look good, feel great, and wag a little happier every day</p>
            </header>
        </div>
          <div className="shop-products">
            <ProductList products={products} cart={cart} setCart={setCart} />
          </div>
    </>
  );
}

export default Shop;
