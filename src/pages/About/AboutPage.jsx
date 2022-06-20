// parisisuti visus useriu is https://jsonplaceholder.typicode.com/users

import useResource from '../../hooks/useResource';
// panaudoti useResource
// ir atvazduoti ul saraso pavidalu

function AboutPage() {
  const [usersData, setUsersData] = useResource('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      <h1>About US</h1>

      {usersData.map((uObj, i) => (
        <ul key={i}>
          <li> {uObj.name} </li>
        </ul>
      ))}
    </div>
  );
}

export default AboutPage;
