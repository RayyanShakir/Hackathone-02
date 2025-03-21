import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center px-8 py-4 border-b shadow-sm relative">
      {/* Top Section with Search Icon, Brand Name, and Right Icons */}
      <div className="flex items-center justify-center w-full relative">
        {/* Search Icon in the Top-Left Corner */}
        <div className="absolute left-0">
          <CiSearch size={28} className="text-gray-800 hover:text-blue-600" />
        </div>

        {/* Centered Brand Name */}
        <div className="text-2xl font-bold text-gray-800">Avion</div>

        {/* Cart and Profile Icons on the Top-Right Corner */}
        <div className="absolute right-0 flex space-x-4">
          <a href="/Cart" className="text-gray-800 hover:text-blue-600">
            <FiShoppingCart size={28} />
          </a>
          <a href="/" className="text-gray-800 hover:text-blue-600">
            <FiUser size={28} />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t my-4"></div>

      {/* Centered Menu Items */}
      <div className="flex flex-wrap justify-center space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-600">Plant pots</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Ceramics</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Tables</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Chairs</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Crockery</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Tableware</a>
        <a href="/" className="text-gray-700 hover:text-blue-600">Cutlery</a>
      </div>
    </nav>
  );
}
