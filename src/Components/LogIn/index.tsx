import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Form } from '../Form';

export const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const [dataInput, setDataInput] = useState({
    email: '',
    password: '',
  });

  const [errorData, setErrorData] = useState('');

  const handleReplaceToSignUpClick = () => {
    navigate('/signUp');
  };

  const handleFormLogInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorData('');
  };

  const handleFormLogInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, dataInput.email, dataInput.password)
      .then(() => {
        localStorage.setItem('user', JSON.stringify(dataInput));
        navigate('/');
      })
      .catch((e) => {
        setErrorData(e.message);
      });
  };

  return (
    <Form
      handleSubmit={handleFormLogInSubmit}
      handleClick={handleReplaceToSignUpClick}
      titleForm="Log In"
      titleBtnReplace="Sign Up"
      handleChange={handleFormLogInChange}
      errorData={errorData}
    />
  );
};
