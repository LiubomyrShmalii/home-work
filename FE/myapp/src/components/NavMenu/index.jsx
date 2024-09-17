import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to="/">Main</Link>
      <Link to="products">Products</Link>
      <Link to="users">Users</Link>
      <Link to="/posts">Posts</Link>
    </div>
  )
}

export default NavMenu