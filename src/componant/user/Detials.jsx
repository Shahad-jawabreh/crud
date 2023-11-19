import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detials() {
    const [name1,SetName]=useState();
    const { id } = useParams();
    const getdata=async()=>{
        const {data}= await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
        SetName(data.user.name)

    }
    useEffect(()=>{
        getdata();

    },[])
  return (
   <h2>the name {name1}</h2>
  )
}
