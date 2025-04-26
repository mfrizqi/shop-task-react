import { useEffect, useState } from "react"

const Profile = () => {

    const [profileData, setProfileData] = useState({
        fullname: '',
        email: '',
        account: ''
    })

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem('loginData') || '{}')
        setProfileData({
            fullname: loginData.fullname,
            email: loginData.email,
            account: loginData.account
        })
    }, [])

    return (
        <section className="mt-24 max-w-[800px] mx-auto w-full">
            <h2 className="text-3xl text-slate-500 font-medium mb-8">My Profile</h2>
            <div className="border border-slate-300 rounded-lg bg-white shadow p-6 flex gap-8 flex-col w-[50%]">
                <div>
                    <div className="text-slate-400">Fullname</div>
                    <div className="text-neutral-600 font-semibold">{profileData.fullname}</div>
                </div>
                <div>
                    <div className="text-slate-400">Email</div>
                    <div className="text-neutral-600 font-semibold">{profileData.email}</div>
                </div>
                <div>
                    <div className="text-slate-400">Type</div>
                    <div className="text-neutral-600 font-semibold">{profileData.account}</div>
                </div>
            </div>
        </section>
    )
}

export default Profile