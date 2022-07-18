import { useState } from 'react';
import { addToCart, removeASingleProduct } from '../../utils/cart';
import { ProductType } from '../../utils/schema';

type props = {
  product: ProductType;
  type: 'add' | 'remove';
};

const ProductCard = ({ product, type }: props) => {
  const [addState, setAddState] = useState<boolean>(false);

  const handleCart = (productId: number) => {
    if (type == 'add') {
      addToCart(productId).then(() => {
        // alert('Product added successfully!');
      });
    } else if (type == 'remove') {
      removeASingleProduct(productId);
      window.location.reload();
    }

    setAddState(true);
    setTimeout(() => {
      setAddState(false);
    }, 2000);
  };

  const handleProductView = (productId: number) => {
    window.location.replace(`/product/${productId}`);
  };

  return (
    <div
      className="w-72 bg-white p-2 m-3 border-2
     border-gray-300 rounded-md "
    >
      <img
        onClick={() => handleProductView(product.id)}
        className="h-44 mx-auto cursor-pointer"
        style={{
          objectFit: 'contain',
        }}
        src={product.image}
        alt={product.title}
      />

      <div className="pt-4">
        <div className="text-md font-semibold">{product.title}</div>
        <div>
          Rating: {product.rating.rate} ({product.rating.count})
        </div>

        <div className="flex flex-row justify-between items-center px-2">
          <div className="text-2xl font-semibold text-blue-900">
            ₹ {product.price}
          </div>

          <button
            className="my-3 mx-2 bg-blue-600 text-white rounded-md px-3 py-1.5"
            onClick={() => handleCart(product.id)}
          >
            {type == 'add' ? (
              <div>
                {addState ? (
                  <span>Product Added!</span>
                ) : (
                  <span>Add to Cart</span>
                )}
              </div>
            ) : (
              <div>
                {' '}
                {addState ? (
                  <span>Product Removed!</span>
                ) : (
                  <span>Remove product</span>
                )}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
