import Banner from '../assets/banner-stack.png';

const banner = () => {
    return (
        <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex flex-col space-y-4">
                <h1 className="text-5xl font-bold">
                    Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p>Explore frontend backend, database, and tooling 
                    options,<br /> compare them side by side, and put together the stack
                    that fits your <br /> next project.
                </p>
                <div className="flex space-x-4">
                    <button className="text-white bg-gradient-to-r from-[#DB2777] to-[#9333EA] py-2 px-5 rounded-sm">Explore Technologies</button>
                    <button className="border border-gray-500 py-2 px-6 rounded-md">Learn More</button>
                </div>
            </div>
            <img src={Banner} alt="Banner" />
        </div>
    );
};

export default banner;