import React, { useContext } from 'react';
import UserContext from '../userlogin/Usercontext';

function Logoname() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      {user ? (
        <h1 style={{ color: 'white', fontSize: '20px', textTransform: 'capitalize',margin: "10px" }}>Hi {user.name}</h1>
      ) : (
        <h1 style={{ color: 'white', fontSize: '20px', textTransform: 'capitalize',margin: "10px" }}>Hi Guest</h1>
      )}
    </div>
  );
}

export default Logoname;
