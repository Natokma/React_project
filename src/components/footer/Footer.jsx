import { Cupcake } from "lucide-react";
function Footer() {
    return(
        <>
            <footer>
                <div className="flex text-[#643939] py-3 px-3 bg-[#F3B8A6 border-2 border-[#643939] rounded-3xl justify-between">
                    <div className="flex gap-3 items-center justify-center">
                    <Cupcake size={20} strokeWidth={1.8}/>
                <h1
                className="text-xl font-bold"
                style={{fontFamily: "'Beau Rivage', cursive"}}
                >
                    Sweet Corner Cakes
                </h1>
                </div>
                     <p className="text-sm flex items-center justify-center">&copy; 2026 All rights reserved.</p>
                    <nav className="flex gap-3">
                      <a href="#" className="hover:underline">About</a>
                      <a href="#" className="hover:underline">Services</a>
                      <a href="#" className="hover:underline">Contact</a>
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default Footer;