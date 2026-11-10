function ProductCard({ product, onAddToCart }) {
    return (
        <div className="flex-1 min-w-0 overflow-hidden rounded-2xl bg-[#DDE8E7] hover:-translate-y-3 transition-transform duration-300">
            <img src={`/images/${product.img}`}
                alt={product.name}
                className="w-full h-65 object-cover"
            />
            <div className="p-4 flex items-end justify-between gap-2">
                <div>
                    <h3 className="text-lg text-[rgb(100,57,57)] mb-1 font-semibold">{product.name}</h3>
                    <p className="text-sm text-[#643939]">Price: {product.price} AMD</p>
                    <p className="text-sm text-[#643939]">Category: {product.category}</p>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#643939] rounded-2xl hover:bg-[#4d2b2b] text-white px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;