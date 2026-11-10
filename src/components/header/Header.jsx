import {Cupcake} from "lucide-react";
import {ShoppingCart} from "lucide-react";
import { Link } from "react-router-dom";

function Header({cart}) {
    return(
        <header className="absolute top-0 left-0 w-full z-10 border-2 rounded-3xl shadow-xl border-[#643939]">
            <div className="flex justify-between items-center mx-auto px-5 py-3 text-[#643939]">
                <div className="flex items-center gap-3">
                    <Cupcake size={23} strokeWidth={1.8}/>
                <h1
                className="text-2xl font-bold"
                style={{fontFamily: "'Beau Rivage', cursive"}}
                >
                    Sweet Corner Cakes
                </h1>
                </div>
                <div className="flex items-center justify-center">
                <nav className="flex items-center gap-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/menu" className="hover:underline">Menu</Link>
                    <a href="#about" className="hover:underline">About</a>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <p className="hover:underline cursor-pointer flex gap-2"><ShoppingCart/>{cart}</p>
                    <Link
                        to="/signup"
                        className="hover:underline relative z-50 cursor-pointer"
                    >
                        Sign Up
                    </Link>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;