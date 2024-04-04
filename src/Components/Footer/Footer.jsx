import logo from "../../assets/Screenshot_4-removebg-preview.jpg"
const Footer = () => {

  return (
    <div className="flex flex-col bg-black">
    <main className="flex-grow">
        {/* <!-- Content goes here --> */}
<div className="flex flex-col justify-center  items-center">
  <img className="py-10 w-1/5" src={logo} alt="" />
</div>
<hr className="h-px mx-auto border border-gray-500 w-[300px] lg:w-[800px]" />

    </main>

    
    <footer className="bg-black text-white py-10">
        <div className="container mx-auto text-center flex-wrap">
            <p>&copy; 2024 My Website. All rights reserved - Heliverse</p>
        </div>
    </footer>
</div>
  );
};

export default Footer;