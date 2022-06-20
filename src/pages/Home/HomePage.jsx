// import css from './HomePage.module.css'
// https://robust-safe-crafter.glitch.me/

import useResource from './../../hooks/useResource';

// parisiusti ir iskonsolinti duomenis
function HomePage() {
  const [propertiesData, setPropertiesData] = useResource('/db.json');

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
