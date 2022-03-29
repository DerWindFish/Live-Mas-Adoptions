import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const PetsDetails = (props) => {

    const [pets, setPet] = useState('')

    let { _id } = useParams()

    useEffect(() => {
        let pets = props.pets.find((pet) => pet._id === parseInt(_id))
        setPet(pets)
    }, [props.pets, _id])

    return pets ? (
        <div className="detail">
            <div>
                <img src={pets.picture} alt={pets.name} />
                <h1>{pets.name}</h1>
                <h3>{pets.age}</h3>
                <p>{pets.about}</p>
            </div>
        <Link to='/pets'>Back to pets</Link>
        </div>
    ) : null;
}

export default PetsDetails