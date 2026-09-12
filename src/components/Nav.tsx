import Logo from "../assets/logo-text.png"


const Nav = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center py-4">
                <img src={Logo} alt="Logo" />
                <ul className="flex space-x-4 items-center">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex items-center gap-x-4">
                    <button>Sign in</button>
                    <button className="text-white bg-[#DB2777] py-2 px-5 rounded-full">Sign up</button>
                </ul>
            </div>
        </nav>
     
    );
};

export default Nav;