"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const { status, data: session  } = useSession();


  return (
    <div className="navbar bg-base-300 p-3">
      <a className="btn btn-ghost text-xl"> Next JS </a>

      <div className='flex space-x-5'>
        <Link href="/" className='btn btn-outline btn-success'> Home </Link>

        <Link href="/users" className='btn btn-outline btn-info'> Users </Link>

        <Link href="/admin" className='btn btn-outline btn-warning'> Admin </Link>

        { status === 'loading' ? ( <div> Loading... </div> ) : (
            session ? (
              <>
                { session.user && <div> {session.user.name} </div> }
                <Link href="/api/auth/signout" className='btn btn-outline'> 
                  Sign Out 
                </Link>
              </>
            ) : (
              <Link href="/api/auth/signin" className='btn btn-outline btn-primary'> Sign In </Link>
            )
        )}

      </div>
    </div>
  )
}

export default Navbar;