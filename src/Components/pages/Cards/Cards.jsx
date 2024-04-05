/* eslint-disable react/prop-types */
import "./card.css";
import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Cards({ data, refetch }) {
  const { _id, first_name, last_name, email, gender, avatar, domain, available } = data;
  const avatarUrl = avatar.split('?')[0];
  const badgeColor = available ? "blue" : "red";



  const handelAddmyTeam = (id) => {
    // console.log(id);
  
    // Assuming team data needs to be extracted from the user data
    const teamData = {
      // Extract relevant fields from the user data or customize as needed
      user_id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      domain: domain,
      available: available,
      avatar: avatarUrl
    };
    console.log("================>",teamData)
  
    axios.post('https://serverside-heliverse.vercel.app/team', teamData)
      .then((response) => {
        console.log(response.data);
        // Handle success or display any feedback to the user
        if (response.data) {
          // Optionally, you can display a success message or update UI
          Swal.fire({
            icon: "success",
            title: "you added a team member",
            text: "Team member has been added successfully.",
          });
        } else {
          // Handle any errors or display error message to the user
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add team. Please try again later.",
          });
        }
      })
  };
  





  const handeldelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`https://serverside-heliverse.vercel.app/user/${_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {

              refetch()

              Swal.fire(
                'Deleted!',
                'Your added User has been deleted.',
                'success'
              )
            }
          })
      }
    })


  }

  return (
    <div className="card-body-container">
      <div className="card-top-content">
        <div className="logo-style">
          <img src={avatarUrl} alt="" />
        </div>
        <div>
          <h3 className="top-txt">{first_name} {last_name}</h3>
        </div>
      </div>
      <div className="under-line"></div>
      <div className="img-content">
        <img src={avatarUrl} className="img-style" alt="card" />
      </div>
      <div className="text-center text-black">
        <p><span className="font-bold">Email:</span> {email}</p>
        <p><span className="font-bold">Gender:</span> {gender}</p>
        <p><span className="font-bold">Domain:</span> {domain}</p>
        <span className={`badge ${badgeColor}`}>{available ? "Available" : "Not Available"}</span>
      </div>
      <div className="under-line"></div>
      <div className="flex items-center justify-evenly p-5 gap-3">
<Link to={`/updateUser/${_id}`}>
<button  className="flex-col flex items-center">Update<TfiWrite className="text-red-500" /></button>

</Link>        <button onClick={() => handeldelete(_id)} className="flex-col flex items-center">Delete<RiDeleteBinLine className="text-red-600 text-xl" /></button>
        <button onClick={() => handelAddmyTeam(_id)} className="flex flex-col items-center gap-1">Add My team<IoPersonAddOutline className="text-xl text-red-600" /></button>
      </div>
    </div>
  );
}
