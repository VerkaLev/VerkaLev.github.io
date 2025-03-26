import cart from '../../Utils/Images/buy.png';
import { FormElement } from 'Components/FormElement';
import { useSelectors } from 'Components/Selectors';

export const Inputs: React.FC = () => {
  const { dataInputs } = useSelectors();
  const imgSrc = cart;

  return <FormElement title="input" stateData={dataInputs} imgSrc={imgSrc} />;
};
