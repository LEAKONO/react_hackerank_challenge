

import React from 'react'

function UserItem({ user }) {
  return (
    <div style={{border: "1px solid gray", padding: "10px", margin: "10px 0"}}>
      <h2>{user.name}</h2>
      <h4>@{user.username}</h4>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name} - {user.company.catchPhrase}</p>
    </div>
  )
}

export default UserItem