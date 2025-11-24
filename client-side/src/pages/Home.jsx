import React from 'react'
import Header from '../components/Header';
import Analysis from '../components/Analysis';
import TrustLayer from '../components/TrustLayer';
import TrustLevel from '../components/TrustLevel';
import TrustForAudience from '../components/TrustForAudience';
import Shop from '../components/Shop';
import Service from '../components/Service';
import FQ from '../components/FQ';

const Home = () => {
  return (
    <div>
      <Header />
      <Analysis />
      <TrustLayer />
      <TrustLevel />
      <TrustForAudience />
      <Shop />
      <Service />
      <FQ />
    </div>
  )
}

export default Home;