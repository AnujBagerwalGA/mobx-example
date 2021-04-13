import React from 'react';
import { observer } from 'mobx-react-lite';

const Home = ({ store }) => {
  return (
    <div>
      <h1>Home</h1>
      {store.userInfo.subject?.map((sub, i) => (
        <li key={i}>{sub}</li>
      ))}
      <h2>{store.userInfo.name}</h2>
      <button onClick={() => store.updateUser('Hello World')}>
        Update Name
      </button>
      <button onClick={() => store.addSubject('DBMS')}>Add Subject</button>
    </div>
  );
};

export default observer(Home); // similar like HOC
