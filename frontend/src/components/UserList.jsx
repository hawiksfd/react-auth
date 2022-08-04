import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Userlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }



    return (
        <div>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>List of Users</h2>
            <Link to="/users/add" className='button is-primary mb-2'>Add new</Link>
            <table className='table is-stripped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (

                        <tr key={users.uuid}>
                            <td>{index + 1}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.role}</td>
                            <td>

                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
export default Userlist;