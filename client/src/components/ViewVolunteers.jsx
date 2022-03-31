import React from "react"
import axios from 'axios';
// import { useState } from 'react'

const BASE_URL = 'http://localhost:3001/api'


// const ViewVolunteers = ({ volunteers, deleteVolunteer, handleUpdateVolunteerSubmit, handleEditClick }) => {
const ViewVolunteers = ({ volunteers}) => {

    // const deleteVolunteer = async (_id) => {
    //     await axios.delete(`${BASE_URL}/volunteer/${_id}`)
    // }

    // const [editVolunteer, setEditVolunteer] = useState({
    //     name: '',
    //     phone: '',
    //     email:''
    // })

    // const handleUpdateVolunteer = (e) => {
    //     e.preventDefault()
        
    //     const editVolunteer = {
            
    //         name: editVolunteer.name,
    //         phone: editVolunteer.phone,
    //         email: editVolunteer.email
    //     }
    // }
    // const [editVolunteerId, setEditVolunteerId] = useState(null)

    // const handleUpdateVolunteerSubmit = (e) => {
    //     const editedVolunteer = {
    //         _id: editVolunteerId,
    //         name: editVolunteer.name,
    //         phone: editVolunteer.phone,
    //         email: editVolunteer.email
    //     }
    //     const newVolunteer = [...volunteers]

    //     const index = volunteers.findIndex((volunteers) => volunteers._id === editVolunteerId);

    //     newVolunteer[index] = editedVolunteer;
    //     setEditVolunteerId(null)
    // }

    // const handleEditClick = (e, volunteer) => {
    //     setEditVolunteerId(volunteer.id)

    //     const formValues = {
    //         name: volunteers.name,
    //         phone: volunteers.phone,
    //         email: volunteers.email
    //     }
    //     console.log(volunteers.name)
    //     setEditVolunteer(formValues)
    // }
    const deleteVolunteer = async (_id) => {
        await axios.delete(`${BASE_URL}/volunteer/${_id}`)
    }

    return (
        <div className="vol" key={volunteers._id}>
            {/* <form onSubmit={handleUpdateVolunteerSubmit}> */}
            <form>
            <p>name: { volunteers.name } </p>
            <p> phone: { volunteers.phone } </p>
            <p> email: { volunteers.email } </p>
            {/* <button className="submit-button" onClick={(e) => handleEditClick(e, volunteers)}>Edit</button> */}
            <button className="submit-button" type='submit' onClick={() => deleteVolunteer(volunteers._id)}>Delete</button>
            </form>
        </div>
    )} 

export default ViewVolunteers