import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Login Page</h1> <hr />{' '}
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1234, name: 'juan', email: 'juan@gmail.com' })
        }
      >
        Establecer usuario
      </button>
    </div>
  );
}
