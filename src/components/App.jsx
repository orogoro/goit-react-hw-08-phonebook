import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './phonebook/navigation/Navigation';

const HomePage = lazy(() => import('./phonebook/homePage/HomePage'));
const Register = lazy(() => import('./phonebook/register/Register'));
const Login = lazy(() => import('./phonebook/login/Login'));
const Phonebook = lazy(() => import('./phonebook/Phonebook'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback="Loading ...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Phonebook />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
