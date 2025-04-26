import { FormEvent, useState } from "react"
import { useNavigate } from "react-router"

const Register = () => {

    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate();

    const submitRegister = (e: FormEvent) => {
        e.preventDefault()
        const userDatas = JSON.parse(localStorage.getItem('userData') || '[]')

        if (userDatas.filter((user: any) => user.email === email).length > 0) {
            setErrMsg('Email has been registered')
        } else {
            const loginData: any = {
                fullname: fullname,
                email: email,
                account: 'member'
            }
            const setToken = window.btoa(loginData)
            
            localStorage.setItem('loginData', JSON.stringify(loginData))
            localStorage.setItem('tokenLogin', setToken)

            loginData.password = password
            userDatas.push(loginData)
            localStorage.setItem('userData',JSON.stringify(userDatas))

            navigate('/app')
        }

    }

    const formInvalid: () => boolean = () => {
        return email.length === 0 || fullname.length === 0 || password.length === 0
    }

    const handleInput = (name: string, value: string) => {
        setErrMsg('')
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        } else {
            setFullname(value)
        }
    }

    return (
        <>
            <section className="h-svh w-full flex justify-center bg-slate-100 px-8">
                <div className="flex flex-col flex-1 justify-center px-6 py-12 rounded-lg my-16">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <a href="/" className="block mb-8 text-gray-400 text-sm cursor-pointer">← Back to home</a>
                        <h2 className="text-center text-2xl/9 font-bold text-gray-700">
                            Create your new account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow p-4 rounded-lg">
                        <form onSubmit={(e) => submitRegister(e)} method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medum text-gray-600">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="text"
                                        name="fullname"
                                        type="text"
                                        required
                                        autoComplete="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                                        onChange={(e) => handleInput('fullname', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medum text-gray-600">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                                        onChange={(e) => handleInput('email', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medisum text-gray-600">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                                        onChange={(e) => handleInput('password', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                {errMsg &&
                                    <div className="text-sm text-rose-400 mb-4 py-1 rounded-md bg-rose-100 px-2">{errMsg}</div>
                                }
                                <button
                                    type="submit"
                                    className={`flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all cursor-pointer ${(formInvalid()) ? 'opacity-60' : 'hover:bg-emerald-500'}`}
                                    disabled={formInvalid()}
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Already have an account?{' '}
                            <a href="/auth/login" className="font-semibold text-emerald-600 hover:text-emerald-500 transition-all">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
