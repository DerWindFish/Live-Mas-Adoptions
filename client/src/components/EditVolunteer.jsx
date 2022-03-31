// import React from "react"
// import {useState, useEffect} from 'react'
// import axios from "axios"
// const BASE_URL = 'http://localhost:3001/api'

// const EditVolunteer = (props) => {

//     const [updateVolunteerInfo, setUpdateVolunteerInfo] = useState('')
//     const [name, setName] = useState('')
//     const [phone, setPhone] = useState('')
//     const [email, setEmail] = useState('')

//     const handleName = (e) => {
//         setName(e.target.value)
//     }

//     const handlePhone = (e) => {
//         setPhone(e.target.value)
//     }

//     const handleEmail = (e) => {
//         setEmail(e.target.value)
//     }

//     const editVolunteer = async () => {
//         await axios.put(`${BASE_URL}/volunteer/:id`, {
//             name: name,
//             phone: phone,
//             email: email
//         })
//         .then(function (respose) {
//             setUpdateVolunteerInfo(true);
//             console.log(respose)
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
//     }

//     useEffect(() => {
//         return () => {
//             setUpdateVolunteerInfo(false)
//         }
//     }, [updateVolunteerInfo])


//     return (
//         <div>
//             <input
//                 type='text'
//                 required='required'
//                 placeholder="Enter your name"
//                 name='name'
//                 onChange={(e) => handleName(e, 'num')}
//             />
//             <input
//                 type='text'
//                 required='required'
//                 placeholder="Enter your phone number"
//                 name='phone'
//                 onChange={(e) => handlePhone(e, 'num')}
//             />
//             <input
//                 type='email'
//                 required='required'
//                 placeholder="Enter your email"
//                 name='email'
//                 onChange={(e) => handleEmail(e, 'num')}
//             />
//             <input
//                 type='text'
//                 required='required'
//                 placeholder='Enter you ID'
//                 name='_id'
//             />
//             <button className="submit-button" type='submit' onClick={() => editVolunteer()}>Save</button>
//         </div>
//     )
// }

// export default EditVolunteer