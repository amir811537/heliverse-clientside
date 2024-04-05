import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import BusinessModel from "../Components/pages/BusinessModel/BusinessModel";
import Blogs from "../Components/pages/Blogs/Blogs";
import Contactus from "../Components/pages/ContactUs/Contactus";
import AddUser from "../Components/pages/AddUser/AddUser";
import HomeContent from "../Components/pages/HomeContent";
import UpdateUser from "../Components/pages/Updateuser/UpdateUser";
import Myteam from "../Components/pages/Myteam/Myteam";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
path:"addUser",
element:<AddUser></AddUser>
            },
            {
                path:'updateUser/:id',
                element:<UpdateUser></UpdateUser>,
                loader:({params})=>fetch(`https://serverside-heliverse.vercel.app/user/${params.id}`)
            },
            { path: 'myteam',
            element:<Myteam></Myteam>

            },
            {
                path:'/servies',
                element:<HomeContent></HomeContent>
            },

            {
                path:'/company',
                element:<Home></Home>
            },
            {
                path:'/businessModel',
                element:<BusinessModel></BusinessModel>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:"/contactsUs",
                element:<Contactus></Contactus>
            }
        ]
    }
]);
export default router;