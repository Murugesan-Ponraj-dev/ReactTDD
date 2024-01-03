import React, { useState } from 'react';
import { IBaseUser, IUser } from './userInterfaces';
import AdduserForm from '../AddUser';
import UserGrid from '../UserGrid';
import UserDataService from '../../Services/userService';
import './styles.css' 

const UserDashboard: React.FC =() => {

  const [users, setUsers] = useState<Array<IUser>>([]);

  const CreateUser = async (data: IBaseUser) => {
    UserDataService.create(data).then((res) => {      
        setUsers([...users, { ...res }]);      
    })
  }

  const addUser = (newUser: IBaseUser) => {
    CreateUser(newUser);
  }

  return (
    <div className='userDashboard'>
      <h1>User Dashboard</h1>
      <div className="user-flex-wrapper">        
        <AdduserForm onAddUser={addUser} />
        <UserGrid users={users} />
      </div>
    </div>
  );
}

export default UserDashboard;


