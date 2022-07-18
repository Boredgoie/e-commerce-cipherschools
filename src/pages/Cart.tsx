import { useEffect, useState } from 'react';
import HorizontalLine from '../components/other/HorizontalLine';
import ProductCard from '../components/products/ProductCard';
import { clearCart, getCartProducts } from '../utils/cart';
import { ProductType } from '../utils/schema';

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getCartProducts().then((res) => {
      setCartProducts(res);
    });

    console.log({ cartProducts });
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCartProducts([]);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl px-3 py-3">Your Cart</div>
        <div
          className="px-6 cursor-pointer"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </div>
      </div>
      <HorizontalLine />

      <div>
        {cartProducts && cartProducts?.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-center">
            {cartProducts?.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} type="remove" />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-6 text-center text-xl">Your cart is empty!</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
