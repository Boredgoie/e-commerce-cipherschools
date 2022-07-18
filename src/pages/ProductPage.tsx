import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/products';
import { ProductType } from '../utils/schema';
import { TbDiscount2 } from 'react-icons/tb';
import { BsCashCoin } from 'react-icons/bs';
import {
  MdBrowserNotSupported,
  MdOutlineDirectionsTransit,
} from 'react-icons/md';
import { addToCart } from '../utils/cart';

const deliveryOptions = [
  {
    icon: <BsCashCoin />,
    message: 'COD available',
  },
  {
    icon: <MdBrowserNotSupported />,
    message: 'No Return, No Exchange',
  },
  {
    icon: <MdOutlineDirectionsTransit />,
    message: 'Free Delivery by Fri, 23 July',
  },
];

const ShowDeliveryOptions = () => {
  return (
    <div className="flex flex-row justify-evenly gap-2 px-2 py-4">
      {deliveryOptions.map((option, index) => (
        <div key={index} className="w-1/3">
          <div className="px-3 text-xl">{option.icon}</div>
          <div className="text-xs text-gray-600">{option.message}</div>
        </div>
      ))}
    </div>
  );
};

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType>();
  const [addState, setAddState] = useState<boolean>(false);
  let { id } = useParams();

  useEffect(() => {
    id = id as string;

    getProductById(parseInt(id)).then((res) => {
      setProduct(res);
    });
  }, []);

  const handleAddToCart = (productId: number) => {
    addToCart(productId);

    setAddState(true);
    setTimeout(() => {
      setAddState(false);
    }, 2000);
  };

  return (
    <div className="py-8 w-full">
      {product && (
        <div className="flex flex-row w-full flex-wrap max-w-3xl mx-auto">
          <img
            className="max-w-md w-1/2 px-6 py-6 object-contain"
            src={product?.image}
            alt={product?.title}
          />
          <div className="w-1/2 px-6 flex flex-col justify-between gap-2">
            <div>
              <div className="text-2xl leading-tight my-0.5 tracking-tight font-['Open Sans']">
                {product.title}
              </div>
              <div className="text-gray-600">
                Rating: {product.rating.rate} ({product.rating.count})
              </div>
              <div className="my-3 opacity-75">{product.description}</div>

              <div className="text-xl">₹ {product.price}</div>

              <button
                onClick={() => {
                  handleAddToCart(product.id);
                }}
                className="w-full bg-blue-800 text-white uppercase px-2 py-2 my-8 rounded-md hover:bg-blue-900"
              >
                {addState ? (
                  <span>Product Added!</span>
                ) : (
                  <span>Add to cart</span>
                )}
              </button>
            </div>

            <div>
              <div>
                <div className="flex flex-row items-start gap-3 bg-gray-100 border-2 border-gray-200 rounded-md py-2 px-2">
                  <TbDiscount2 className="text-5xl mt-0 pt-0" />
                  <div>
                    <div className="text-gray-700">Offers for you</div>
                    <div className="text-gray-500 leading-tight text-sm">
                      Use coupon code SAVE10 to save 10% when using with ICICI
                      Credit Card. Max save Rs. 900.
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <div>Select Delivery Location</div>
                <div className="bg-gray-200 w-full flex flex-row justify-center px-2 py-2 my-2 text-gray-400 rounded-md">
                  <input
                    className="bg-transparent bg-red-200 w-full text-gray-800"
                    placeholder="Enter Pincode"
                    type={'text'}
                  />
                  <button>Apply</button>
                </div>

                <ShowDeliveryOptions />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
