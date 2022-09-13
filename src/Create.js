import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const contact = { name, number }


        fetch('http://localhost:8000/contacts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        })
        .then(() => {
            console.log('new contact added')
            navigate('/')
        })
}

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Full name'/>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter Phone Number'/>
            <button>Save Contact</button>
        </form>
        <button onClick={() => navigate('/')}>Go back</button>
    </>
  )
}

export default Create