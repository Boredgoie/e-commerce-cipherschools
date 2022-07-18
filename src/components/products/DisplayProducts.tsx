import { ProductType } from '../../utils/schema';
import ProductCard from './ProductCard';

type props = {
  products: ProductType[];
};

const DisplayProducts: React.FC<{ products: ProductType[] }> = ({
  products,
}: props) => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        {products?.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} type="add" />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayProducts;
