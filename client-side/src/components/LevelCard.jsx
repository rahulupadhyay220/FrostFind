import React from 'react'

const LevelCard = ({ title, description, detec_pattern1, detec_pattern2, detec_pattern3 }) => {
    return (
        <div className='text-center border w-full lg:p-10 md:px-4 md:py-10 py-10 px-7 rounded-xl border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-100'>
            {title === "Likely Genuine" ? (
                <div className='text-sm text-green-700 bg-[#b7e4c7d7] w-35 rounded-xl border p-2 mt-3 flex gap-2 m-auto'>
                <img className='w-5' src="../src/assets/check.svg" alt="check icon" />
                <p className='font-medium'>Likely Genuine</p>
            </div>
            ) : title === "Mixed Signals" ? (
                <div className='text-sm text-yellow-600 bg-[#f7e3c585] w-35 rounded-xl border p-2 mt-3 flex gap-2 m-auto'>
                <img className='w-5' src="../src/assets/warning.png" alt="warning icon" />
                <p className='font-medium'>Mixed Signals</p>
                </div>
            ) : (<div className='text-sm text-red-600 bg-[#f7cac585] w-25 rounded-xl border p-2 mt-3 flex gap-2 m-auto'>
                <img className='w-5' src="../src/assets/flag.svg" alt="flag icon" />
                <p className='font-medium'>Flagged</p>
                </div>)
            }
            <h3 className='text-xl font-medium my-5'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
            <div className='mt-6'>
                <p className='uppercase text-xs text-gray-600 font-medium mb-3'>Detection patterns:</p>
                <ul>
                    <li className='text-sm text-gray-600 list-disc list-inside'>{detec_pattern1}</li>
                    <li className='text-sm my-2 text-gray-600 list-disc list-inside'>{detec_pattern2}</li>
                    <li className='text-sm text-gray-600 list-disc list-inside'>{detec_pattern3}</li>
                </ul>
            </div>
        </div>
    )
}

export default LevelCard;