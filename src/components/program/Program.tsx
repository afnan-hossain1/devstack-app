import React, { use } from 'react';
import type { Iprogram } from '../../types/programType';
import AvailableTech from './AvailableTech';

interface ProgramProps {
    programPromise: Promise<Iprogram[]>;
}

const Program = ({programPromise}:ProgramProps) => {

    const program = use(programPromise);
    // console.log(program);
    return <div className="container mx-auto flex flex-col space-y-4 py-4">
        <div className="flex flex-col space-y-2">
            <h2 className="text-4xl font-bold">Explore the <span className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] bg-clip-text text-transparent">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>

        </div>
        <AvailableTech program={program} />
    </div>
};

export default Program;