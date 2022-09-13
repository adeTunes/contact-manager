import React,  { useState } from 'react'
import useFetch from './useFetch'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ContactDetails() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { data } = useFetch('http://localhost:8000/contacts/' + id)
    const [ contact, setContact ] = useState(data);

    useEffect(() => {
        setContact(data)
    }, [data, setContact])
    

    const handleEdit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:8000/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        })
        .then(() => {
            console.log('Successfully edited contact')
            navigate('/')
        })
    }

    const handleChange = (value) => (e) => setContact({ ...contact, [value]: e.target.value })

  return (
    
    <div>
        {data &&
        <>
            <h3>{ contact?.name }</h3>
            <p>{ contact?.number }</p>
            <form onSubmit={handleEdit}>
                <input type="text" placeholder='Enter new name' value={contact?.name} onChange={handleChange("name")}/>
                <input type="text" placeholder='Enter new phone number' value={contact?.number} onChange={handleChange("number")} />
                <button>Save editing</button>
            </form>
        </>
        }
    </div>
  )
}

export default ContactDetails