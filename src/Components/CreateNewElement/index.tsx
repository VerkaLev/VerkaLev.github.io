import React, { useState } from 'react';
import cart from '../../Utils/Images/buy.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { BtnGoToCart, BtnWhiteStyled } from 'Styled';
import { useLogOut } from 'hooks/useLogOut';
import { MenuCreateElement } from 'Components/MenuCreateElement';
import { CreateNewElementType, ElementType } from 'Types';
import {
  hover,
  idBtn,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderStyle,
  borderColor,
  boxShadow,
} from 'Consts';

import {
  BtnWithStylesReceived,
  InputWithStylesReceived,
} from 'Helpers/getBtnWithStylesRecived';
import { useSelectors } from 'Components/Selectors';

export const CreateNewElement: React.FC<CreateNewElementType> = ({ title }) => {
  const imgSrc = cart;
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { dataCart } = useSelectors();
  const { handleLogOutClick } = useLogOut();
  const handleReturnClick = () => navigate(`/${title}s`);

  const [propertyInput, setPropertyInput] = useState<ElementType>(
    state !== null
      ? state.editProperties
      : {
          name: title,
          id: idBtn() + '',
          [hover]: {
            width: '',
            height: '',
            color: '',
            [backgroundColor]: '',
            [borderRadius]: '',
            [borderWidth]: '',
            [borderStyle]: '',
            [borderColor]: '',
            [boxShadow]: '',
          },
          width: '150px',
          height: '',
          color: '',
          [backgroundColor]: '',
          [borderRadius]: '',
          [borderWidth]: '',
          [borderStyle]: '',
          [borderColor]: '',
          [boxShadow]: '',
        }
  );

  return (
    <div className='container_homepage'>
      <nav className='nav_page'>
        <div className='menu_of_btn_link'>
          <button
            title='return to the menu'
            onClick={handleReturnClick}
            className='btn_return'
          ></button>
        </div>
        <div className='container_btn_log_out_cesta'>
          <div className='container_btn_cesta'>
            <BtnGoToCart to='/cart'>
              <img src={imgSrc} alt='buy' />
            </BtnGoToCart>
            <p className='amount_of_elements_in_the_cart'>{dataCart.length}</p>
          </div>
          <BtnWhiteStyled onClick={handleLogOutClick}>log out</BtnWhiteStyled>
        </div>
      </nav>
      <div className='menu_of_elements'>
        <p className='top_text_of_menu_of_elements'>
          {!state
            ? `- - - - -create your ${title} . . .`
            : `- - - - -edit ${title} . . .`}
        </p>

        <div className='wrap_of_getted_elements'>
          {title === 'button' ? (
            <BtnWithStylesReceived
              id={propertyInput.id}
              styledProperties={propertyInput}
            >
              click
            </BtnWithStylesReceived>
          ) : title === 'input' ? (
            <InputWithStylesReceived
              placeholder='enter text'
              id={propertyInput.id}
              styledProperties={propertyInput}
            />
          ) : (
            ''
          )}
        </div>

        <p className='buttom_text_of_menu_of_elements'>
          . . . what is fantastic design- - - - -
        </p>
      </div>

      <div className='menu_of_create_new_element'>
        <MenuCreateElement
          title={title}
          propertyInput={propertyInput}
          setPropertyInput={setPropertyInput}
          isEdit={state}
        />
      </div>
    </div>
  );
};
