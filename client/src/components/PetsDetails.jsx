import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const PetsDetails = (props) => {

    const [pets, setPet] = useState('')

    let { id } = useParams()

    useEffect(() => {
        let pets = props.pets.find(
            (pets) => pets.id === parseInt(id)
        )
        setPet(pets)
    }, [props.pets, id])

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