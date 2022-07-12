import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from './phonebook/appBar/AppBar';
import LoaderSuspense from './phonebook/loaderSuspense/LoaderSuspense';

const HomePage = lazy(() => import('./phonebook/homePage/HomePage'));
const Register = lazy(() => import('./phonebook/register/Register'));
const Login = lazy(() => import('./phonebook/login/Login'));
const Phonebook = lazy(() => import('./phonebook/Phonebook'));

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderSuspense />}>
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
