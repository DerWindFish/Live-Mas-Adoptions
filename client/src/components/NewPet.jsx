import React from "react"
import {useState, useEffect} from 'react'
import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'

const NewPet = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [about, setAbout] = useState('')
    const [picture, setPicture] = useState('')
    const [addPet, setAddPet] = useState(false)


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAge = (event) => {
        setAge(event.target.value)
    }

    const handleAbout = (event) => {
        setAbout(event.target.value)
    }

    const handlePicture = (event) => {
        setPicture(event.target.value)
    }

    function refreshPage() {
        window.location.reload(false);
    }

    const createPet = async () => {
        await axios.post(`${BASE_URL}/pets/`, {
            name: name,
            age: age,
            about: about,
            picture: picture
        })
        .then(function (respose) {
            setAddPet(true);
            console.log(respose)
            refreshPage()
        })
        .catch(function (error) {
            console.log(error)
        })
    }

   

    useEffect(() => {
        return () => {
            setAddPet(false)
        }
    }, [addPet])

    return(
        <form>
        <div>
            <input
                type='text'
                name='name'
                required='required'
                placeholder="Enter pet name"
                onChange={(event) => handleName(event)}
                />
            <input
                type='text'
                name='age'
                required='required'
                placeholder="Enter pet age"
                onChange={(event) => handleAge(event)}
                />
            <input
                type='text'
                name='about'
                required='required'
                placeholder="Tell me about the Pet"
                onChange={(event) => handleAbout(event)}
                />
              <input
                type='text'
                name='picture'
                required='required'
                placeholder="Enter picture URL"
                onChange={(event) => handlePicture(event)}
                />
            <button className="submit-button" type='submit' onClick={() => createPet()}>Add New Pet</button>
        </div>
        </form>
    )
}

export default NewPet