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
        }
        getVolunteers()
    }, [])

    return (
        <div>
            Volunteer div
        </div>
    )
}

export default Volunteers