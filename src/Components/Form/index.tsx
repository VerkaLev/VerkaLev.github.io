import React, { useState } from 'react';
import { FormProps } from 'Types';

import eye from '../../Utils/Images/eye.png';

export const Form: React.FC<FormProps> = ({
  handleSubmit,
  handleClick,
  titleForm,
  titleBtnReplace,
  handleChange,
  errorData,
}) => {
  const [isVisible, setisVisible] = useState<boolean>(true);
  const handleTypeInputClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisVisible(!isVisible);
  };

  return (
    <form onSubmit={handleSubmit} className="form_log_in_sign_up">
      <div className="container_form_header_and_btn_replace">
        <h2>{titleForm}</h2>
        <button onClick={handleClick} className="btn_replace_sign_up_log_in">
          {titleBtnReplace}
        </button>
      </div>

      <div className="container_inputs_form">
        <input
          className="email_input"
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
        />

        <div className="container_password">
          <input
            className="password_input"
            type={isVisible ? 'password' : 'text'}
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
          />

          <button onClick={handleTypeInputClick} className="form_eye">
            <img className="img_form_eye" src={eye} alt="eye" />
          </button>
        </div>

        {errorData ? <div className="error_message">{errorData}</div> : ''}
      </div>

      <button className="btn_log_in_sign_up">{titleForm}</button>
    </form>
  );
};
