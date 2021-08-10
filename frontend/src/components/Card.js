import React, { useState, useEffect } from 'react';
import { gql, useSubscription } from '@apollo/react-hooks';

const RECEIVER_POSTS = gql`
subscription {
  postReceived {
    id
    name
    age
  }
}
`;

export default function Card() {
  const [userInfos, setUserInfos] = useState([]);
  const { data } = useSubscription(RECEIVER_POSTS);

  useEffect(() => {
    if (data?.postReceived) {
      setUserInfos((prevValues) => [...prevValues, {
        name: data.postReceived.name,
        age: data.postReceived.age,
      }]);
    }
  }, [data]);

  console.log(data);

  return (
    <div>
      { userInfos.map(({ id, name, age }) => (
        <div className="card" key={id}>
          <h2>{name}</h2>
          <hr />
          <h4>{age}</h4>
        </div>
      ))}
    </div>
  );
}
