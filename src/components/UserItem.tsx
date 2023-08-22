import React from 'react';
import { IUser } from '../types/types';


interface UserItemProps {
    user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    return (
        <li>
            <div>{user.id}. {user.name} leaves in city {user.address.city} on street {user.address.street} - { user.address.zipcode}</div>
        </li>
    );
};

export default UserItem;