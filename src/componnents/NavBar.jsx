import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
function NavBar() {
    const [open, setOpen] = useState(false);
    const {cartCount} = useCart();
    const linkClass = ({ isActive }) =>
        isActive ? "text-orange-500 font-semibold border-b-2" : "text-gray-700 hover:text-orange-500"
    return (
        <header className="bg-coffee-cream border-b border-coffee-orange">
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between">

                    <Link className="flex items-center gap-2">
                        <span className="text-2xl">☕</span>
                        <span className="font-bold text-lg text-coffee-brown tracking-tight">yourTech</span>
                        <span className="text-coffee-orange font-bold">Coffee Shop</span>
                    </Link>
                    <nav className="md:flex hidden gap-2">
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to="menu" className={linkClass}>
                            Menu
                        </NavLink>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link className="text-coffee-brown relative hover:text-coffee-orange">
                            <FiShoppingCart size={24} />
                            {
                                cartCount > 0 && <span className="absolute -top-2 right-2h-5 px-1 rounded-full bg-red-600 text-white font-bold  flex items-center justify-center"
                                >{cartCount}</span>
                            }
                        </Link>
                        <div className="md:flex hidden gap-3 items-center">
                            <button className="bg-coffee-orange px-4 py-1 rounded-xl hover:bg-coffee-brown text-white">
                                Sign in
                            </button>
                            <button className="border-red-500 border-2 px-4 py-1 rounded-xl text-red-500 hover:bg-red-200">
                                Sign Out
                            </button>
                        </div>
                        <button className="md:hidden flex justify-center text-coffee-brown"
                         onClick={() => setOpen(!open)}>
                            {
                                open ? <FiX size={24} /> : <FiMenu size={24} />
                            }


                        </button>
                    </div>
                </div>
            </div>
<div>
    {
        open && (
            <div className="md:hidden">
               <nav className="flex flex-col p-4 gap-4">
                        <NavLink to="/" className={linkClass} onClick={()=>setOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="menu" className={linkClass} onClick={()=>setOpen(false)}>
                            Menu
                        </NavLink>
                         <button className="bg-coffee-orange px-4 py-1 rounded-xl hover:bg-coffee-brown text-white">
                                Sign in
                            </button>
                           <button className="border-red-500 border-2 px-4 py-1 rounded-xl text-red-500 hover:bg-red-200">
                                Sign Out
                            </button>
                    </nav>
                     
                           
                        
            </div>
        )
    }
</div>
        </header >
    );
}
export default NavBar;