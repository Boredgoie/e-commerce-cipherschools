import { CategoryType, ProductType } from './schema';

const base_url = 'https://fakestoreapi.com/products';

const getAllCategories = async () => {
  let categories: CategoryType = [];

  await fetch(`${base_url}/categories`)
    .then((res) => res.json())
    .then((result) => (categories = result))
    .catch((err) => {
      console.error({ err });
    });

  return categories;
};

const getAllProducts = async () => {
  let products: ProductType[] = [];

  await fetch(`${base_url}`)
    .then((res) => res.json())
    .then((result) => {
      products = result;
    })
    .catch((err) => {
      console.error({ err });
    });

  return products;
};

const getProductsByCategory = async (category: string) => {
  let products: ProductType[] = [];

  await fetch(`${base_url}/category/${category}`)
    .then((res) => res.json())
    .then((result) => {
      products = result;
    })
    .catch((err) => {
      console.error({ err });
    });

  return products;
};

const getCategoryImage = async (category: string) => {
  let products: ProductType[] = [];

  await fetch(`${base_url}/category/${category}`)
    .then((res) => res.json())
    .then((result) => {
      products = result;
    })
    .catch((err) => {
      console.error({ err });
    });

  //   const idx: number = Math.floor(Math.random() * (products.length - 1));
  const category_image = products[0].image;

  return category_image;
};

const getProductById = async (productId: number) => {
  let product: ProductType = await fetch(`${base_url}/${productId}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error({ err });
    });

  return product;
};

export {
  getAllProducts,
  getAllCategories,
  getProductsByCategory,
  getCategoryImage,
  getProductById,
};
