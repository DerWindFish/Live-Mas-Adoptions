import React from "react"
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api'

const ViewVolunteers = ({ volunteers }) => {


    const deleteVolunteer = async (_id) => {
        await axios.delete(`${BASE_URL}/volunteer/${_id}`)
    }


    return (
        <div className="vol" key={volunteers._id}>
            <p>name: { volunteers.name } </p>
            <p> phone: { volunteers.phone } </p>
            <p> email: { volunteers.email } </p>
            {/* <button className="submit-button" type="submit" onClick={() => updateVolunteerInfo(volunteers._id)}>Edit</button> */}
            <button className="submit-button" type='submit' onClick={() => deleteVolunteer(volunteers._id)}>Delete</button>
        </div>
    )
}

export default ViewVolunteers