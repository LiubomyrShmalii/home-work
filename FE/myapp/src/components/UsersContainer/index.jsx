import React, { useEffect, useState } from 'react'
import { getUsers } from '../../requests/users'
import UserCard from '../UserCard';

export default function UsersContainer() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => getUsers(setUsers), []);

  return (
    <div>
        {
            users.map(el => <UserCard key={el.id} {...el} />)
        }
    </div>
  )
}