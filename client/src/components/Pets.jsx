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
            setPets(res.data.pets)
        }
        getPets()
    }, [])

    return (
        <div>
            Bark Bark Pet Div
        
        { pets.map((pets) =>{
            return (
                <div key={pets.id} className='pets'>
                    <img src={pets.picture} alt=''/>
                    <h3>{pets.name}</h3>
                </div>
            )
        })}
        </div>
    )
}

export default Pets