import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import NewVolunteer from "./NewVolunteer";
// import EditVolunteer from "./EditVolunteer";

const BASE_URL = 'http://localhost:3001/api'

const Volunteers = () => {

    const [volunteers, setVolunteers] = useState([])
    
    useEffect(() => {
        async function getVolunteers() {
            const res = await axios.get(`${BASE_URL}/volunteer`)
            console.log(res.data.volunteers)
            setVolunteers(res.data.volunteers)
        }
        getVolunteers()
    }, [])

    const deleteVolunteer = async (_id) => {
        await axios.delete(`${BASE_URL}/volunteer/${_id}`)
    }

    // const deleteVolunteer = async (id) => {
    //     await axios.delete(`${BASE_URL}/volunteer/${id}`)
    //     .then(function (response) {
    //          volunteers.filter((volunteers) =>{
    //             console.log(response)
    //             return volunteers
                
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    //     })
        
    //     setVolunteers()
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

    return (
        <div>
            <h1>List of Volunteers:</h1>
        { volunteers.map((volunteers) => {
            return (
                <div className="vol" key={volunteers._id}>
                    <p>name: { volunteers.name } </p>
                    <p> phone: { volunteers.phone } </p>
                    <p> email: { volunteers.email } </p>
                    <button className="submit-button" type='submit' onClick={() => deleteVolunteer(volunteers._id)}>Delete</button>
                </div>
            )}    
        )}
        <h2>Add Volunteer:</h2>
        <NewVolunteer />
        {/* <EditVolunteer /> */}
        </div>
     )
}

export default Volunteers