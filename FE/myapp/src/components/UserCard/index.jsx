import React from 'react'

export default function UserCard({ name, phone }) {
  return (
    <div>
        <p>Name: { name }</p>
        <p>Phone: { phone }</p>
    </div>
  )
}