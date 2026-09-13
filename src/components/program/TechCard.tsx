// import React from 'react';
import type { Iprogram } from '../../types/programType';

interface TechCardProps {
    program: Iprogram;
    onAdd: (program: Iprogram) => void;
    isAdded: boolean;
}
// inter
const TechCard = ({program, onAdd, isAdded}: TechCardProps) => {
// const TechCard = ({program}: {program: Iprogram}) => {
    // const [isSelected, setIsSelected] = useState(false)
    
    return (
            <div className="flex flex-col sm:flex-row md:flex-row gap-[19px]">
                <div className="card bg-base-100 shadow-sm border border-gray-300 p-2">
                    <figure className="flex justify-between py-1 px-3">
                        
                        <img className=" w-13 h-13 object-cover rounded-md"
                            src={program.logo_url}
                            alt="Shoes" />
                        <span className="badge badge-xs badge-warning">{program.tag}</span>
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="card-title">{program.name}</h2>
                        <p className="font-semibold items-center">{program.description}</p>
                    <div className="my-8 flex gap-3 items-center">
                        <span className="badge badge-soft badge-primary text-black">{program.category}</span>
                        <p className="flex">{program.difficulty}</p>
                        <h3 className="font-semibold flex items-center justify-center gap-1">
                            <div className="text-orange-500 text-90px">
                            ★
                            </div> <span className="text-black-600">{program.rating}</span></h3>
                    </div>
                        <div className="card-actions justify-center mt-4">
                                <button 
                            onClick={() => onAdd(program)} 
                            disabled={isAdded}
                            className={`btn w-full btn-outline text-sm font-semibold py-2 px-3 transition-all ${
                                isAdded ? 'btn bg-pink-300 text-error  cursor-not-allowed hover:bg-transparent   w-full' : 'bg-black text-white'
                            }`}
                        >
                            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TechCard;