import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface Props { 
  searchParams: { sortOrder: string  }
}

const UsersPage = ({ searchParams: { sortOrder } } : Props) => {
  
  return (
    <div>
      <Link href="/" className='btn btn-outline btn-secondary'> Back </Link>
      <h1> UsersPage: </h1>
      <Link href="/users/new" className='btn btn-outline btn-info'> NEW USER </Link> 
      <br />
      <Suspense fallback={<p> Loading... </p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default UsersPage;





