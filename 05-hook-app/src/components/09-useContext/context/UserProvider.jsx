import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id:1243,
//     name: 'Abraham',
//     email: 'abraham@gmail.com'
// }

export default function UserProvider({ children }) {
    const [user, setUser] = useState()
    
  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  )
}
