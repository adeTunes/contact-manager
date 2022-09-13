import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Search() {

    const [searchVal, setSearchVal] = useState('')
    // const [contacts, setContacts] = useState(data)


    const navigate = useNavigate()

    const handleSearch = e => {
        setSearchVal(e.target.value)
        // setContacts(contacts && contacts.filter(contact => contact.name.includes(e.target.value)))
        
    }

  return (
    <div>
        <input type="text" value={searchVal} onChange={handleSearch} placeholder='Search contacts' />
        <button onClick={ () => navigate('/') }>Go back home</button>
    </div>
  )
}

export default Search