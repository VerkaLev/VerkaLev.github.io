import cart from '../../Utils/Images/buy.png';
import { FormElement } from 'Components/FormElement';
import { useSelectors } from 'Components/Selectors';

export const Buttons: React.FC = () => {
  const { dataButtons } = useSelectors();

  const imgSrc = cart;

  return <FormElement title="button" stateData={dataButtons} imgSrc={imgSrc} />;
};
