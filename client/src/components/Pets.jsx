import React from "react";
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


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

    let navigate = useNavigate()

    const thisPet = (pets) => {
        navigate(`${pets._id}`)
    }

    return (
        <div>
            Bark Bark Pet Div
        
        { pets.map((pets) =>{
            return (
                <div key={pets._id} className='pets' onClick={() => thisPet(pets)}>
                    <img src={pets.picture} alt=''/>
                    <h3>{pets.name}</h3>
                </div>
            )
        })}
        </div>
    )
}

export default Pets