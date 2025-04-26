const NotFound = ()=>{
    return(
        <section className="relative h-svh w-full z-[-2]">
            <div className="absolute top-[50%] left-[50%] text-2xl text-slate-400" style={{transform: 'translate(-50%,-50%)'}}>
                <div className="text-4xl font-semibold text-center mb-2">404</div>
                <div>Page Not Found :(</div>
            </div>
        </section>
    )
}

export default NotFound