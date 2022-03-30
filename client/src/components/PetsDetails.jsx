import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import axios from "axios"
import { Link } from "react-router-dom"

// const BASE_URL = 'http://localhost:3001/api'

const PetsDetails = (props) => {

  const [selectedPet, setPet] = useState('')

  // const [ pets, setPets] = useState([])

  let { _id } = useParams

  // const getPets = async () => {
  //   const res = await axios.get(`${BASE_URL}/pets`)
  //   console.log(res.data.pets)
  //   setPets(res.data.pets)

//     updateCurrentPet(res.data.pets)
// }

useEffect(() => {
  let selectedPet = props.pets.find(
    (pets) => pets._id === _id
  )
  setPet(selectedPet)
}, [props.pets, _id])

  // useEffect(() => {
  //   getPets();
  //   return () => {
  //     setPet()
  //   }
  // }, [])


  return (
    <div>
      <h1>{selectedPet.name}</h1>
    <Link to='/pets'>Back to All</Link>
    </div>
  )
}

export default PetsDetails