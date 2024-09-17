import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h3>Sorry!</h3>
      <p>Sorry! The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
      <Link to='/'>Go to the main page</Link>
    </div>
  )
}

export default NotFoundPage