import React from "react";
import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const BASE_URL = 'http://localhost:3001/api'


const Pets = () => {

    const [pets, setPets] = useState([])

    const getPets = async () => {
        const res = await axios.get(`${BASE_URL}/pets`)
        console.log(res.data.pets)
        setPets(res.data.pets)
    }

    useEffect(() => {
        getPets()
    }, [])

    

    return (
        <div className="pet-grid">
        { pets.map((pets) =>{
            return (
                <div key={pets._id} className='pet-card'>
                    <img src={pets.picture} alt='' className="pet-image"/>
                    <br></br>
                    <h3>{pets.name}</h3>
                    <h3>age: {pets.age}</h3>
                    <p>{pets.about}</p>
                </div>
            )
        })}
        <Link to='/'>Back Home</Link>
        </div>
    )
}

export default Pets