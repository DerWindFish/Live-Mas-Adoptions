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
            <div key={volunteers.id} className='vol'>
                <h2>name: { volunteers.name }</h2>
                <h4>phone: { volunteers.phone }</h4>
                <h4>email: { volunteers.email }</h4>
                <h6>ID: { volunteers._id }</h6>
                <h4>---------------------------------------</h4>
            </div>
            )}    
        )}
        </div>
     )
}

export default Volunteers