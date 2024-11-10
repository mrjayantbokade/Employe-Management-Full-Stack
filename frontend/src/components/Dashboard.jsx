
const Dashboard = () => {


    const data = [
        {
            "id": 1,
            "image": "https://example.com/profile1.jpg",
            "name": "Hukum Gupta",
            "email": "hcgupta@cstech.in",
            "phone": "1234567890",
            "designation": "HR",
            "gender": "Male",
            "createdAt": "2023-12-12"
        },
        {
            "id": 2,
            "image": "https://example.com/profile2.jpg",
            "name": "Sana Sharma",
            "email": "sana@cstech.in",
            "phone": "0987654321",
            "designation": "Developer",
            "gender": "Female",
            "createdAt": "2023-12-01"
        },
        {
            "id": 3,
            "image": "https://example.com/profile3.jpg",
            "name": "Rahul Verma",
            "email": "rahul@cstech.in",
            "phone": "1122334455",
            "designation": "Project Manager",
            "gender": "Male",
            "createdAt": "2023-11-25"
        },
        {
            "id": 4,
            "image": "https://example.com/profile4.jpg",
            "name": "Priya Nair",
            "email": "priya@cstech.in",
            "phone": "6677889900",
            "designation": "Designer",
            "gender": "Female",
            "createdAt": "2023-11-15"
        },
        {
            "id": 5,
            "image": "https://example.com/profile5.jpg",
            "name": "Ankit Mehta",
            "email": "ankit@cstech.in",
            "phone": "5566778899",
            "designation": "QA Engineer",
            "gender": "Male",
            "createdAt": "2023-11-10"
        },
        {
            "id": 6,
            "image": "https://example.com/profile6.jpg",
            "name": "Shreya Patel",
            "email": "shreya@cstech.in",
            "phone": "4433221100",
            "designation": "Data Scientist",
            "gender": "Female",
            "createdAt": "2023-11-05"
        },
        {
            "id": 7,
            "image": "https://example.com/profile7.jpg",
            "name": "Vikram Singh",
            "email": "vikram@cstech.in",
            "phone": "9988776655",
            "designation": "Marketing Manager",
            "gender": "Male",
            "createdAt": "2023-10-30"
        },
        {
            "id": 8,
            "image": "https://example.com/profile8.jpg",
            "name": "Nisha Reddy",
            "email": "nisha@cstech.in",
            "phone": "7788990011",
            "designation": "Business Analyst",
            "gender": "Female",
            "createdAt": "2023-10-25"
        },
        {
            "id": 9,
            "image": "https://example.com/profile9.jpg",
            "name": "Aman Khan",
            "email": "aman@cstech.in",
            "phone": "8899001122",
            "designation": "Software Engineer",
            "gender": "Male",
            "createdAt": "2023-10-20"
        },
        {
            "id": 10,
            "image": "https://example.com/profile10.jpg",
            "name": "Kavita Joshi",
            "email": "kavita@cstech.in",
            "phone": "3344556677",
            "designation": "Product Manager",
            "gender": "Female",
            "createdAt": "2023-10-15"
        },
            {
                "id": 1,
                "image": "https://example.com/profile1.jpg",
                "name": "Hukum Gupta",
                "email": "hcgupta@cstech.in",
                "phone": "1234567890",
                "designation": "HR",
                "gender": "Male",
                "createdAt": "2023-12-12"
            },
                {
                    "id": 2,
                    "image": "https://example.com/profile2.jpg",
                    "name": "Sana Sharma",
                    "email": "sana@cstech.in",
                    "phone": "0987654321",
                    "designation": "Developer",
                    "gender": "Female",
                    "createdAt": "2023-12-01"
                },
                {
                    "id": 3,
                    "image": "https://example.com/profile3.jpg",
                    "name": "Rahul Verma",
                    "email": "rahul@cstech.in",
                    "phone": "1122334455",
                    "designation": "Project Manager",
                    "gender": "Male",
                    "createdAt": "2023-11-25"
                },
                {
                    "id": 4,
                    "image": "https://example.com/profile4.jpg",
                    "name": "Priya Nair",
                    "email": "priya@cstech.in",
                    "phone": "6677889900",
                    "designation": "Designer",
                    "gender": "Female",
                    "createdAt": "2023-11-15"
                },
                {
                    "id": 5,
                    "image": "https://example.com/profile5.jpg",
                    "name": "Ankit Mehta",
                    "email": "ankit@cstech.in",
                    "phone": "5566778899",
                    "designation": "QA Engineer",
                    "gender": "Male",
                    "createdAt": "2023-11-10"
                },
                {
                    "id": 6,
                    "image": "https://example.com/profile6.jpg",
                    "name": "Shreya Patel",
                    "email": "shreya@cstech.in",
                    "phone": "4433221100",
                    "designation": "Data Scientist",
                    "gender": "Female",
                    "createdAt": "2023-11-05"
                },
                {
                    "id": 7,
                    "image": "https://example.com/profile7.jpg",
                    "name": "Vikram Singh",
                    "email": "vikram@cstech.in",
                    "phone": "9988776655",
                    "designation": "Marketing Manager",
                    "gender": "Male",
                    "createdAt": "2023-10-30"
                },
                {
                    "id": 8,
                    "image": "https://example.com/profile8.jpg",
                    "name": "Nisha Reddy",
                    "email": "nisha@cstech.in",
                    "phone": "7788990011",
                    "designation": "Business Analyst",
                    "gender": "Female",
                    "createdAt": "2023-10-25"
                },
                {
                    "id": 9,
                    "image": "https://example.com/profile9.jpg",
                    "name": "Aman Khan",
                    "email": "aman@cstech.in",
                    "phone": "8899001122",
                    "designation": "Software Engineer",
                    "gender": "Male",
                    "createdAt": "2023-10-20"
                },
                {
                    "id": 10,
                    "image": "https://example.com/profile10.jpg",
                    "name": "Kavita Joshi",
                    "email": "kavita@cstech.in",
                    "phone": "3344556677",
                    "designation": "Product Manager",
                    "gender": "Female",
                    "createdAt": "2023-10-15"
                }


    ]



    return (
        <>

            <div className={`px-5 py-4 bg-white rounded-md h-[560px] overflow-y-auto `}>

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

                        <div className="mt-2  h-[420px] overflow-y-auto ">
                            {data.map((item, index) => (
                                <div key={index} className="grid grid-cols-9 gap-4 items-center ">
                                    <h4>{item.id}</h4>
                                    <img src={item.image || ""} alt="broken profileImage" className="w-10 h-10 object-cover"/>
                                    <h4>{item.name}</h4>
                                    <h4>{item.email}</h4>
                                    <h4>{item.phone}</h4>
                                    <h4>{item.designation}</h4>
                                    <h4>{item.gender}</h4>
                                    <h4>{item.createdAt}</h4>
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