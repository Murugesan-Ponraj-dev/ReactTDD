import { fireEvent, render, screen } from '@testing-library/react';
import UserDataService from "../../Services/userService";
import UserDashBoard from './index';
import * as React from 'react';
import { mockUsers } from './userMockData';
import { IUser } from './userInterfaces';

beforeAll(() => {
  jest.mock('../../Services/userService', () => ({ create: jest.fn() }));
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
  }));
});


beforeEach(() => {
  const setter = jest.fn();
  jest.spyOn(React, 'useState').mockImplementation(() => [mockUsers, setter]);
})

describe('UserDashBoard', () => {

  it('dashboard Page should load', () => {
    render(<UserDashBoard />);
    const titleElement = screen.getByText(/User Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  it.each([mockUsers])('add user and verify the added user in gird view', (mockData: IUser) => {
    //Mock userdata sevice fetch call
    UserDataService.create = jest.fn().mockImplementation(
      () => Promise.resolve({ data: mockData, status: 200 }));
    const setter = jest.fn();
     
    //mock usestate and set mock data
    jest.spyOn(React, 'useState').mockImplementation(() => [mockUsers, setter]);
    render(<UserDashBoard />);
    const name = screen.getByPlaceholderText(/name/i);
    const role = screen.getByPlaceholderText(/role/i);
    const description = screen.getByPlaceholderText(/description/i);
    const submitbutton = screen.getByRole("button");
    fireEvent.change(name, { target: { value: mockData.name } });
    fireEvent.change(role, { target: { value: mockData.role } });
    fireEvent.change(description, { target: { value: mockData.description } });
    fireEvent.click(submitbutton);
    const userName = screen.getByDisplayValue(mockData.name);
    expect(userName).toBeInTheDocument();
  });

  it('page should load view user grid component', () => {
    render(<UserDashBoard />);
    const viewUserElement = screen.getByText(/View users/i);
    expect(viewUserElement).toBeInTheDocument();
  });
});