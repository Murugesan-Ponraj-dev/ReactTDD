import React, { useState, useEffect } from 'react';
import { IBaseUser, IUser } from './userInterfaces';
import AdduserForm from '../AddUser';
import UserGrid from '../UserGrid';
import UserDataService from '../../Services/userService';
import './styles.css' 



const currentUser: IUser = { id: 0, name: "", role: "", description: "" };

const UserDashboard: React.FC = props => {

  const [users, setUsers] = useState<Array<IUser>>([]);

  const CreateUser = async (data: IBaseUser) => {
    UserDataService.create(data).then((res) => {
      if (res.status == 200) {
        setUsers([...users, { ...res.data }]);
      }
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


