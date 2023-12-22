import { fireEvent, render, screen } from '@testing-library/react';
import AddUser from './index';


describe('AddUser Component', () => {
    const mockAddUser = jest.fn();

it('Add User Page Component should load', () => {
   
  render(<AddUser onAddUser={mockAddUser} />);
    const titleElement = screen.getByText(/Add User/i);
  expect(titleElement).toBeInTheDocument();
  
});

it('Form should clear after submit', () => {
  render(<AddUser onAddUser={mockAddUser} />);
    const submitbutton = screen.getByRole("button");
    fireEvent.click(submitbutton);
    const name = screen.getByPlaceholderText(/name/i);
    const role =  screen.getByPlaceholderText(/role/i);
    const description =  screen.getByPlaceholderText(/description/i);
    expect(name).toHaveValue("");
    expect(role).toHaveValue("");
    expect(description).toHaveValue("");  
});

it('Form validation  after submit', () => {
  render(<AddUser onAddUser={mockAddUser} />);
   // yet to impplement
});
     
  });
