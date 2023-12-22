import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { IBaseUser, IUser } from '../UserDashboard/userInterfaces';

interface IProps {
    onAddUser: (user: IBaseUser) => void;
}

const AddUserForm: React.FC<IProps> = props => {
    const inituser: IUser = { id: 0, name: "", role: "", description: "" };
    const [user, setUser] = useState<IUser>(inituser);
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onAddUser(user);
        setUser(inituser);

    }
    return (<div className="user-table">
        <h1>Add User</h1>
        <form className="form-edit" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="please enter the name"
                    name="name"
                    onChange={onInputChange}
                    value={user.name} />
            </div>
            <div className="form-row">
                <label>Role</label>
                <input type="text"
                    id="role"
                    placeholder="please enter the role"
                    name="role"
                    onChange={onInputChange} value={user.role} />
            </div>
            <div className="form-row">
                <label>Description</label>

                <input type="text"
                    id="description"
                    placeholder="please enter the description"
                    name="description"
                    onChange={onInputChange}
                    value={user.description} />
            </div>

            <div className="form-row">
                <button type="submit" className="btn">Submit</button>
            </div>
        </form>
    </div>
    );
}

export default AddUserForm;


