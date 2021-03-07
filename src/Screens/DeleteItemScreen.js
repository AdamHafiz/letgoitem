import React from 'react'
import { useParams } from 'react-router';

export default function DeleteItemScreen() {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      delete item screen{id}
    </div>
  )
}
