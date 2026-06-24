import { ProductCard } from "./ProductGrid";
import ScrollFadeIn from "./ScrollFadeIn";

function ProductList({ products, cart, setCart }) {
  return (
      <>
        {products.map((product) => (
          <ScrollFadeIn key={product.id}>
            <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}/>
          </ScrollFadeIn>
        ))}
    </>
  );
}

export default ProductList;
