// parisisuti visus useriu is https://jsonplaceholder.typicode.com/users
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// panaudoti useResource
// ir atvazduoti ul saraso pavidalu

function AboutPage() {
  const [userssData, setUserssData] = useState([]);

  async function getUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('data ===', data);
    setUserssData(data);
  }

  useEffect(() => {
    getUsers();
  }, []);
  return <div>AboutPage</div>;
}

export default AboutPage;
