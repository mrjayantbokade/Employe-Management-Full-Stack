import {useState, useEffect} from "react";
import axios from "axios";


const Login =  () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginData, setLoginData] = useState("")
    const [show, setShow] = useState("hidden")




    const loginHandler = async (e) => {

        e.preventDefault()
        const credentials = {
            email,
            password
        }
        try {
            const comingData = await axios.post("http://localhost:7777/api/v1/login-admin", credentials, {
                withCredentials: true
            })

            if (comingData){
                localStorage.clear()
                localStorage.setItem('accessToken', comingData.data.data.accessToken)
                window.location.reload()

            }
        } catch (error) {
            console.log("Error Status Code:", error.response.status)
            if (error.response.status) {
                setShow("")
                setTimeout(() => {
                    setShow("hidden")
                }, 2000)
            }
        }





        setEmail('')
        setPassword('')
    }


    return (
        <div className={`flex flex-col  gap-10 justify-center items-center h-screen w-screen fixed`}>
            <div className={`${show} bg-white px-2 py-1 rounded-md `}>
                <p className={`text-red-500 font-semibold `}>Incorrect email or password !!!</p>
            </div>
            <form onSubmit={loginHandler}>

                <div className={`px-5 py-6 bg-white rounded-md flex flex-col gap-8 `}>
                    <div className={`flex flex-col gap-4`}>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className={`px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400 `} type="text" placeholder="email"/>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            className={`px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400 `} type="password" placeholder="password"/>

                    </div>
                    <button
                        onSubmit={(e) => {
                            loginHandler(e)
                        }}
                        className={`bg-blue-600 text-white px-5 py-1 rounded`}>login
                    </button>

                </div>

            </form>


        </div>
    )
}

export default Login