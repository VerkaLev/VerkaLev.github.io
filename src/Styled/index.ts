import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  border: 5px double #fff;
  box-shadow: 4px 4px 10px #baa55e;
  color: #fff;
  background-color: #000;
  font-family: 'Special Elite', serif;
  font-size: 0.94rem;
  line-height: 2rem;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 5px double #000;
  }
`;

export const BtnWhiteStyled = styled.button`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 5px double #000;
  box-shadow: 4px 4px 10px #baa55e;
  color: #000;
  background-color: #fff;
  font-family: 'Special Elite', serif;
  font-size: 0.94rem;
  line-height: 2rem;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 5px double #fff;
    cursor: pointer;
  }
`;

export const BtnBlackStyled = styled.button`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 5px double #fff;
  box-shadow: 4px 4px 10px #baa55e;
  color: #fff;
  background-color: #000;
  font-family: 'Special Elite', serif;
  font-size: 0.94rem;
  line-height: 2rem;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 5px double #000;
    cursor: pointer;
  }
`;

export const BtnCreateNewElement = styled(Link)`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 5px double #fff;
  box-shadow: 4px 4px 10px #baa55e;
  color: #fff;
  background-color: #000;
  font-family: 'Special Elite', serif;
  font-size: 0.94rem;
  line-height: 1.4rem;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 5px double #000;
  }
`;

export const BtnGoToCart = styled(Link)`
  & > img {
    width: 30px;
  }
`;
