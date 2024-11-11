import {useState, useEffect} from "react";
import axios from "axios";

const Dashboard =  () => {


    const [employeeData, setEmployeeData] = useState([]);

    const getData = async () => {
        try {
            const comingData = await axios.get("http://localhost:7777/api/v1/get-employees", {
                withCredentials: true
            })

            if (comingData){

                console.log(comingData.data.employees)

                setEmployeeData(comingData.data.employees)
            }
        } catch (error) {
            console.log("Error Status Code:", error.response.status)

        }
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <>

            <div className={`px-5 py-4 bg-white rounded-md  overflow-y-auto `}>

                <div>
                    <div className={`flex flex-row items-center justify-between`}>
                        <h1 className={`text-xl font-medium text-gray-700`}>
                            Dashboard
                        </h1>
                        <button className={`py-1 px-2 bg-transparent border-2 font-semibold text-lg border-gray-700 text-gray-700 rounded `}>
                            create emplooye +
                        </button>
                    </div>
                    <hr className={`mt-3 mb-3`}/>


                    <div className="text-gray-700 font-medium overflow-y-auto">
                        {/* Header Row */}
                        <div className="grid grid-cols-9 gap-4 items-center border-b pb-2">
                            <h3>Unique Id</h3>
                            <h3>Image</h3>
                            <h3>Name</h3>
                            <h3>Email</h3>
                            <h3>Phone</h3>
                            <h3>Designation</h3>
                            <h3>Gender</h3>
                            <h3>Created At</h3>
                            <h3>Action</h3>
                        </div>

                        {/* Data Row */}

                        <div className="mt-2   overflow-y-auto flex flex-col gap-4">
                            {employeeData.map((item, index) => (
                                <div key={index} className="grid grid-cols-9 gap-4 items-center ">
                                    <h4 className={`overflow-x-hidden`}>{item._id}</h4>
                                    <img src={item.profileImage || ""} alt="broken profileImage" className="w-10 h-10 object-cover rounded-full"/>
                                    <h4 className={`overflow-x-hidden`}>{item.name}</h4>
                                    <h4 className={`overflow-x-hidden`}>{item.email}</h4>
                                    <h4 className={`overflow-x-hidden`}>{item.phone}</h4>
                                    <h4 className={`overflow-x-hidden`}>{item.designation}</h4>
                                    <h4 className={`overflow-x-hidden`}>{item.gender}</h4>
                                    <h4 className={`overflow-x-hidden`}>{item.createdAt.split("T")[0]}</h4>
                                    <div className="flex flex-row gap-10">
                                        <button className="text-blue-500">edit</button>
                                        <button className="text-red-500">delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard