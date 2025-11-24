import React from 'react'
import FQCard from './FQCard';

const FQ = () => {
  return (
    <div className='lg:px-10 px-5 my-20 flex flex-col gap-5 lg:w-fit md:w-130 m-auto'>
      <FQCard title={"How does FrostFind detect fake reviews?"} answer={"We use advanced NLP, pattern analysis, and behavioral detection to identify suspicious reviews. Our system analyzes language patterns, user history, timing, and more."} />
      <FQCard title={"Is FrostFind available for all products?"} answer={"We support reviews across major e-commerce platforms and categories. Check our consumer app to see if your product is available."} />
      <FQCard title={"What languages does FrostFind support?"} answer={"We currently support English and Hindi, with plans to expand to more regional languages soon."} />
      <FQCard title={"How can businesses integrate FrostFind?"} answer={"Businesses can use our dashboard for monitoring, or embed our marketplace widget. We also offer API access for custom integrations."} />
    </div>
  )
}

export default FQ;