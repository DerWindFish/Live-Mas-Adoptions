import React from "react";
import { useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'


const Pets = () => {

    const [pets, setPets] = useState([])

    useEffect(() => {
        async function getPets() {
            const res = await axios.get(`${BASE_URL}/pets`)
            console.log(res.data.pets)
        }
        getPets()
    }, [])

    return (
        <div>
            Bark Bark Pet Div
        </div>
    )
}

export default Pets