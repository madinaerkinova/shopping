import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchModal from "./SearchModal";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  const { product } = useSelector((store) => store.product);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container">
          <div className="flex justify-between items-center py-4 px-6">
            <Link to="/" className="flex items-center w-auto">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 animate-spinSlow"
              />
              <span className="text-xl font-bold text-primary ml-2">
                GREENSHOP
              </span>
            </Link>
            <nav className="flex items-center gap-10 w-auto">
              <Link to="/" className="text-gray-800 hover:text-primary">
                Home
              </Link>
              <Link to="/shop" className="text-gray-800 hover:text-primary">
                Shop
              </Link>
              <a href="#" className="text-gray-800 hover:text-primary">
                Plant Care
              </a>
              <a href="#" className="text-gray-800 hover:text-primary">
                Blogs
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-primary" onClick={() => setIsSearchOpen(true)}>
                <FaSearch />
              </button>
              <Link to="/cart" className="text-gray-800 hover:text-primary relative">
                <FaShoppingCart />
                <p className="absolute -top-3 -right-2 bg-[#fff]">{product.length}</p>
              </Link>
              <button className="bg-primary text-white px-4 py-2 rounded">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Header;
