import React from 'react'

const Sample = ({ title, description, level }) => {
    return (
        <div className='bg-white px-7 py-5 rounded-xl'>
            <h3 className='font-medium'>{title}</h3>
            <p className='text-sm text-gray-600'>"{description}"</p>
            {level === "verify" ? (
                <div className='flex items-center gap-2'>
                    <div className='text-xs text-green-700 bg-[#b7e4c7d7] w-30 rounded-md border p-1 mt-3 flex gap-2'>
                        <img className='w-4' src="../src/assets/check.svg" alt="check icon" />
                        <p className='font-medium'>Likely Genuine</p>
                    </div>
                    <p className='text-xs mt-3 text-gray-400'>Verified Purchase</p>
                </div>
            ) : level === "warning" ? (
                <div className='flex items-center gap-2'>
                    <div className='text-xs text-yellow-600 bg-[#f7e3c585] w-30 rounded-md border p-1 mt-3 flex gap-2'>
                        <img className='w-4' src="../src/assets/warning.png" alt="warning icon" />
                        <p className='font-medium'>Mixed Signals</p>
                    </div>
                    <p className='text-xs mt-3 text-gray-400'>Unusual</p>
                </div>
            ) : (
                <div className='flex items-center gap-2'>
                    <div className='text-xs text-red-600 bg-[#f7cac585] w-25 rounded-md border px-2 py-1 mt-3 flex gap-2'>
                        <img className='w-4' src="../src/assets/flag.svg" alt="flag icon" />
                        <p className='font-medium'>Flagged</p>
                    </div>
                    <p className='text-xs mt-3 text-gray-400'>Pattern Match: Repetition</p>
                </div>
            )
            }
        </div>
    )
}

export default Sample;