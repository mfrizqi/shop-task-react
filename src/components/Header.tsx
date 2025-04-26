import { useEffect, useState } from "react";
import cartIcon from '../assets/icon/cart.svg'

const Header = () => {

    const currentRoute = window.location.pathname;
    const [hideHeader, setHideHeader] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showAccount, setShowAccount] = useState(true)

    const logout = ()=>{
        localStorage.removeItem('tokenLogin')
        localStorage.removeItem('loginData')
        window.location.href = '/'
    }

    useEffect(() => {
        if (currentRoute.includes('/auth')) {
            setHideHeader(true)
        } else {
            setHideHeader(false)
        }

        if (currentRoute.includes('/shop')) {
            setShowCart(true)
        } else {
            setShowCart(false)
        }

        if (currentRoute.includes('/app')) {
            setShowAccount(false)
        } else {
            setShowAccount(true)
        }
    }, [currentRoute])

    return (
        <section className={`absolute top-0 left-0 right-0 w-full flex justify-between px-4 py-4 border-b border-slate-300 bg-white ${hideHeader ? 'hidden' : ''}`}>
            <div className='flex gap-4'>
                <a href="/" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                    Task Manager
                </a>
                <a href="/shop" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                    Shop
                </a>
            </div>
            <div className="flex items-center gap-4">
                {showCart && <img src={cartIcon} alt="" />}
                {showAccount &&
                    <a href="/auth/login" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                        Account
                    </a>
                }
                {!showAccount && 
                <div onClick={logout} className="font-semibold text-slate-600 hover:text-emerald-500 transition-all cursor-pointer">
                    Logout
                </div>}
            </div>
        </section>
    )
}

export default Header