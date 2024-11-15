import {useEffect, useState} from "react";
import axios from "axios";

const EditEmployee = ({dataProps}) => {

    // console.log(dataProps)
    const [_id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (dataProps) {
            setId(dataProps._id || "");
            setName(dataProps.name || "");
            setEmail(dataProps.email || "");
            setDesignation(dataProps.designation || "");
            setPhone(dataProps.phone || "");
            setGender(dataProps.gender || "");
        }
    }, [dataProps]);


    const handleEdit = async (e) => {
        e.preventDefault();

        const editedData = {
            name,
            email,
            designation,
            phone,
            gender,
        };

        try {
            const response = await axios.patch(
                `http://localhost:7777/api/v1/edit-employee/${dataProps._id}`,
                editedData,
                {
                    withCredentials: true
                }

            );
            console.log(response.data);
            console.log(editedData, "edited data");

            alert("Employee Updated successfully");

            setName("");
            setEmail("");
            setDesignation("");
            setPhone("");
            setGender("");
        } catch (error) {
            console.error("Error editing or updating employee:", error);
        }
    };

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <form onSubmit={handleEdit}>
                <div className="px-5 py-6 bg-white rounded-md flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        {/* Name Input */}
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400"
                            type="text"
                            placeholder="Employee Name"
                            required
                        />

                        {/* Email Input */}
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400"
                            type="email"
                            placeholder="Email"
                            required
                        />



                        {/* Designation Select */}
                        <select
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400"
                            required
                        >
                            <option value="">Select Designation</option>
                            <option value="HR">HR</option>
                            <option value="manager">Manager</option>
                            <option value="sales">Sales</option>
                        </select>

                        {/* Phone Input */}
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400"
                            type="tel"
                            placeholder="Phone"
                            required
                            pattern="^[0-9]{10}$"
                            maxLength="10"
                        />

                        {/* Gender Select */}
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="px-2 py-1 rounded border border-slate-300 outline-1 outline-blue-400"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>


                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleEdit}
                        type="submit"
                        className="bg-green-600 text-white px-5 py-1 rounded"
                    >
                        update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditEmployee;