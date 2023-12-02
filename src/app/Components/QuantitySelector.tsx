import React, { useState } from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex py-1 border rounded-lg bg-white">
      <button
        onClick={handleDecrement}
        className="px-4 py-1 cursor-pointer"
      >
        -
      </button>
      <span className="px-4 py-1 ">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-4 py-1 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;