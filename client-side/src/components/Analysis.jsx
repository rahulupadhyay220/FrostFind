import React from 'react'
import AnalysisCard from './AnalysisCard';

const Analysis = () => {
  return (
    <div className='lg:mx-15 mx-5 lg:px-10 px-5 mb-8 flex lg:flex-row flex-col bg-blue-100 rounded-2xl'>
        <AnalysisCard heading={"Consumer App"} image={"../src/assets/circle-check.svg"} title={"Smart Review Analysis"} description={"Real-time authenticity detection with clear explanations"} />
        <AnalysisCard heading={"Business Dashboard"} image={"../src/assets/chart.svg"} title={"Trust Analytics"} description={"Monitor product credibility and reviewer patterns"} />
    </div>
  )
}

export default Analysis;