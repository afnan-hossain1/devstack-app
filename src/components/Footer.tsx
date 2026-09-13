// import React from 'react';
import Logo from "../assets/logo-text.png"


const Footer = () => {
    return (
        <>
        <div className="footer flex flex-col md:flex-row justify-between bg-base-300 p-8 text-base-content gap-8">
            <div className="flex flex-col justify-start items-start space-y-3 max-w-md">
                <img src={Logo} alt="Logo" className=" w-32 h-auto" />
                <p className="text-left text-gray-600 max-w-xl">Curated tools, technologies, and resources for developers building <br /> mordern software.</p>
                <div className="flex gap-4 items-start">
                    <a href="github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">GitHub</a>
                    <a href="twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">Twitter</a>
                    <a href="linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-gray-800 mx-2">LinkedIn</a>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-semibold text-black mb-1">PRODUCT</h2>
                <a href="#" className="hover:underline text-gray-600">Home</a>
                <a href="#" className="hover:underline text-gray-600">Technologies</a>
                <a href="#" className="hover:underline text-gray-600">Projects</a>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-semibold text-black mb-1">COMPANY</h2>
                <a href="#" className="hover:underline text-gray-600">About</a>
                <a href="#" className="hover:underline text-gray-600">Contact</a>
                <a href="#" className="hover:underline text-gray-600">Careers</a>
            </div>
        </div>
        <p className="footer footer-left p-4 bg-base-300 text-base-content">
              © 2026 DevStack. All rights reserved.
        </p>
        </>  
         
    );
}
            

export default Footer;