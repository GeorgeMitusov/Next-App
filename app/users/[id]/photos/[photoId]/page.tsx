import React from 'react'

interface Props {
  params: { id: number; photoId: number }
}

const UserPhotoPage = ({ params: { id, photoId } } : Props ) => {
  return (
    <div> 
      <h1> UserPhotoPage {id} EXTRA {photoId} </h1>
    </div>
  )
}

export default UserPhotoPage;