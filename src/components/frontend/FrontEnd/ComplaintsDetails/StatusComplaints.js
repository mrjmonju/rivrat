import React from 'react';

function StatusComplaints() {
    return (
        <div>
            <div className='rounded-3xl mb-10 border-none' style={{ backgroundColor: "#272635" }}>
                <div style={{ backgroundColor: "#f4f5f9" }} className="px-10 py-10 rounded-t-2xl rounded-b-3xl m-0">
                    <h1 className='mb-3'><i class="fa-solid fa-circle-check text-blue-500"></i> &nbsp; About <span className='text-blue-500 font-semibold underline '>Akbank</span></h1>
                    <h1 className='text-2xl text-slate-700 font-bold  tracking-wider'>Status of the Complaint</h1>
                </div>
                <div className='px-10 py-10'>
                    <div className='text-white flex justify-between mb-6'>
                        <h1><i class="fa-solid fa-thumbs-up"></i> support</h1>
                        <h1><i class="fa-solid fa-comment"></i> Comment</h1>
                        <h1><i class="fa-solid fa-share-nodes"></i></h1>
                        <h1><i class="fa-solid fa-bookmark"></i></h1>
                    </div>
                    <div className='text-center bg-blue-600 py-2 rounded-full'>
                        <button type="submit" className='text-lg text-white font-semibold tracking-wide'>Write a Similar Complaint</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusComplaints;