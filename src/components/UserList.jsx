import React from 'react'
import UserItem from './UserItem'

function UserList({filtered}) {
  return (
    <div>
        
        <h2>UserList</h2>
        {filtered.length===0?(
           <p>No users found.</p>

        ):
        filtered.map(user=>(
         < UserItem key={user.id} user={user}  />
        ))}

    </div>
  )
}

export default UserList