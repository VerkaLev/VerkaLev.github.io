import { useSelectors } from 'Components/Selectors';
import { urlCart } from 'Consts';
import { deleteElementInCartAction } from 'ducks/Cart/actions';
import {
  BtnWithStylesReceived,
  InputWithStylesReceived,
} from 'Helpers/getBtnWithStylesRecived';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useLogOut } from 'hooks/useLogOut';
import { useNavigate } from 'react-router-dom';
import { BtnBlackStyled, BtnWhiteStyled } from 'Styled';
import { ClickEventType } from 'Types';

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleLogOutClick } = useLogOut();
  const { isDataCartLoading, dataCart } = useSelectors();

  const handleReturnClick = () => navigate('/');

  const handleDeleteClick = async (
    e: React.MouseEvent<HTMLButtonElement> & ClickEventType
  ) => {
    const arrWithoutDeletedElement = dataCart.filter(
      (item) => item.id !== e.target.id
    );
    await dispatch(
      deleteElementInCartAction(urlCart, arrWithoutDeletedElement, 'element')
    );
  };
  return (
    <div className='container_homepage'>
      <nav className='nav_page'>
        <div className='menu_of_btn_link'>
          <button onClick={handleReturnClick} className='btn_return'></button>
          <BtnBlackStyled>go to pay</BtnBlackStyled>
        </div>

        <div className='container_btn_log_out_cesta'>
          <BtnWhiteStyled onClick={handleLogOutClick}>log out</BtnWhiteStyled>
        </div>
      </nav>

      <div className='menu_of_elements'>
        <h2 className='header_cart'>cart</h2>
        <div className='container_of_recived_elements'>
          {isDataCartLoading ? (
            <p className='loading'>loading . . .</p>
          ) : (
            dataCart.map((item) => {
              return (
                <div
                  key={item.id}
                  className='container_button_recevied_and_btn_delete_btn_edit'
                >
                  {item.name === 'button' ? (
                    <BtnWithStylesReceived
                      styledProperties={item}
                      key={item.id}
                      id={item.id}
                    >
                      click
                    </BtnWithStylesReceived>
                  ) : item.name === 'input' ? (
                    <InputWithStylesReceived
                      placeholder='enter text'
                      styledProperties={item}
                      key={item.id}
                      id={item.id}
                    />
                  ) : (
                    ''
                  )}
                  <div
                    className='container_counts_of_buyed_element_btn_delete'
                    key={item.id + 1}
                  >
                    <div
                      key={item.id}
                      id={item.id}
                      className='container_counts_of_buyed_element'
                    >
                      <button
                        key={item.id}
                        id={item.id}
                        className='reduce_amount'
                      >
                        -
                      </button>
                      <div>1</div>
                      <button
                        key={item.id + 1}
                        id={item.id}
                        className='increase_amount'
                      >
                        +
                      </button>
                    </div>

                    <button
                      id={item.id}
                      key={item.id + 1}
                      onClick={handleDeleteClick}
                      className='btn_delete'
                    ></button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <p className='buttom_text_of_menu_of_elements'>
          . . . what is fantastic design- - - - -
        </p>
      </div>
      <div className='img_main_menu_of_section_create_new_element_cart'></div>
    </div>
  );
};
