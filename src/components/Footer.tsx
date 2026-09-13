// import React from 'react';
import Logo from "../assets/logo-text.png"


const Footer = () => {
    return (
        <>
        <div className="footer flex justify-between bg-base-300 p-5 text-base-content gap-5">
            <div className="container mx-auto flex flex-col justify-start items-start space-y-3 py-4">
                <img src={Logo} alt="Logo" className=" w-32 h-auto" />
                <p className="text-left text-gray-600 max-w-xl">Curated tools, technologies, and resources for developers building <br /> mordern software.</p>
                <div className="flex gap-4 items-start">
                    <a href="github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">GitHub</a>
                    <a href="twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">Twitter</a>
                    <a href="linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">LinkedIn</a>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-black">PRODUCT</h2>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold text-black">COMPANY</h2>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
            </div>
        </div>
        <p className="footer footer-left p-4 bg-base-300 text-base-content">
              © 2026 DevStack. All rights reserved.
        </p>
        </>  
         
    );
}
            

export default Footer;