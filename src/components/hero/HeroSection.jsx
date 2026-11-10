import Hero from "/images/Hero.jpg"
import Header from "../header/Header"

function HeroSection({cart}) {
    return(
        <section className="relative min-h-screen">
            <div className="relative z-50">
                <Header cart={cart}/>
            </div>
            <img src={Hero} alt={Hero} className="absolute inset-0 w-full h-full object-cover z-0"/>
            <div className="text-left ml-210">
            <h1
            className="relative z-0 text-[#643939] text-6xl font-bold pt-55"
            style={{fontFamily: "'Beau Rivage', cursive"}}
            >
                Sweet Corner Cakes
            </h1>
            <h1
            className="relative z-0 text-[#643939] text-3xl font-bold pt-5"
            style={{fontFamily: "'Indie Flower', cursive"}}
            >
                Baking joy in every slice.
            </h1>
            <h1
            className="relative z-0 text-[#643939] text-3xl font-bold pt-5"
            style={{fontFamily: "'Indie Flower', cursive"}}
            >
                Love at first bite!
            </h1>
                <button
                    className="bg-[#643939] text-white rounded-2xl relative px-7 py-4 mt-5 cursor-pointer hover:scale-110 hover:bg-[#4d2b2b] active:scale-100 hover:shadow-md transition-all duration-200">
                    
                    Order Now
                </button>
            </div>
        </section>
    )
}

export default HeroSection