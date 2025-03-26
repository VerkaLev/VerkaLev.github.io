import { useAppSelector } from 'hooks/reduxHooks';

export const useSelectors = () => {
  const dataCart = useAppSelector((state) => state.cart.data);
  const dataButtons = useAppSelector((state) => state.buttons.data);
  const dataInputs = useAppSelector((state) => state.inputs.data);
  const isDataButtonLoading = useAppSelector(
    (state) => state.buttons.isLoading
  );
  const isDataInputLoading = useAppSelector((state) => state.inputs.isLoading);
  const isDataCartLoading = useAppSelector((state) => state.cart.isLoading);

  return {
    dataCart,
    dataInputs,
    dataButtons,
    isDataInputLoading,
    isDataButtonLoading,
    isDataCartLoading,
  };
};
