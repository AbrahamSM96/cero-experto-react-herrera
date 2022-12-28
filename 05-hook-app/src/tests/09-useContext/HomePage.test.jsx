import { render, screen } from '@testing-library/react';
import { UserContext } from '../../components/09-useContext/context/UserContext';
import HomePage from '../../components/09-useContext/HomePage';
describe('Test HomePage', () => {
  const user = {
    id: 1,
    name: 'Abraham Serrano',
  };
  test('should show the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre'); // aria-label
    expect(preTag.innerHTML).toBe('null');
  });
  test('should show the component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre'); // aria-label
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id);
  });
});
