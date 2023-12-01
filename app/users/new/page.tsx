'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const NewUser = () => {

  const router = useRouter();

  return (
    <div> 
      <h1> New User </h1>
      <button className="btn" onClick={() => router.push('/users')} > CREATE </button>
    </div>
  )
}

export default NewUser