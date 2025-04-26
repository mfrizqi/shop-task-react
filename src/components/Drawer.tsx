import { useEffect } from "react"
import { ProductDetailProps } from "../types"
import useCartStore from "../store/cartStore"

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

const CartDrawer = ({ onDrawerClose }: { onDrawerClose: () => void }) => {

    const { cart, removeFromCart, clearCart } = useCartStore();

    const totalCart = () => {
        const sum = cart.reduce((accumulator: any, currentObject: any) => {
            return accumulator + currentObject.price;   
        }, 0);
        return sum.toFixed(2)
    }

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
                    <div className=" pb-4 mb-6 font-semibold text-slate-600 flex justify-between items-center border-b border-slate-200">
                        <div className="text-xl"> Your Cart </div>
                        {cart.length > 0 &&
                            <button onClick={clearCart} className="bg-slate-200 p-2 rounded cursor-pointer">Clear Cart</button>
                        }
                    </div>
                    {cart.length === 0 && <div className="bg-slate-100 text-slate-400 text-center p-4 rounded">Your cart is empty</div>}
                    <div className="max-h-[300px] overflow-auto">
                    {cart.map((item) => (
                        <div key={item.id} className="mb-2 flex justify-between gap-4">
                            <div className="flex gap-4 items-center">
                                <img src={item.image} className="max-w-[56px] max-h-[56px] object-center border border-slate-300 p-4 rounded" />
                                <div>
                                    <div className="text-sm">{item.title}</div>
                                    <div>${item.price}</div>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="inline rounded p-1 bg-slate-200 text-slate-500 cursor-pointer hover:bg-slate-300 hover:text-slate-600 transition-all">Remove</button>
                        </div>
                    ))}
                    </div>

                    {cart.length > 0 &&
                        <section className="flex border-t border-slate-200 pt-4">
                            <div className="text-slate-500 w-[56px] mr-2">Total</div>
                            <div>${totalCart()}</div>
                        </section>
                    }

                </div>
            </div>
        </section>
    )
}

export { Drawer, CartDrawer }