import { useEffect } from "react"
import { ProductDetailProps } from "../types"

const Drawer = ({ product, onDrawerClose }: ProductDetailProps) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <section className="h-full fixed top-0 botton-0 right-0 z-[4] flex flex-col md:flex-row w-full">
            <div className="w-full h-full bg-black opacity-20 cursor-pointer" onClick={() => onDrawerClose()}>
            </div>
            <div className="bg-white w-full p-4">
                <div className="flex justify-end mb-8">
                    <div className="text-lg text-right border border-slate-300 text-slate-500 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
                        onClick={() => onDrawerClose()}>X
                    </div>
                </div>
                <div className="h-full">
                    <img src={product.image} width={200} height={150} className="object-center border border-slate-200 p-6 mx-auto rounded mb-8" />

                    <div>
                        <div className="mb-8">
                            <div className="text-sm text-neutral-400">{product.category}</div>
                            <div className="text-xl font-semibold text-neutral-700">{product.title}</div>
                            <div className="text-lg">${product.price}</div>
                        </div>
                        <div className="mb-16">
                            <div className="mb-2 font-semibold text-neutral-500">Description</div>
                            <div className="text-sm">{product.description}</div>
                        </div>

                        <button className="w-full rounded py-2 bg-emerald-600 text-white cursor-pointer">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drawer