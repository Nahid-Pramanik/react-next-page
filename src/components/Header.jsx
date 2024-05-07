import { Link, NavLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=" bg-gray-100 px-4 py-5 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex justify-between ">
                {/* Logo section */}
                <Link to='/' className="flex items-center">
                    <FaBolt className="h-6 w-6 text-blue-400" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">nextPage</span>
                </Link>


                {/* Nav section */}
                <div >
                    {/* Menu bar */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <span >
                            {isMenuOpen === true ? <MdClose  className="h-6 w-6"/> : <RiMenu3Line className="h-6 w-6"/>}
                        </span>
                    </button>

                    <nav className={`flex flex-col md:flex-row duration-500 absolute  z-50 md:static  w-full bg-gray-300 md:bg-gray-100 text-center mt-[20px] md:mt-0 ${isMenuOpen ? 'left-0' : '-left-full'}`}>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'defoult')}>Home</NavLink>
                        <NavLink to='/books' className={({ isActive }) => (isActive ? 'active' : 'defoult')}>Books</NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'defoult')}>About Us</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;