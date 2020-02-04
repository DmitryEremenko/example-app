import React from 'react';
import {  Link } from "react-router-dom";
const UsersList = ({users = []}) => {
    return (
        <div>
            {users.length ? users.map(item => {
                return (
                  <div key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                  </div>
                );
            }) : 'Loading ...'}
        </div>
    );
}

export default UsersList;
