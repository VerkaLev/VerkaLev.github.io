import { TypePropsBtnElement, TypePropsInputElement, AccType } from 'Types';
import { styled } from 'styled-components';

export const BtnWithStylesReceived: React.FC<TypePropsBtnElement> =
  styled.button(({ styledProperties }) => {
    const arrWithStyles = Object.entries(styledProperties);
    const objWithStyles = arrWithStyles.reduce(
      (acc: AccType, item) => {
        if (item[0] !== 'id' && item[0] !== 'name') {
          acc[item[0]] = item[1];
        }
        return acc;
      },
      {
        'font-family': 'Special Elite, serif',
        'font-size': '0.94rem',
      }
    );

    return objWithStyles;
  });

export const InputWithStylesReceived: React.FC<TypePropsInputElement> =
  styled.input(({ styledProperties }) => {
    const arrWithStyles = Object.entries(styledProperties);
    const objWithStyles = arrWithStyles.reduce(
      (acc: AccType, item) => {
        if (item[0] !== 'id' && item[0] !== 'name') {
          acc[item[0]] = item[1];
        }
        return acc;
      },
      {
        'font-family': 'Special Elite, serif',
        'font-size': '0.94rem',
        'text-align': 'center',
        outline: 'none',
      }
    );

    return objWithStyles;
  });
