import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cards from "./Cards/Cards";
import axios from "axios";
import { useForm } from "react-hook-form";

const HomeContent = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`https://serverside-heliverse.vercel.app/user?page=${currentPage}&limit=${usersPerPage}&name=${data.search}&domain=${data.domain}&gender=${data.gender}`);
      setUsers(response.data);
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`https://serverside-heliverse.vercel.app/user?page=${currentPage}&limit=${usersPerPage}`);
      setUsers(response.data);
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };

  const handleRefetch=()=>{
    getUsers()
  }

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="lg:text-5xl text-3xl font-bold">Services We Offer</h2>
      </div>
      <div className="flex justify-center items-center py-7">
        <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            required
            placeholder="Search UserName..."
            className="w-full md:w-80 px-3 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
            {...register("search")}
          />
          <select
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            {...register("domain")}
          >
            <option value="">All</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Management">Management</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Sales">Sales</option>
          </select>
          <select
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            {...register("gender")}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
          
        </form>
        
      </div>

      {users.length === 0 ? (
        <div className="text-center">No users found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4">
          {users.map((item, index) => (
            <Cards refetch= {handleRefetch} data={item} key={index} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-3">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <FaArrowLeft className="text-2xl" />
        </button>
        <p>Page {currentPage}</p>
        <button onClick={nextPage}>
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
