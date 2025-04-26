import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { dummyUserDatas } from "../constants";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate();

    const submitLogin = (event: FormEvent) => {
        event.preventDefault()

        if (localStorage.getItem('userData')) {
            const userData = JSON.parse(localStorage.getItem('userData') || '[]')
            const user = userData.filter((user: any) => user.email === email)
            if (user.length > 0) {
                if (user[0].password === password) {
                    const loginData = user[0]
                    delete loginData.password

                    const setToken = window.btoa(loginData)
                    localStorage.setItem('tokenLogin', setToken)
                    localStorage.setItem('loginData', JSON.stringify(loginData))
                    navigate('/app')
                } else {
                    setErrMsg('Incorrect Email or Password')
                }
            } else {
                setErrMsg('Email is not registered')
            }
        }
    }

    const handleInput = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setErrMsg('')
        if (name === 'email') {
            setEmail(event.currentTarget.value)
        } else {
            setPassword(event.currentTarget.value)
        }
    }

    const redirectToApp = () => {
        localStorage.getItem('tokenLogin') ? navigate('/app') : ''
    }

    useEffect(() => {
        if (!localStorage.getItem('userData')) {
            initUserData()
        }
        redirectToApp()
    }, [])

    const initUserData = () => {
        localStorage.setItem('userData', JSON.stringify(dummyUserDatas))
    }

    return (
        <>
            <section className="h-svh w-full flex justify-center bg-slate-100 px-8">
                <div className="flex flex-col flex-1 justify-center py-12 rounded-lg my-16">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <a href="/" className="block mb-8 text-gray-400 text-sm cursor-pointer">← Back to home</a>
                        <h2 className="text-center text-2xl/9 font-bold text-gray-700">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow p-4 rounded-lg">
                        <form onSubmit={(e) => { submitLogin(e) }} method="POST" className="space-y-6">
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
                                        onChange={(e) => { handleInput('email', e) }}
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
                                        onChange={(e) => { handleInput('password', e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                {errMsg.length > 0 &&
                                    <div className="text-sm text-rose-400 mb-4 py-1 rounded-md bg-rose-100 px-2">{errMsg}</div>
                                }
                                <button
                                    type="submit"
                                    className={`flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all cursor-pointer ${(email.length === 0 || password.length === 0) ? 'opacity-60' : 'hover:bg-emerald-500'}`}
                                    disabled={email.length === 0 || password.length === 0}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Don't have an account?{' '}
                            <a href="/auth/register" className="font-semibold text-emerald-600 hover:text-emerald-500 transition-all">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
