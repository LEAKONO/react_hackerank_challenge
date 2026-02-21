import React, { useEffect, useState } from 'react'
import UserList from './components/UserList'
import SearchBar from './components/SearchBar'

function App() {
  const[items,setItems]=useState([])
  const[search,setSearch]=useState("")

  useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
          .then(res=>res.json())
          .then(data=>setItems(data))
          .catch(err=>console.error(err))
    },[])
  const filteredData = items.filter(item =>
  item.name.toLowerCase().includes(search.toLowerCase())
)
  
  return (
    <div>
     <SearchBar search={search} setSearch={setSearch}/>
      <UserList  filtered={filteredData}/>
    </div>
  )
}

export default App