import React from "react";
import './Shop.css';

// Products data
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: require("./pictures/shirt.png"), // Replace with actual path
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Classic Shirt",
    href: "#",
    imageSrc: require("./pictures/shorts.png"), // Replace with actual path
    imageAlt: "Front of men's Classic Shirt in white.",
    price: "$50",
    color: "White",
  },
  {
    id: 3,
    name: "Socks",
    href: "#",
    imageSrc: require("./pictures/socks.png"), // Replace with actual path
    imageAlt: "Front of men's Socks in white.",
    price: "$10",
    color: "White",
  },
];

export default function Shop() {
  return (
    <div className="bg-[#e5e5e5] flex justify-center items-center min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Header */}
        <h2 className="shop-title mt-8 mb-2">
          Shop Basketball Apparel
        </h2>
        <p className="shop-description mb-8">
          Browse through our curated selection of basketball gear and accessories.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image */}
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-48 h-48 mx-auto rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              />

              {/* Product Details */}
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-6 w-3/4 mx-auto block rounded-md bg-[#f4511e] px-4 py-2 text-sm font-medium text-white hover:bg-[#8E24AA]">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
