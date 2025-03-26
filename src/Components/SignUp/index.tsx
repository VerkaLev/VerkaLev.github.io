import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Form } from '../Form';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [dataInput, setDataInput] = useState({
    email: '',
    password: '',
  });

  const [errorData, setErrorData] = useState('');

  const handleReplaceToSignUpClick = () => {
    navigate('/logIn');
  };

  const handleFormSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorData('');
  };

  const handleFormSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      dataInput.email,
      dataInput.password
    )
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
      handleSubmit={handleFormSignUpSubmit}
      handleClick={handleReplaceToSignUpClick}
      titleForm="Sign Up"
      titleBtnReplace="Log In"
      handleChange={handleFormSignUpChange}
      errorData={errorData}
    />
  );
};
