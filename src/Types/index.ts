import { Dispatch, SetStateAction } from 'react';
import {
  hover,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderStyle,
  borderColor,
  boxShadow,
} from 'Consts';

export type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleClick: () => void;
  titleForm: string;
  titleBtnReplace: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorData: string;
};

export type UserDataType = {
  email: string;
  password: string;
};

export type ObjectType = {
  [key: string]: string;
};

export type ElementType = {
  [key: string]: string | ObjectType;
  id: string;
  [hover]:
    | {
        width: string;
        height: string;
        color: string;
        [backgroundColor]: string;
        [borderRadius]: string;
        [borderWidth]: string;
        [borderStyle]: string;
        [borderColor]: string;
        [boxShadow]: string;
      }
    | ObjectType;
  width: string;
  height: string;
  color: string;
  [backgroundColor]: string;
  [borderRadius]: string;
  [borderWidth]: string;
  [borderStyle]: string;
  [borderColor]: string;
  [boxShadow]: string;
};

export type TypePropsFormElement = {
  title: string;
  stateData: ElementType[];
  imgSrc: string;
};

export type PropertyInputType = {
  [key: string]: string;
};

export type ElementWithInterectiveStylesType = {
  children: string;
  element: string;
  properties: ElementType | {};
};

export type MainMenuCreateElementPropsType = {
  title: string;
  propertyInput: ElementType;
  setPropertyInput: Dispatch<SetStateAction<ElementType>>;
  isEdit: {} | null;
};

export type SimpleyComplexPropertiesPropsType = {
  setPropertyInput: Dispatch<SetStateAction<ElementType>>;
  propertyInput: ElementType;
  isEdit: {} | null;
};

export type SimpleyComplexHoverPropertiesPropsType = {
  setPropertyInput: Dispatch<SetStateAction<ElementType>>;
  propertyInput: ElementType;
  isEdit: {} | null;
};

export type HoverMenuCreateElementPropsType = {
  setIsGoToHoverMenu: Dispatch<SetStateAction<boolean>>;
  isGoToHoverMenu: boolean;
  postNewElementHandleClick: () => void;
  editElementClick: () => void;
} & MainMenuCreateElementPropsType;

export type TypePropsBtnElement = {
  children: string;
  styledProperties: ElementType;
  id: string;
};

export type TypePropsInputElement = {
  styledProperties: ElementType;
  id: string;
  placeholder: string;
};

export type AccType = {
  [key: string]: string | { [key: string]: string };
};

export type CreateNewElementType = {
  title: string;
};

export type ClickEventType = {
  target: { id: string; className: string };
};
