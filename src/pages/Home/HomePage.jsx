// import css from './HomePage.module.css'
// https://robust-safe-crafter.glitch.me/

import axios from 'axios';
import { useEffect, useState } from 'react';

// parisiusti ir iskonsolinti duomenis
function HomePage() {
  const [propertiesData, setPropertiesData] = useState([]);

  async function getProperties() {
    const { data } = await axios.get('/db.json');
    console.log('data ===', data);
    setPropertiesData(data);
  }

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div>
      <h1>Properties</h1>
      {propertiesData.map((oObj, i) => (
        <img key={i} src={oObj.image} alt='' />
      ))}
    </div>
  );
}
export default HomePage;
