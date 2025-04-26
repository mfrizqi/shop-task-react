import { useEffect, useState } from "react";

const Header = () => {

    const currentRoute = window.location.pathname;
    const [hideHeader, setHideHeader] = useState(false)

    useEffect(()=>{
        console.log(currentRoute)
        if(currentRoute.includes('/auth')){
            setHideHeader(true)
        } else {
            setHideHeader(false)
        }
    },[currentRoute])

    return (
        <section className={`absolute top-0 left-0 right-0 w-full flex justify-between px-4 py-4 border-b border-slate-300 bg-white ${hideHeader? 'hidden' : ''}`}>
            <div className='flex gap-4'>
                <a href="/" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                    Task Manager
                </a>
                <a href="/shop" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                    Shop
                </a>
            </div>
            <a href="/auth/login" className="font-semibold text-slate-600 hover:text-emerald-500 transition-all">
                Account
            </a>
        </section>
    )
}

export default Header