import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-50 h-50 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <button className="bg-leaf-green hover:bg-forest-green text-white px-4 py-2 rounded transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;