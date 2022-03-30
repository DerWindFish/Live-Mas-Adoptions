import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/api'

const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([])

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
                <p>ID: { volunteers._id }</p>
                
            </div>
            )}    
        )}
        </div>
     )
}

export default Volunteers