import Logo from "../assets/logo-text.png"

import Hamburger from "../assets/hamburger.png"

const Nav = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center py-4">
                <img className="hidden md:flex w-32 h-auto" src={Logo} alt="Logo" />
                <span className="block md:hidden text-left p-4"><img src={Hamburger} alt="Hamburger" /></span>

                <ul className="hidden md:flex space-x-4 items-center">
                    <li className=" text-[#DB2777]"><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#technologies" className="hover:underline text-gray-600">Technologies</a></li>
                    <li><a href="#projects" className="hover:underline text-gray-600">Projects</a></li>
                    <li><a href="#about" className="hover:underline text-gray-600">About</a></li>
                    <li><a href="#contact" className="hover:underline text-gray-600">Contact</a></li>
                </ul>
                <ul className="flex items-center gap-x-4">
                    <button className="hover:underline cursor-pointer">Sign in</button>
                    <button className="hover:cursor-pointer hover:bg-linear-to-r from-[#DB2777] to-[#9333EA] text-white bg-[#DB2777] py-2 px-5 rounded-full">Sign up</button>
                </ul>
            </div>
        </nav>
     
    );
};

export default Nav;