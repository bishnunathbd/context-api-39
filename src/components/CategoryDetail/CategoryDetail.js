import React, { useContext } from 'react';

const CategoryDetail = ({product}) => {
  // const {product} = props;
  // const {name} = props.product;
  const {name} = product;

  return (
    <div>
      <h4>Your Product: {name}</h4>
    </div>
  );
};

export default CategoryDetail;