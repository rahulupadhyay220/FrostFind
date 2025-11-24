import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FQCard = ({ title, answer }) => {
    return (
        <div className='lg:w-150 w-auto text-center border border-gray-200 hover:border-blue-200 rounded-md'>
            <div className='lg:px-10 p-4 flex justify-between hover:cursor-pointer rounded-t-md bg-gray-100'>
                <h3>{title}</h3>
                <div><ArrowDownwardIcon /></div>
            </div>
            <div className='bg-gray-50'>
                <p className='lg:px-10 px-4 py-3 text-start'>{answer}</p>
            </div>
        </div>
    )
}

export default FQCard;