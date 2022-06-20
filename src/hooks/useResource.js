// custom hooks yra tiesiog specialios funcios kurios gali naudoti hooks
// turi prasidet su zodeliu 'use'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function useResource(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const { data } = await axios.get(url);
    console.log('data ===', data);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return [data, setData];
}

export default useResource;
