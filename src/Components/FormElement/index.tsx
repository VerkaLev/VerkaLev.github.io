import { BtnWhiteStyled, BtnCreateNewElement, BtnGoToCart } from 'Styled';
import { useLogOut } from 'hooks/useLogOut';
import { useNavigate } from 'react-router-dom';
import { TypePropsFormElement } from 'Types';
import {
  BtnWithStylesReceived,
  InputWithStylesReceived,
} from '../../Helpers/getBtnWithStylesRecived';
import { useAppDispatch } from 'hooks/reduxHooks';
import { ClickEventType } from 'Types';
import { deleteButtonAction } from 'ducks/Buttons/actions';
import { urlBtn, urlCart, urlInput } from 'Consts';
import { deleteInputAction } from 'ducks/Inputs/actions';
import { postElementInCartAction } from 'ducks/Cart/actions';
import { useSelectors } from 'Components/Selectors';

export const FormElement: React.FC<TypePropsFormElement> = ({
  title,
  stateData,
  imgSrc,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleReturnClick = () => navigate('/');
  const { handleLogOutClick } = useLogOut();
  const {
    dataCart,
    dataInputs,
    dataButtons,
    isDataInputLoading,
    isDataButtonLoading,
  } = useSelectors();

  const handleDeleteClick = async (
    e: React.MouseEvent<HTMLButtonElement> & ClickEventType
  ) => {
    const arrWithoutDeletedElement = stateData.filter(
      (item) => item.id !== e.target.id
    );
    if (title === 'button') {
      await dispatch(
        deleteButtonAction(urlBtn, arrWithoutDeletedElement, title)
      );
    } else if (title === 'input') {
      await dispatch(
        deleteInputAction(urlInput, arrWithoutDeletedElement, title)
      );
    }
  };

  const changeClassNameBtnBuy = (id: string) => {
    const isExistElementInCart = dataCart.some((item) => item.id === id);
    return !isExistElementInCart ? 'btn_buy' : 'btn_added';
  };

  const handleEditClick = (
    e: React.MouseEvent<HTMLButtonElement> & ClickEventType
  ) => {
    const elemetProperties = stateData.filter(
      (item) => item.id === e.target.id
    );

    navigate('createElement', {
      replace: true,
      state: {
        editProperties: elemetProperties[0],
      },
    });
  };

  const handleBuyClick = async (
    e: React.MouseEvent<HTMLButtonElement> & ClickEventType
  ) => {
    const whatIsElement =
      title === 'button' ? dataButtons : title === 'input' ? dataInputs : [];

    const arrSelectedElement = whatIsElement.filter((item) => {
      return item.id === e.target.id;
    });

    const isExistElementInCart = dataCart.some(
      (item) => item.id === arrSelectedElement[0].id
    );

    if (!isExistElementInCart) {
      await dispatch(
        postElementInCartAction(urlCart, arrSelectedElement[0], 'element')
      );
    } else if (isExistElementInCart) {
      alert('элемент уже в корзине');
    }
  };

  return (
    <div className='container_homepage'>
      <nav className='nav_page'>
        <div className='menu_of_btn_link'>
          <button onClick={handleReturnClick} className='btn_return'></button>
          <BtnCreateNewElement to='createElement'>
            create a new {title}
          </BtnCreateNewElement>
        </div>
        <div className='container_btn_log_out_cesta'>
          <BtnGoToCart to='/cart'>
            <img src={imgSrc} alt='buy' />
          </BtnGoToCart>
          <p className='amount_of_elements_in_the_cart'>{dataCart.length}</p>
          <BtnWhiteStyled onClick={handleLogOutClick}>log out</BtnWhiteStyled>
        </div>
      </nav>

      <div className='menu_of_elements'>
        <p className='top_text_of_menu_of_elements'>
          - - - - -choose or create {title} . . .
        </p>

        {isDataButtonLoading || isDataInputLoading ? (
          <p className='loading'>loading . . .</p>
        ) : stateData.length === 0 ? (
          <p className='text_get_nothing'>
            no {title}s have been created yet . . . <br />
            . . . create it yourself
            <br />
          </p>
        ) : (
          <div className='container_of_recived_elements'>
            {stateData.map((item) => {
              return (
                <div
                  key={item.id}
                  className='container_button_recevied_and_btn_delete_btn_edit'
                  id={item.id}
                >
                  {title === 'button' ? (
                    <BtnWithStylesReceived
                      styledProperties={item}
                      key={item.id}
                      id={item.id}
                    >
                      click
                    </BtnWithStylesReceived>
                  ) : title === 'input' ? (
                    <InputWithStylesReceived
                      placeholder='enter text'
                      styledProperties={item}
                      key={item.id}
                      id={item.id}
                    />
                  ) : (
                    ''
                  )}
                  <div>
                    <button
                      key={item.id}
                      id={item.id}
                      onClick={handleEditClick}
                      className='btn_edit'
                    ></button>
                    <button
                      id={item.id}
                      key={item.id + 1}
                      onClick={handleDeleteClick}
                      className='btn_delete'
                    ></button>
                    <button
                      id={item.id}
                      key={item.id + 2}
                      onClick={handleBuyClick}
                      className={changeClassNameBtnBuy(item.id)}
                    ></button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className='buttom_text_of_menu_of_elements'>
          . . . what is fantastic design- - - - -
        </p>
      </div>
      <div
        className={`img_main_menu_of_section_create_new_element_${title}`}
      ></div>
    </div>
  );
};
