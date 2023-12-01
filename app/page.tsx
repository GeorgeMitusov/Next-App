import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

import LightComponent from './components/LightComponent';
import ProductCart from './components/ProductCart/ProductCart';

import googlePic from '@/public/images/google.png';

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Hello {session && <span> { session.user!.name } </span> }! </h1>

      <LightComponent />

      <Image 
        src={googlePic} 
        alt="google" 
        // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        // quality={100}
        // priority
        // fill 
        // sizes="100vw"
        // className='object-cover'
      />

      
    </main>
  )
}


{/* <Link href="/users" className='btn btn-outline btn-accent'> Users </Link>
      <Link href="/admin" className='btn btn-outline btn-success'> Admin </Link>
      <ProductCart /> */}