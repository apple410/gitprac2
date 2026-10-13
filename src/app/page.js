'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user');
        const result = await res.json();

        setData(Array.isArray(result) ? result : [result]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Data</h2>

      <div>
        {data.map((user, index) => (
          <div key={user.id || index} style={{ marginBottom: '15px' }}>
            <p>
              <strong>Name: </strong> {user?.name}
            </p>
            <p>
              <strong>City: </strong> {user?.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
