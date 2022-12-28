import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../components/09-useContext/context/UserContext';
import LoginPage from '../../components/09-useContext/LoginPage';

describe('Test LoginPage', () => {
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call the setUser when the user clicked the button', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'juan@gmail.com',
      id: 1234,
      name: 'juan',
    });
  });
});
