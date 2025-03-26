import { LinkStyled, BtnWhiteStyled, BtnGoToCart } from 'Styled';
import cart from '../../Utils/Images/buy.png';
import { useLogOut } from 'hooks/useLogOut';
import { useSelectors } from 'Components/Selectors';

export const Menu = () => {
  const { handleLogOutClick } = useLogOut();
  const { dataCart } = useSelectors();

  return (
    <div className='container_homepage'>
      <nav className='nav_page'>
        <div className='menu_of_btn_link'>
          <LinkStyled to='buttons'>buttons</LinkStyled>
          <LinkStyled to='inputs'>inputs</LinkStyled>
        </div>

        <div className='container_btn_log_out_cesta'>
          <BtnGoToCart to='/cart'>
            <img src={cart} alt='buy' />
          </BtnGoToCart>
          <p className='amount_of_elements_in_the_cart'>{dataCart.length}</p>
          <BtnWhiteStyled onClick={handleLogOutClick}>log out</BtnWhiteStyled>
        </div>
      </nav>
      <div className='menu_of_elements'>
        <p className='top_text_of_menu_of_elements'>
          - - - - -click on one of these buttons . . .
        </p>
        <p className='buttom_text_of_menu_of_elements'>
          . . . what is fantastic design- - - - -
        </p>
      </div>
      <div className='img_main_menu_of_section_create_new_element'></div>
    </div>
  );
};
