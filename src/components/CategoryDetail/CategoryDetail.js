import React, { useContext } from 'react';

const CategoryDetail = (props) => {
  const {name} = props.product;

  return (
    <div>
      <h4>Your Product: {name}</h4>
    </div>
  );
};

export default CategoryDetail;