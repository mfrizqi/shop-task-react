import useCartStore from "../store/cartStore";
import { Product, ProductProps } from "../types"

const ProductItem = ({ product, onDetail }: ProductProps) => {

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAdd = (event: React.MouseEvent<Element, MouseEvent>, product: Product) => {
        event.stopPropagation()
        addToCart(product)
    }

    const handleClick = () => {
        onDetail(product)
    }
    return (
        <div className="p-4 bg-white border border-slate-200 rounded h-full flex flex-col gap-4 justify-between cursor-pointer hover:shadow-lg transition-all" onClick={handleClick}>
            <div className="h-[160px]">
                <img src={product.image} alt="" className="h-full w-full object-center" loading="lazy" />
            </div>
            <div>
                <div>{product.title}</div>
                <div>${product.price}</div>
            </div>
            <button className="w-full rounded py-2 bg-emerald-600 text-white cursor-pointer hover:bg-emerald-600/90" onClick={(e) => handleAdd(e, product)}>Add to cart</button>
        </div>
    )
}

export default ProductItem