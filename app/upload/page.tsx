"use client";
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {

  const [ publicID, setPublicId ] = useState('')


  return (
    <>
      { publicID && <CldImage src={publicID} width={270} height={180} alt="BONES" /> }
      <CldUploadWidget 
        uploadPreset='atowz44v'
        onUpload={( result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button 
            className='btn btn-primary'
            onClick={() => open()}
          > 
            Upload 
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage