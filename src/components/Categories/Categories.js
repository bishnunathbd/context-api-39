import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
  {name: 'Dell', category: 'laptop'}, {name: 'Hp', category: 'laptop'}, {name: 'Asus', category: 'laptop'}, 
  {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'}, {name: 'Motorola', category: 'mobile'}, 
  {name: 'Canon', category: 'camera'}, {name: 'Nikon', category: 'camera'}, {name: 'Sony', category: 'camera'}
]

const Categories = () => {
  const [category] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
    setProducts(matchedProducts);
  }, [category])

  return (
    <div>
      <h3>Selected category: {category}</h3>
      {
        products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
      }
    </div>
  );
};

export default Categories;