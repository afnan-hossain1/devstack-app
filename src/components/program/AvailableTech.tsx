// import React from 'react';
import { useState } from 'react';
import type { Iprogram } from '../../types/programType';
import TechCard from './TechCard';

const AvailableTech = ({program}: {program: Iprogram[]}) => {
    console.log(program, 'AvailableTech card');
    // set
    const [selectedStack, setSelectedStack] = useState<Iprogram[]>([]);
    const handleAddToStack = (tech: Iprogram) => {
        const isAlreadyAdded = selectedStack.some(item => item.name === tech.name);
        
        if (!isAlreadyAdded) {
            setSelectedStack([...selectedStack, tech]);
        }
    };
    const handleRemoveFromStack = (name: string) => {
        setSelectedStack(selectedStack.filter(item => item.name !== name));
    };

    return (
            <div className="flex justify-between items-top gap-3 ">
                <div className="grid grid-cols-3 gap-6 mt-6 mr-3">
                    {program.map((program:Iprogram, index: number) => {
                        return <TechCard key={index} program={program} onAdd={handleAddToStack} isAdded={selectedStack.some(item => item.name === program.name)} />;
                    })}
                </div>
                <div>
                    <div className="card bg-base-100 card-md shadow-sm border border-gray-300 mt-6">
                        <div className="card-body space-y-3">
                            <h2 className="card-title text-lg font-bold text-black">Your Stack</h2>
                            <p className="text-gray-600">{`${selectedStack.length} technologies selected`}</p>
                            {selectedStack.length === 0 ? (
                            <p className="text-gray-400 text-sm my-4">No technologies selected yet</p>
                            ) : (
                                <div className="space-y-3 my-4">
                                {selectedStack.map((tech, idx) => (
                                    <div key={idx} className="flex justify-between items-center border border-gray-100 p-4 rounded-md gap-2">
                                        <div className="flex justify-between items-center gap-2">
                                            <img src={tech.logo_url} className="w-5 h-6 object-cover rounded" alt={tech.name} />
                                            <div>
                                                <h4 className="font-semibold text-xs text-black">{tech.name}</h4>
                                                <span className="text-[10px] text-gray-400">{tech.category}</span>
                                            </div>
                                            <button 
                                                onClick={() => handleRemoveFromStack(tech.name)} 
                                                className="text-gray-400 hover:text-red-500 text-sm font-bold px-1 cursor-pointer">
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="justify-center card-actions mt-2">
                            {selectedStack.length > 0 && (
                                <button 
                                    onClick={() => setSelectedStack([])} 
                                    className="btn btn-outline btn-error w-full text-xs py-1">
                                    Remove All
                                </button>
                            )}
                        </div>
                            {/* <div className="justify-center card-actions">
                                <button className="btn btn-dash">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default AvailableTech;