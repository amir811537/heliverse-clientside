import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState(false);
    const onSubmit = async (data) => {
        data.available = status;
    
        try {
            // Send the form data to the backend API
            const response = await axios.post('http://localhost:5000/user', data);
            console.log(response.data);
            if(response.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
            // Log the response from the backend
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-white border rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">Add User !</h3>
                <Link to="/">
                
                
                
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                
                
                </Link>
            </div>

            <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                            <input type="text" {...register("first_name", { required: true })} id="first_name" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 ${errors.first_name ? 'border-red-500' : ''}`} placeholder="User first name..." />
                            {errors.first_name && <span className="text-red-500">First name is required</span>}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                            <input type="text" {...register("last_name", { required: true })} id="last_name" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 ${errors.last_name ? 'border-red-500' : ''}`} placeholder="User last name..." />
                            {errors.last_name && <span className="text-red-500">Last name is required</span>}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                            <input type="email" {...register("email", { required: true })} id="email" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 ${errors.email ? 'border-red-500' : ''}`} placeholder="Enter User Email..." />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="gender" className="text-sm font-medium text-gray-900 block mb-2">Gender</label>
                            <select id="gender" {...register("gender", { required: true })} className={`w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider ${errors.gender ? 'border-red-500' : ''}`}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && <span className="text-red-500">Gender is required</span>}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="domain" className="text-sm font-medium text-gray-900 block mb-2">Domain</label>
                            <select id="domain" {...register("domain", { required: true })} className={`w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider ${errors.domain ? 'border-red-500' : ''}`}>
                                <option value="">Select domain</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Finance">Finance</option>
                                <option value="IT">IT</option>
                                <option value="Management">Management</option>
                                <option value="UI Designing">UI Designing</option>
                                <option value="Sales">Sales</option>
                            </select>
                            {errors.domain && <span className="text-red-500">domain is required</span>}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="avatar" className="text-sm font-medium text-gray-900 block mb-2">Avatar Link</label>
                            <input type="text" {...register("avatar")} id="avatar" className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5`} placeholder="Enter avatar link..." />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="status" className="text-sm font-medium text-gray-900 block mb-2">Status</label>
                            <input type="checkbox" id="status" checked={status} onChange={(e) => setStatus(e.target.checked)} className="mr-2" />
                            <label htmlFor="status">Active</label>
                        </div>
                    </div>
                    <div className=" my-6 p-6 flex items-center justify-center border-t border-gray-200 rounded-b">
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
