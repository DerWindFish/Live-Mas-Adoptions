import React from "react"
import {useState, useEffect} from 'react'
import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'

const NewVolunteer = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [addVolunteer, setAddVolunteer] = useState(false)


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const createVolunteer = async () => {
        await axios.post(`${BASE_URL}/volunteer/`, {
            name: name,
            phone: phone,
            email: email
        })
        .then(function (respose) {
            setAddVolunteer(true);
            console.log(respose)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    useEffect(() => {
        return () => {
            setAddVolunteer(false)
        }
    }, [addVolunteer])

    return(
        <div>
            <input
                type='text'
                name='name'
                required='required'
                placeholder="Enter your name"
                onChange={(event) => handleName(event)}
                />
            <input
                type='text'
                name='phone'
                required='required'
                placeholder="Enter your phone number"
                onChange={(event) => handlePhone(event)}
                />
            <input
                type='email'
                name='email'
                required='required'
                placeholder="Enter your email"
                onChange={(event) => handleEmail(event)}
                />
            <button className="submit-button" type='submit' onClick={() => createVolunteer()}>Add Volunteer</button>
        </div>
    )
}

export default NewVolunteer