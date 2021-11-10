import React from 'react';
import './User.css'

const User = ({user}) => {
    return (
        <tr>
        <td ><img className="img" src={`http://localhost:5000${user.image}`}/></td>
        <td>{user.name}</td>
        <td>{user.lasName}</td>
        <td> {user.date_naiss}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td><button className="btn btn-danger">Supprimer</button></td>
        </tr>
    )
}

export default User
