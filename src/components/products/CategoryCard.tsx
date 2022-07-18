import { category_images } from '../../data/images';
import { TextCapitalize } from '../../utils/formats';
import { getCategoryImage } from '../../utils/products';
import { ProductType } from '../../utils/schema';

type props = {
  category: 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";
};

const CategoryCard: React.FC<{
  category: any;
}> = ({ category }: props) => {
  const categoryImage = category_images[category];

  return (
    <div className="w-44 bg-white border-2 border-gray-300 rounded-md">
      <div className="">
        <img
          alt={category}
          src={categoryImage}
          className={'w-full h-44 fit-contain rounded-t-md'}
        />
      </div>

      <div className="text-center p-3">{TextCapitalize(category)}</div>
    </div>
  );
};

export default CategoryCard;
