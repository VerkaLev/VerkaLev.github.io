import { postButtonAction, editButtonAction } from 'ducks/Buttons/actions';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { useState } from 'react';
import { MainMenuCreateElementPropsType } from 'Types';
import { urlBtn, urlInput } from 'Consts';
import { HoverMenuCreateElement } from 'Components/HoverMenuCreateElement';
import { useNavigate } from 'react-router-dom';
import { SimpleProperties } from './SimpleProperties';
import { CopmlexProperties } from './ComplexProperties';
import { editInputAction, postInputAction } from 'ducks/Inputs/actions';
import { useSelectors } from 'Components/Selectors';

export const MenuCreateElement: React.FC<MainMenuCreateElementPropsType> = ({
  propertyInput,
  setPropertyInput,
  title,
  isEdit,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { dataButtons, dataInputs } = useSelectors();
  const [isGoToHoverMenu, setIsGoToHoverMenu] = useState(false);

  const handleHoverMenuClick = () => {
    setIsGoToHoverMenu(!isGoToHoverMenu);
  };

  const postNewElementHandleClick = async () => {
    if (title === 'button') {
      await dispatch(postButtonAction(urlBtn, propertyInput, title));
    } else if (title === 'input') {
      await dispatch(postInputAction(urlInput, propertyInput, title));
    }

    navigate(`/${title}s`);
  };

  const editElementClick = async () => {
    if (title === 'button') {
      const editData = dataButtons.map((item) => {
        if (item.id === propertyInput.id) {
          return (item = propertyInput);
        } else {
          return item;
        }
      });

      await dispatch(editButtonAction(urlBtn, editData, title));
    } else if (title === 'input') {
      const editData = dataInputs.map((item) => {
        if (item.id === propertyInput.id) {
          return (item = propertyInput);
        } else {
          return item;
        }
      });

      await dispatch(editInputAction(urlInput, editData, title));
    }
    navigate(`/${title}s`);
  };
  return (
    <>
      {!isGoToHoverMenu ? (
        <>
          <div className='main_menu_properties_of_element'>
            <h2 className='header_menu_create_new_element'>
              {!isEdit ? 'create new' : 'edit'} {title}
            </h2>

            <SimpleProperties
              setPropertyInput={setPropertyInput}
              propertyInput={propertyInput}
              isEdit={isEdit}
            />
            <CopmlexProperties
              setPropertyInput={setPropertyInput}
              propertyInput={propertyInput}
              isEdit={isEdit}
            />
          </div>

          <div className='wrapButtomsMenuCreating'>
            <button
              className='btnNextPageOfCreating'
              onClick={handleHoverMenuClick}
            >
              next
            </button>
            <p>or</p>
            <button
              onClick={!isEdit ? postNewElementHandleClick : editElementClick}
            >
              {!isEdit ? 'create' : 'edit'}
            </button>
          </div>
        </>
      ) : (
        <HoverMenuCreateElement
          title={title}
          setIsGoToHoverMenu={setIsGoToHoverMenu}
          isGoToHoverMenu={isGoToHoverMenu}
          setPropertyInput={setPropertyInput}
          propertyInput={propertyInput}
          postNewElementHandleClick={postNewElementHandleClick}
          editElementClick={editElementClick}
          isEdit={isEdit}
        />
      )}
    </>
  );
};
