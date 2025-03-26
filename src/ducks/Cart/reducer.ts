import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ElementType } from 'Types';
import {
  ACTION_POST_ELEMENTS_CART_REQUESTED,
  ACTION_POST_ELEMENTS_CART_SUCCEED,
  ACTION_POST_ELEMENTS_CART_FAILED,
  ACTION_GET_ELEMENTS_CART_FAILED,
  ACTION_GET_ELEMENTS_CART_REQUESTED,
  ACTION_GET_ELEMENTS_CART_SUCCEED,
  ACTION_DELETE_ELEMENTS_CART_FAILED,
  ACTION_DELETE_ELEMENTS_CART_REQUESTED,
  ACTION_DELETE_ELEMENTS_CART_SUCCEED,
} from './actions';

type InitialCartStateType = {
  data: ElementType[];
  error: null | string;
  isLoading: boolean;
};

const initialCartState: InitialCartStateType = {
  data: [],
  error: null,
  isLoading: false,
};

export const cartReducer = createReducer(initialCartState, (builder) => {
  builder
    .addCase(ACTION_GET_ELEMENTS_CART_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_GET_ELEMENTS_CART_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_GET_ELEMENTS_CART_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_POST_ELEMENTS_CART_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_POST_ELEMENTS_CART_SUCCEED,
      (state, action: PayloadAction<ElementType>) => ({
        ...state,
        isLoading: false,
        data: state.data.concat([action.payload]),
      })
    )
    .addCase(
      ACTION_POST_ELEMENTS_CART_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_DELETE_ELEMENTS_CART_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_DELETE_ELEMENTS_CART_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_DELETE_ELEMENTS_CART_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )
    .addDefaultCase((state) => ({ ...state }));
});
