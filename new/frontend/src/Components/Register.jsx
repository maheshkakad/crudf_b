import React, { useState } from 'react'

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const handleSubmit =() => {
        const payload = {
            name,
            email,
            password,

        }
        fetch("http://localhost:8080/user/signup",{
            method : "POST",
            headers :{
                'Content-Type' : "application/json",
            },
            body :JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <h3>Register Form</h3>
        <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" placeholder='enter password' onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register