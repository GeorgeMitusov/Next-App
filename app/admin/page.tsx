import Link from 'next/link'
import React from 'react'

const AdminHomePage = () => {
  return (
    <div> 
      <h1> Admin Home Page </h1>
      <Link href="/" className='btn btn-outline btn-warning'> Home </Link>
    </div>
  )
}

export default AdminHomePage