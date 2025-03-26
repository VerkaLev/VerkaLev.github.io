import { deletePx } from 'Components/MenuCreateElement/Helpers';
import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  hover,
} from 'Consts';
import { SimpleyComplexHoverPropertiesPropsType } from 'Types';

export const SimpleHoverProperties: React.FC<
  SimpleyComplexHoverPropertiesPropsType
> = ({ setPropertyInput, propertyInput, isEdit }) => {
  const handleInputHoverChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPropertyInput((prev) => {
      if (e.target.type === 'color' || e.target.name === 'border-style') {
        return {
          ...prev,
          [hover]: {
            ...prev[hover],
            [e.target.name]: e.target.value,
          },
        };
      } else {
        return {
          ...prev,
          [hover]: {
            ...prev[hover],
            [e.target.name]: e.target.value + 'px',
          },
        };
      }
    });
  };
  return (
    <>
      <div>
        <p>background-color</p>
        <input
          onChange={handleInputHoverChange}
          name="background-color"
          value={propertyInput[hover][backgroundColor]}
          className="input_color"
          type="color"
        />
      </div>

      <div>
        <p>color</p>
        <input
          onChange={handleInputHoverChange}
          name="color"
          value={propertyInput[hover].color}
          className="input_color"
          type="color"
        />
      </div>

      <div>
        <p>width</p>
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="width"
            type="text"
            placeholder={
              !isEdit
                ? 'example: 150'
                : 'previous: ' + deletePx(propertyInput[hover].width)
            }
          />
          <p className="px">px</p>
        </div>
      </div>

      <div>
        <p>height</p>
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="height"
            type="text"
            placeholder={
              !isEdit
                ? 'example: 30'
                : 'previous: ' + deletePx(propertyInput[hover].height)
            }
          />
          <p className="px">px</p>
        </div>
      </div>

      <div>
        <p>border-radius</p>
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="border-radius"
            type="text"
            placeholder={
              !isEdit
                ? 'example: 15'
                : 'previous: ' + deletePx(propertyInput[hover][borderRadius])
            }
          />
          <p className="px">px</p>
        </div>
      </div>

      <div>
        <p>border</p>
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="border-width"
            type="text"
            placeholder={
              !isEdit
                ? 'example: 5'
                : 'previous: ' + deletePx(propertyInput[hover][borderWidth])
            }
          />
          <p className="px">px</p>
          <select
            onChange={handleInputHoverChange}
            name="border-style"
            value={propertyInput[hover][borderStyle]}
          >
            <option>none</option>
            <option>solid</option>
            <option>dashed</option>
            <option>double</option>
            <option>dotted</option>
            <option>inset</option>
            <option>outset</option>
            <option>hidden</option>
            <option>groove</option>
            <option>ridge</option>
          </select>
          <input
            onChange={handleInputHoverChange}
            name="border-color"
            value={propertyInput[hover][borderColor]}
            className="input_color"
            type="color"
          />
        </div>
      </div>
    </>
  );
};
