import React from 'react'
import LevelCard from './LevelCard';

const TrustLevel = () => {
  return (
    <div className='lg:px-10 px-5'>
      <div className='mt-30 mb-20'>
        <h1 className='text-center lg:text-4xl text-3xl font-semibold'>Three Levels of Trust</h1>
        <p className='text-gray-500 text-center my-3 lg:text-xl md:text-xl text-sm'>Every review gets a clear, actionable verdict</p>
      </div>
      <div className='flex justify-evenly lg:flex-row md:flex-row gap-6 flex-col'>
        <LevelCard title={"Likely Genuine"} description={"This review matches authentic user behavior patterns. It provides genuine insights about the product."} detec_pattern1={"Natural language patterns"} detec_pattern2={"Consistent user history"} detec_pattern3={"Specific product details"} />
        <LevelCard title={"Mixed Signals"} description={"This review has some unusual patterns. Consider it alongside other verified reviews."} detec_pattern1={"Unusual activity timing"} detec_pattern2={"Templated sections"} detec_pattern3={"Generic descriptions"} />
        <LevelCard title={"Flagged"} description={"This review likely contains manipulation. It may not reflect genuine customer experience."} detec_pattern1={"Burst activity detected"} detec_pattern2={"Language manipulation"} detec_pattern3={"Suspicious patterns"} />
      </div>
    </div>
  )
}

export default TrustLevel;