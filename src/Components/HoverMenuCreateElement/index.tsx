import { HoverMenuCreateElementPropsType } from 'Types';

import { SimpleHoverProperties } from './SimpleHoverProperties';
import { CopmlexHoverProperties } from './ComplexHoverProperties';

export const HoverMenuCreateElement: React.FC<
  HoverMenuCreateElementPropsType
> = ({
  setIsGoToHoverMenu,
  isGoToHoverMenu,
  setPropertyInput,
  propertyInput,
  title,
  postNewElementHandleClick,
  editElementClick,
  isEdit,
}) => {
  const handleReturnToMainCreateMenuClick = () => {
    setIsGoToHoverMenu(!isGoToHoverMenu);
  };

  return (
    <>
      <div className="hover_menu_properties_of_element">
        <h2 className="header_menu_create_new_element">
          {!isEdit ? 'create new' : 'edit'} {title} : hover
        </h2>

        <SimpleHoverProperties
          propertyInput={propertyInput}
          setPropertyInput={setPropertyInput}
          isEdit={isEdit}
        />
        <CopmlexHoverProperties
          propertyInput={propertyInput}
          setPropertyInput={setPropertyInput}
          isEdit={isEdit}
        />
      </div>

      <div className="wrapButtomsMenuCreating">
        <button
          onClick={handleReturnToMainCreateMenuClick}
          className="btnNextPageOfCreating"
        >
          return
        </button>
        <p>or</p>
        <button
          onClick={!isEdit ? postNewElementHandleClick : editElementClick}
        >
          {!isEdit ? 'create' : 'edit'}
        </button>
      </div>
    </>
  );
};
