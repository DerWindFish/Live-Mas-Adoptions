import React from "react"
import {useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
const BASE_URL = 'http://localhost:3001/api'


const EditVolunteer = () => {

    const { _id } = useParams()

    const [updateVolunteerInfo, setUpdateVolunteerInfo] = useState('')
    const [name, changeName] = useState('')
    const [phone, changePhone] = useState('')
    const [email, changeEmail] = useState('')

    const handleName = (e) => {
        changeName(e.target.value)
    }

    const handlePhone = (e) => {
        changePhone(e.target.value)
    }

    const handleEmail = (e) => {
        changeEmail(e.target.value)
    }

    const editVolunteer = async (_id) => {
        await axios.put(`${BASE_URL}/volunteer/${_id}`, {
            name: name,
            phone: phone,
            email: email
        })
        .then(function (respose) {
            setUpdateVolunteerInfo(true);
            console.log(respose)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    useEffect(() => {
        return () => {
            setUpdateVolunteerInfo(false)
        }
    }, [updateVolunteerInfo])


    return (
        <div>
            <input
                type='text'
                required='required'
                placeholder="Enter your name"
                name='name'
                onChange={(e) => handleName(e)}
            />
            <input
                type='text'
                required='required'
                placeholder="Enter your phone number"
                name='phone'
                onChange={(e) => handlePhone(e)}
            />
            <input
                type='email'
                required='required'
                placeholder="Enter your email"
                name='email'
                onChange={(e) => handleEmail(e)}
            />
            <input
                type='text'
                required='required'
                placeholder='Enter you ID'
                name='_id'
            />
            <button className="submit-button" type='submit' onClick={() => editVolunteer(_id)}>Save</button>
        </div>
    )
}

export default EditVolunteer