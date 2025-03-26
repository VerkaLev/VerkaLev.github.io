import {
  addPx,
  deletePxShadow,
  getColorShadow,
} from 'Components/MenuCreateElement/Helpers';
import { boxShadow, hover } from 'Consts';
import { useState } from 'react';
import { SimpleyComplexHoverPropertiesPropsType } from 'Types';

export const CopmlexHoverProperties: React.FC<
  SimpleyComplexHoverPropertiesPropsType
> = ({ propertyInput, isEdit, setPropertyInput }) => {
  const [shadowPropertyHoverInput, setShadowPropertyHoverInput] = useState({
    boxValueShadowHoverInput: deletePxShadow(propertyInput[hover][boxShadow]),
    colorShadowHoverInput: getColorShadow(propertyInput[hover][boxShadow]),
  });
  const { boxValueShadowHoverInput, colorShadowHoverInput } =
    shadowPropertyHoverInput;

  const handleShadowHoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShadowPropertyHoverInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddShadowPropertyHoverClick = () => {
    const boxShadow = 'box-shadow';
    setPropertyInput((prev) => ({
      ...prev,
      [hover]: {
        ...prev[hover],
        [boxShadow]:
          addPx(boxValueShadowHoverInput) + ' ' + colorShadowHoverInput,
      },
    }));
  };

  const [ownPropertyHoverInput, setOwnPropertyHoverInput] = useState({
    ownPropertyHover: '',
    ownValueOfPropertyHover: '',
  });
  const { ownPropertyHover, ownValueOfPropertyHover } = ownPropertyHoverInput;

  const handleOwnPropertyHoverChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOwnPropertyHoverInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddOwnPropertyHoverClick = () => {
    setPropertyInput((prev) => ({
      ...prev,
      [hover]: {
        ...prev[hover],
        [ownPropertyHover]: ownValueOfPropertyHover,
      },
    }));
  };

  return (
    <>
      <div>
        <p>shadow</p>
        <div className="flexbox_value">
          <input
            onChange={handleShadowHoverChange}
            name="boxValueShadowHoverInput"
            className="input_shadow"
            type="text"
            placeholder={
              !isEdit
                ? 'example: 1 1 1 1'
                : 'previous: ' + boxValueShadowHoverInput
            }
          />
          <p className="px">px</p>
          <input
            onChange={handleShadowHoverChange}
            name="colorShadowHoverInput"
            value={colorShadowHoverInput}
            className="input_color"
            type="color"
          />
          <button onClick={handleAddShadowPropertyHoverClick}>ok</button>
        </div>
      </div>

      <p>other property</p>
      <div className="flexbox_value_other_property">
        <input
          onChange={handleOwnPropertyHoverChange}
          type="text"
          placeholder="display"
          name="ownPropertyHover"
        />
        <input
          onChange={handleOwnPropertyHoverChange}
          type="text"
          placeholder="inline-block"
          name="ownValueOfPropertyHover"
        />
        <button onClick={handleAddOwnPropertyHoverClick}>ok</button>
      </div>
    </>
  );
};
