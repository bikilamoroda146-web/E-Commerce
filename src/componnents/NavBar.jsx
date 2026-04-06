import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
function NavBar() {
    const linkClass = ({ isActive }) =>
        isActive ? "text-orange-500 font-semibold border-b-2" : "text-gray-700 hover:text-orange-500"
    return (
        <header className="bg-coffee-cream border-b ">
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between">

                    <Link className="flex items-center gap-2">
                        <span className="text-2xl">☕</span>
                        <span className="font-bold text-lg text-coffee-brown tracking-tight">yourTech</span>
                        <span className="text-coffee-orange font-bold">Coffee Shop</span>
                    </Link>
                    <nav className="flex gap-2">
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to="menu" className={linkClass}>
                            Menu
                        </NavLink>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link className="text-coffee-brown hover:text-coffee-orange">
                            <FiShoppingCart size={24} />
                        </Link>
                        <button className="bg-coffee-orange px-4 py-1 rounded-xl hover:bg-coffee-brown text-white">
                            Sign in
                        </button>
                        <button className="border-red-500 border-2-b px-4 py-1 rounded-xl text-red-500 hover:bg-red-200">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

        </header >
    );
}
export default NavBar; 