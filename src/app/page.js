import Image from 'next/image';
import { useEffect } from 'react';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <header>
        <Image alt="header_logo" src="/images/Logo.png" />
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Description</th>
            <th>Image</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.description}</td>
              <td>
                <Image alt={user.name} src={user.image} width={50} height={50} />
              </td>
              <td>{user.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default page;
