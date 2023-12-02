"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
const brand0 = require("../../images/brands/Apple_logo.png");
const brand1 = require("../../images/brands/Beko_logo.png");
const brand2 = require("../../images/brands/Bose_logo.png");
const brand3 = require("../../images/brands/Candy_logo.png");
const brand4 = require("../../images/brands/Canon_logo.png");
const brand5 = require("../../images/brands/Carrier_logo.png");
const brand6 = require("../../images/brands/Kingston_logo.png");
const brand7 = require("../../images/brands/Lenovo_logo.png");
const brand8 = require("../../images/brands/Moulinex_logo.png");
const brand9 = require("../../images/brands/Samsung_logo.png");
const brand10 = require("../../images/brands/Sony_logo.png");
const brand11 = require("../../images/brands/Xiaomi_logo.png");
// ... (your imports remain the same)

const Carousel = () => {
  const brands: (string | any)[] = [brand0, brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11];

  return (
<div className="flex overflow-hidden space-x-16 mt-6 border py-6 bg-white group">
  <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
    {brands.map((brand, index) => (
      <img
        key={index}
        loading="lazy"
        src={brand.default.src}
        className="max-w-none h-12 w-48"
        alt={`Brand ${index}`}
      />
    ))}
  </div>
  <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
    {brands.map((brand, index) => (
      <img
        key={index}
        loading="lazy"
        src={brand.default.src}
        className="max-w-none h-12 w-48"
        alt={`Brand ${index}`}
      />
    ))}
  </div>
</div>
  );
};

export default Carousel;
