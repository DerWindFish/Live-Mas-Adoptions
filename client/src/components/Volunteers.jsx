import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react'
import NewVolunteer from "./NewVolunteer";
import EditVolunteer from "./EditVolunteer";
import { Link } from "react-router-dom";


const BASE_URL = 'http://localhost:3001/api'

const Volunteers = () => {


    const [volunteers, setVolunteers] = useState([])
    
    function refreshPage() {
        window.location.reload(false);
    }

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
        refreshPage()
    }


    return (
        <div>
            <h2>Add Volunteer:</h2>
                <NewVolunteer />
            <h1>List of Volunteers:</h1>
        { volunteers.map((volunteers) => {
            return (
                
                <div className="vol" key={volunteers._id}>
                    <form>
                    <p>name: { volunteers.name } </p>
                    <p> phone: { volunteers.phone } </p>
                    <p> email: { volunteers.email } </p>
                    <EditVolunteer volunteers={ volunteers.value }/>
                    </form>
                    <button className="delete-button" type='submit' onClick={() => deleteVolunteer(volunteers._id)}>Delete Volunteer</button>
                    
                </div>
                
            )}    
        )}
        
        <Link to='/'>Back Home</Link>
        </div>
     )
     
}

export default Volunteers