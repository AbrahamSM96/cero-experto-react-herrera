import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function HomePage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}
