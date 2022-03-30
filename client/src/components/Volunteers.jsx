import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import NewVolunteer from "./NewVolunteer";

const BASE_URL = 'http://localhost:3001/api'

const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([])
    // const [name, setName] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [addVolunteer, setAddVolunteer] = useState(false)

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }

    // const handlePhone = (e) => {
    //     setPhone(e.target.value)
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    

    // const handleAddVolunteer = (e) => {
    //     const fieldName = e.target.getAttribute('name')
    //     const fieldValue = e.target.value

    //     const newVolunteer = {...addVolunteer}
    //     newVolunteer[fieldName] = fieldValue

    //     setAddVolunteer(newVolunteer)
    // }

    // const createVolunteer = async () => {
    //     await axios.post(`${BASE_URL}/volunteer/`, {
    //         name: name,
    //         phone: phone,
    //         email: email
    //     })
    //     .then(function (respose) {
    //         setAddVolunteer(true);
    //         console.log(respose)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // }

    // useEffect(() => {
    //     return () => {
    //         setAddVolunteer(false)
    //     }
    // }, [addVolunteer])

    // const handleAddVolunteerSubmit = (e) => {
    //     e.preventDefault()

    //     const newVolunteerData = {
    //         name: addVolunteer.name,
    //         phone: addVolunteer.phone,
    //         email: addVolunteer.email
    //     }
    //     const newVolunteerAdd = [...volunteers, newVolunteerData]
    //     setVolunteers(newVolunteerAdd)
    // }

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
            <div key={volunteers._id} className='vol'>
                <p>name: { volunteers.name }</p>
                <p>phone: { volunteers.phone }</p>
                <p>email: { volunteers.email }</p>
                
            </div>
            )}    
        )}
        <h2>Add Volunteer:</h2>
        <NewVolunteer />
        {/* <form onSubmit={handleAddVolunteerSubmit} */}
            {/* <form>
            <input
                type='text'
                name='name'
                required='required'
                placeholder='Enter your name'
                onChange={(e) => handleName(e, 'num')}
            />
            <input
                type='text'
                name='phone'
                required='required'
                placeholder='Enter your phone number'
                onChange={(e) => handlePhone(e, 'num')}
            />
            <input
                type='text'
                name='email'
                required='required'
                placeholder='Enter your email'
                onChange={(e) => handleEmail(e, 'num')}
            />
            <button type="submit" onClick={() => createVolunteer}>Add</button>
        </form> */}
        </div>
     )
}

export default Volunteers