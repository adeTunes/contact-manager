import React from 'react'
import { useState } from 'react'
import useFetch from './useFetch'
import {useNavigate, Link} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState('')

    const { data: contacts } = useFetch('http://localhost:8000/contacts')

    const handleSearch = e => {
        setSearchVal(e.target.value)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/contacts/${id}`, {
          method: 'DELETE'
        }).then(() => document.location.reload())
    }

  return (
    <div className='home'>
        <input type="search" value={searchVal} onChange={handleSearch} placeholder='Search contacts' />
        <button onClick={() => navigate('/create')}>Create new contact</button>
        <ul>
            {contacts && contacts.map(contact => {
                return contact.name.toLowerCase().includes(searchVal.toLowerCase()) && <li key={contact.id}><span>{ `${contact.name} ${contact.number}` }</span><span><Link to={'/contact/' + contact.id}><span>Edit contact</span></Link><button onClick={() => handleDelete(contact.id)}>delete</button></span></li>
            })
            }
        </ul>
    </div>
  )
}

export default Home