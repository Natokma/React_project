import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { fetchProducts } from "../../api/productsApi";
import CakeLoader from "../CakeLoader";
function ProductList({onAddToCart}) {
    const [productData, setProductData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function loadProducts() {
            try{
                setIsLoading(true);
                setIsError(false);

                const data = await fetchProducts();
                setProductData(data);
            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])
    return(
        <section className="bg-[#643939] rounded-3xl mt-5 mb-5 p-5 sm:mx-6 lg:mx-10">
        
                <h2 className="text-2xl text-white mb-5">Our Favorites</h2>
    
        {
            isLoading ? <CakeLoader/> : isError ? <p className="text-red-600">Error</p> : (
            <div className="flex flex-row justify-between gap-4">
                {productData?.data?.map(item => (
                    <ProductCard
                    product = {item}
                    key={item.id}
                    onAddToCart={onAddToCart}
                    />
                ))}
            </div>
            )
        }    
        </section>
    )
}

export default ProductList;