import { fireEvent, render, screen } from '@testing-library/react';
import { IUser } from './userInterfaces';
import UserDataService from "../../Services/userService";
import UserDashBoard from './index';
import * as React from 'react';
import { useState } from 'react';
import { renderHook,act } from '@testing-library/react';



beforeAll(() => {
  jest.mock('../../Services/userService', () => ({ create: jest.fn() }));
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
  }));
   
});

const mockData : IUser = { id: 5, name:"David", role:"SSD", description:"Senior Software des" };
const mockUsers : Array<IUser> = [mockData];

beforeEach(()=>{
  const setter = jest.fn();    
  jest.spyOn(React, 'useState').mockImplementation(() => [mockUsers, setter]);
})
 
describe('UserDashBoard', () => {

const useStateMock: jest.Mock<typeof useState> = useState as never;


test('dashboard Page should load', () => {
  render(<UserDashBoard />);
    const titleElement = screen.getByText(/User Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});


test('Add User and verify in gird view', () => {
 
  UserDataService.create = jest.fn().mockImplementation(
    ()=> Promise.resolve({data: mockData,status: 200}));
    const setter = jest.fn();
    
    jest.spyOn(React, 'useState').mockImplementation(() => [mockUsers, setter]);
    
    // act(() => {
    //   render(
    //     <UserDashBoard /> )
    // });

 render(<UserDashBoard />);
 const name = screen.getByPlaceholderText(/name/i);
 const role =  screen.getByPlaceholderText(/role/i);
 const description =  screen.getByPlaceholderText(/description/i);
 const submitbutton = screen.getByRole("button");

 fireEvent.change(name,{target:{value:"Test"}});
 fireEvent.change(role,{target:{value:"Test"}});
 fireEvent.change(description,{target:{value:"Test"}});
 fireEvent.click(submitbutton);
const userName = screen.getByText(/David/i);
 expect(userName).toBeInTheDocument()

  //const viewUserElement = screen.get(/View users/i);
 // expect(viewUserElement).toBeInTheDocument();
});
 

test('Page should load view user grid component', () => {
  render(<UserDashBoard />);
  const viewUserElement = screen.getByText(/View users/i);
  expect(viewUserElement).toBeInTheDocument();
});


test('Page should load add user component', () => {
  render(<UserDashBoard />);
    const addUserElement = screen.getByText(/Add User/i);

  expect(addUserElement).toBeInTheDocument();

});
  
test('Page should show added user', () => {
  render(<UserDashBoard />);
 //todo
});

test('Page should list all users on load', () => {
  render(<UserDashBoard />);
//todo
});

       
  });
