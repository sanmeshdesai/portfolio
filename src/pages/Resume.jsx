import { Download, Eye } from 'lucide-react';
import React from 'react'


const Resume = () => {
    return (
        <div className='mt-50 bg-transparent flex items-center justify-center px-4'>
            <div className='w-full max-w-2xl rounded-xl shadow-2xl p-6 text-center'>
                <h1 className='text-2xl text-gray-800 font-medium'>My Resume</h1>
                <p className='text-gray-500 mt-4'>View or Download my latest Resume</p>

                    <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
                        <a href="/Sanmesh_Desai.pdf" target='_black' 
                        className='flex items-center justify-center gap-3 px-6 py-3 rounded-md
                        bg-sky-300 text-gray-800 hover:-translate-y-0.5 transition-all duration-300 font-medium transition '>
                        <Eye size={18} /> View Resume</a>
                        <a href="/Sanmesh_Desai.pdf" target='_black' download
                        className='flex items-center justify-center gap-3 px-6 py-3 rounded-md
                        bg-sky-300 text-gray-800 hover:-translate-y-0.5 transition-all duration-300 font-medium transition'>
                        <Download size={18} /> Download PDF</a>
                    </div>
                
                <p className='text-gray-500 text-sm mt-8'>Last updated: Dec 2025</p>


            </div>
        </div>
    );
}

export default Resume