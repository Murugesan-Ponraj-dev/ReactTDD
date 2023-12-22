import React from "react";
import { IUser } from "../UserDashboard/userInterfaces";

interface IProps {
 users: Array<IUser>;
}

const UserGrid: React.FC<IProps> = props => {
  return (
    <div className="user-table">
      <h1>View users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Description</th>           
          </tr>
        </thead>
        <tbody>
          {props.users?.length > 0 ? (
            props.users.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.description}</td>                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserGrid;
