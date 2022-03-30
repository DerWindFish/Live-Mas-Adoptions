import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/api'

const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([])
    const [addVolunteer, setAddVolunteer] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleAddVolunteer = (e) => {
        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const newVolunteer = {...addVolunteer}
        newVolunteer[fieldName] = fieldValue

        setAddVolunteer(newVolunteer)
    }

    useEffect(() => {
        async function getVolunteers() {
            const res = await axios.get(`${BASE_URL}/volunteer`)
            console.log(res.data.volunteers)
            setVolunteers(res.data.volunteers)
        }
        getVolunteers()
    }, [])

    return (
        <div>
            <h1>List of Volunteers:</h1>
        { volunteers.map((volunteers) => {
            return (
            <div key={volunteers._id} className='vol'>
                <p>name: { volunteers.name }</p>
                <p>phone: { volunteers.phone }</p>
                <p>email: { volunteers.email }</p>
                
            </div>
            )}    
        )}
        <h2>Add Volunteer:</h2>
        <form>
            <input
                type='text'
                name='name'
                required='required'
                placeholder='Enter your name'
                onChange={handleAddVolunteer}
            />
            <input
                type='text'
                name='phone'
                required='required'
                placeholder='Enter your phone number'
                onChange={handleAddVolunteer}
            />
            <input
                type='text'
                name='email'
                required='required'
                placeholder='Enter your email'
                onChange={handleAddVolunteer}
            />
            <button type="submit">Add</button>
        </form>
        </div>
     )
}

export default Volunteers