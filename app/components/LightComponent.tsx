'use client';
import React, { useState } from 'react';
// import HeavyComponent from './HeavyComponent';
// import dynamic from 'next/dynamic';
// import _ from 'lodash';

// const HeavyComponent = dynamic(
//   () => import('./HeavyComponent'),
//   { 
//     ssr: false,
//     loading: () => <p> Loading... </p>
//   })

const LightComponent = () => {

  const [ isVisible, setIsVisible ] = useState(false);

  return (
    <div>
      <h1> Light Component </h1>
      <button onClick={ async () => {
        const _ = ( await import('lodash')).default;

        const users = [
          { name: 'c' },
          { name: 'q' },
          { name: 'z' },
        ]

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
        
      }}> Show </button>
    </div>
  )
}

export default LightComponent
