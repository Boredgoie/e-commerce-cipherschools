import { useEffect, useState } from 'react';
import { TextCapitalize } from '../utils/formats';
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from '../utils/products';
import { CategoryType, ProductType } from '../utils/schema';
import HorizontalLine from '../components/other/HorizontalLine';
import CategoryCard from '../components/products/CategoryCard';
import DisplayProducts from '../components/products/DisplayProducts';

const HomePage: React.FC = () => {
  const [currCategory, seCurrCategory] = useState<string>('');
  const [categories, setCategories] = useState<CategoryType>();
  const [products, setProducts] = useState<ProductType[]>();
  const [currProducts, setCurrProducts] = useState<ProductType[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    getProductsByCategory(currCategory).then((res) => {
      setProducts(res);
      setCurrProducts(res);
    });
  }, [currCategory]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });

    getAllProducts().then((res) => {
      setProducts(res);
      setCurrProducts(res);
    });
  }, []);

  const handleCategoryChange = (category: string) => {
    seCurrCategory(category);
  };

  const handleProductChange = (value: string) => {
    setTimeout(() => {
      if (value.length > 0) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }

      const filteredProducts = products?.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase());
      });

      if (filteredProducts !== undefined) {
        setCurrProducts(filteredProducts);
      } else {
        setCurrProducts(products as ProductType[]);
      }
    }, 200);
  };

  return (
    <div>
      {products ? (
        <div>
          {/* product search */}
          <div className="w-[80%] max-w-lg mx-auto my-6">
            <input
              type="text"
              placeholder="Search any product"
              className="w-full bg-gray-100 border-2 px-3 py-2 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-gray-300"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleProductChange(e.target.value)
              }
            />
            {isTyping && (
              <form className="absolute bg-gray-100 max-w-lg my-2 rounded-md px-4 py-3">
                {currProducts?.map((product, index) => (
                  <div key={index} className="py-1.5">
                    <label htmlFor={`${product.id}`} className="cursor-pointer">
                      {product.title}
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      id={`${product.id}`}
                      onClick={() => {
                        handleProductChange(product.title);
                        setTimeout(() => {
                          setIsTyping(false);
                        }, 300);
                      }}
                    />
                  </div>
                ))}
              </form>
            )}
          </div>

          <div className="text-xl py-3 px-6 lg:px-[10%]">Categories</div>

          <div className="flex flex-row flex-wrap justify-center gap-6 py-3 px-3">
            {categories?.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryChange(category)}
                className="cursor-pointer"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>

          <HorizontalLine />

          <DisplayProducts products={currProducts} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
