import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const BASE_URL = 'http://localhost:3001/api'

const PetsDetails = () => {

  const [selcectedPet, setPet] = useState({})

  const [ pets, setPets] = useState([])

  let { id } = useParams

  const getPets = async () => {
    const res = await axios.get(`${BASE_URL}/pets`)
    console.log(res.data.pets)
    setPets(res.data.pets)

    updateCurrentPet(res.data.pets)
}

  const updateCurrentPet = (pets) => {
    let currentPet = pets.find(
      (pets) => pets._id === id
    
      )
      setPet(currentPet)
  }

  useEffect(() => {
    getPets();
    return () => {
      setPet({})
    }
  }, [])


  return  (
    <div className="detail">
      
      <Link to='/pets'>Back</Link>
    </div>
  ) 
}

export default PetsDetails