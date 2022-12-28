import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainApp from '../../components/09-useContext/MainApp';
import LoginPage from '../../components/09-useContext/LoginPage';
describe('test MainApp', () => {
  test('Should show the HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage')).toBeTruthy();
  });
  test('Should show the LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeTruthy();
  });
});
