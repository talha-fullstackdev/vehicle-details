import React from 'react'

const page = ({params}) => {
    const {id} = params
  return (
    <h1>this is new home page of id {id}</h1>
  )
}

export default page