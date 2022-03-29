import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/api'

const Volunteers = (props) => {

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
        volunteers.map((volunteers) => {
            return (
            <div key={volunteers.id}>
                <h3>{ volunteers.name }</h3>
                <h3>{ volunteers.phone }</h3>
                <h3>{ volunteers.email }</h3>
            </div>
            )    
        })
     )
}

export default Volunteers