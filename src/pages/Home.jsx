import HeroSection from '../components/hero/HeroSection'
import Footer from '../components/footer/Footer'
import ProductList from '../components/productList/ProductList'
import ContactForm from '../components/ContactForm'
import About from "./About";

function Home({addToCart, cartLength}) {
    return(
        <div className="bg-[#F3B8A6] min-h-screen">
            <HeroSection cart={cartLength}/>
            <ProductList onAddToCart={addToCart}/>
            <About/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Home;