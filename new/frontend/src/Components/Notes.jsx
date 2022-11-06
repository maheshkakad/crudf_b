import React, { useState } from 'react'
import { useEffect } from 'react'

const Notes = () => {
    const [title ,setTitle] = useState([])

    const getData =() => {
        fetch("http://localhost:8080/notes")
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()

    },[])
  return (
    <div>
    <h1>Notes here</h1>
    <button>Delete</button>
       
    </div>
  )
}

export default Notes