import React from "react"
import {useState, useEffect} from 'react'
import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'

const EditVolunteer = () => {


    const [name, setNewName] = useState('')
    const [phone, setNewPhone] = useState('')
    const [email, setNewEmail] = useState('')
    const [addEditVolunteer, setAddEditVolunteer] = useState(false)

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handlePhone = (e) => {
        setNewPhone(e.target.value)
    }

    const handleEmail = (e) => {
        setNewEmail(e.target.value)
    }

    const updateVolunteerInfo = async (_id) => {
        await axios.put(`${BASE_URL}/volunteer/${_id}`, {
            name: name.value,
            phone: phone.value,
            email: email.value
        })
        .then(function (respose) {
            setAddEditVolunteer(true);
            console.log(respose)
        })
        .catch(function (error) {
            console.log(error)
        })

    }

    useEffect(() => {
        return () => {
            setAddEditVolunteer(false)
        }
    }, [addEditVolunteer])

    return(
        <div>
            <input
                type='text'
                name='name'
                required='required'
                placeholder="Enter new name"
                onChange={(e) => handleName(e)}
                />
            <input
                type='text'
                name='phone'
                required='required'
                placeholder="Enter new phone number"
                onChange={(e) => handlePhone(e)}
                />
            <input
                type='email'
                name='email'
                required='required'
                placeholder="Enter new email"
                onChange={(e) => handleEmail(e)}
                />
            <button className="submit-button" type='submit' onClick={() => updateVolunteerInfo()}>Edit Info</button>
        </div>
    )
}

export default EditVolunteer