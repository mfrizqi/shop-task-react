import { ProductDetailProps } from "../types"

const Drawer = ({ product, onDrawerClose }: ProductDetailProps) => {

    return (
        <section className="h-full fixed top-0 botton-0 right-0 z-[4] flex flex-col md:flex-row w-full">
            <div className="w-full h-full bg-black opacity-20 cursor-pointer" onClick={() => onDrawerClose()}>
            </div>
            <div className="bg-white p-4">
                <div className="text-lg text-right bg-slate-200 rounded-full w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                    onClick={() => onDrawerClose()}>X
                </div>
                <div>
                    {product.title}
                </div>
            </div>
        </section>
    )
}

export default Drawer