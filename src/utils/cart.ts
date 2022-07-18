import { getProductById } from './products';
import { ProductType } from './schema';

const addToCart = async (productId: number) => {
  let cart_raw = localStorage.getItem('cart');
  let cart: Array<string> = [];

  if (cart_raw != null) {
    cart = cart_raw.split(',');
  }
  cart.push(`${productId}`);

  localStorage.setItem('cart', cart.join(','));

  console.log(localStorage.getItem('cart'));
};

const getCartProducts = async () => {
  const cart_raw = localStorage.getItem('cart') as string;

  let cart: Array<string> = cart_raw.split(',');

  cart = cart.filter((item) => {
    return item != 'null';
  });
  cart = [...new Set(cart)];

  if (cart[0] == '') {
    cart.splice(0, 1);
  }

  console.log({ cart });

  let products: ProductType[] = [];

  if (cart.length !== 0) {
    for (let idx = 0; idx < cart.length; idx++) {
      const productId = parseInt(cart[idx]);

      await getProductById(productId).then((res) => {
        products.push(res);
      });
    }
  }

  return products;
};

const clearCart = () => {
  localStorage.removeItem('cart');
  // refresh the window\
};

const removeASingleProduct = async (productId: number) => {
  const cart_raw = localStorage.getItem('cart') as string;

  let cart: Array<string> = cart_raw.split(',');

  cart = cart.filter((item) => {
    return item != 'null';
  });
  cart = [...new Set(cart)];

  const idx = cart.indexOf(`${productId}`);
  // remove item
  cart.splice(idx, 1);

  let raw_cart = cart.join(',');

  localStorage.setItem('cart', raw_cart);
};

export { getCartProducts, addToCart, clearCart, removeASingleProduct };
