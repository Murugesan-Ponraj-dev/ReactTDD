import React from "react";
import { IUser } from "../UserDashboard/userInterfaces";

interface IProps {
  users: Array<IUser>;
}

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const UserGrid: React.FC<IProps> = props => {
  return (
    <div className="user-table">
      <h1>View users</h1>
      <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
        <div className='container'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full '>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-primary'>
                    <tr>
                      <th className={TdStyle.ThStyle}> Name </th>
                      <th className={TdStyle.ThStyle}> Role </th>
                      <th className={TdStyle.ThStyle}> Description </th>                  
                    </tr>
                  </thead>
                  <tbody>
                    {props.users?.length > 0 ? (
                      props.users.map(item => (
                        <tr key={item.id}>
                          <td className={TdStyle.TdStyle}>{item.name}</td>
                          <td className={TdStyle.TdStyle2}>{item.role}</td>
                          <td className={TdStyle.TdStyle}>{item.description}</td>

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
            </div>
          </div>
        </div>
      </section>
    </div>
  )};

  export default UserGrid;
