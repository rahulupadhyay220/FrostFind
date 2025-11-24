import React from 'react'
import LayerCard from './LayerCard'

const TrustLayer = () => {
  return (
    <div className='lg:px-10 px-5'>
      <div className='mt-30 mb-20'>
        <h1 className='text-center lg:text-4xl text-3xl font-semibold'>Why Trust Matters More Than Stars</h1>
        <p className='text-gray-500 text-center my-3 lg:text-xl md:text-xl text-sm'>Every review is unique. Every flagged review deserves an explanation.</p>
      </div>
      <div className='flex justify-evenly lg:flex-row flex-col'>
        <LayerCard title={"Explainability First"} image={"../src/assets/security.png"} description={"We don't just filter—we explain. See exactly why we flagged that review."} tagLevel1={"Transparency"} tagLevel2={"Clarity"} />
        <LayerCard title={"Real-Time Detection"} image={"../src/assets/thunder.png"} description={"Advanced NLP and pattern analysis catch manipulation instantly, protecting your purchases."} tagLevel1={"Fast"} tagLevel2={"Accurate"} />
        <LayerCard title={"Multi-Layered Verification"} image={"../src/assets/users.svg"} description={"Consumer app, business dashboard, and marketplace widgets—trust across all platforms."} tagLevel1={"Modular"} tagLevel2={"Scalable"} />
      </div>
    </div>
  )
}

export default TrustLayer