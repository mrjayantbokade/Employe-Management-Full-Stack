import axios from "axios";

const Header = () => {
    const logoutHandler = async () => {

         const comingData = await  axios.post("http://localhost:7777/api/v1/logout-admin")
        console.log(comingData)
        localStorage.clear()
        window.location.reload()

    }


    return (
        <>
            <div className={` bg-gray-800 px-5 w-full py-3 justify-center items-center  `}>

                <div className={`flex justify-between items-center flex-row `}>

                    <div className={`flex flex-col  text-white`}>
                        <h2 className={`text-2xl`}>welcome,</h2>
                        <h1 className={`text-3xl font-semibold`}>admin here</h1>
                    </div>

                    <div className={`flex flex-row gap-8 text-white items-center`}>

                        <button onClick={logoutHandler} className={`py-1 px-2 bg-red-600 text-white rounded`}>
                            logout
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default Header