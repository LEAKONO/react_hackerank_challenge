import React from 'react'
import UserItem from './UserItem'

function UserList({filteredData}) {
  return (
    <div>
        
        <h2>UserList</h2>
        {filteredData.length==0?(
           <p>No users found.</p>

        ):
        filteredData.map(user=>(
         < UserItem key={user.id} user={user}  />
        ))}

    </div>
  )
}

export default UserList