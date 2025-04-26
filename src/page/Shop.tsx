import { FormEvent, useEffect, useState } from "react"
import ProductItem from "../components/ProductItem"
import { Product } from "../types"
import { Drawer } from "../components/Drawer"
import { emptyDetail } from "../constants"

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [frozeProducts, setFrozenProducts] = useState<Product[]>([])
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState<any>(emptyDetail)

    const submitSearch = (event: FormEvent) => {
        event.preventDefault()

        if (keyword.length === 0) {
            setProducts(frozeProducts)
        } else {
            setProducts(frozeProducts.filter((item) => item.title.toLowerCase().includes(keyword)))
        }
    }

    const handleSearch = (value: string) => {
        setKeyword(value)
        if (value.length === 0) {
            setProducts(frozeProducts)
        } else {
            setTimeout
            setProducts(frozeProducts.filter((item) => item.title.toLowerCase().includes(value)))
        }
    }

    const fetchProductsData = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setFrozenProducts(data)
                setLoading(false)
            }
            );
    }

    const handleDetail = (product: Product) => {
        setProductDetail(product)
    }

    const closeDrawer = () => {
        setProductDetail(emptyDetail)
        document.body.style.overflow = 'auto'
    }

    useEffect(() => {
        fetchProductsData()
    }, [])

    return (
        <section className="pt-16 max-w-[1000px] mx-auto px-8">
            {productDetail.title.length > 0 && <Drawer product={productDetail} onDrawerClose={() => closeDrawer()} />}

            <form onSubmit={(e) => (submitSearch(e))}>
                <div className="py-8 flex flex-col md:flex-row gap-4">
                    <input type="text" className="text-zinc-700 font-semibold border border-slate-500 py-2 px-4 leading-1 focus:outline-none focus:border-emerald-600 hover:border-emerald-600 transition-all placeholder:text-neutral-400/50 rounded" placeholder="Search product" onChange={(e) => handleSearch(e.target.value)} />
                    <button type="submit" className="bg-emerald-600 text-white px-4 rounded py-2">Search</button>
                </div>
            </form>
            {loading && <div className="bg-slate-400 text-center text-white flex justify-center rounded p-4">
                <div className="mr-2">Loading product</div>
                <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>}
            {keyword.length > 0 && products.length === 0 &&
                <div className="p-4 bg-black bg-slate-200 rounded">"{keyword}" is not found</div>
            }
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => {
                    return (
                        <ProductItem product={product} key={product.id} onDetail={() => handleDetail(product)}></ProductItem>

                    )
                })}
            </section>
        </section>
    )
}

export default Shop