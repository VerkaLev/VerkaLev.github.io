import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  ACTION_GET_INPUTS_FAILED,
  ACTION_GET_INPUTS_REQUESTED,
  ACTION_GET_INPUTS_SUCCEED,
  ACTION_POST_INPUTS_FAILED,
  ACTION_POST_INPUTS_REQUESTED,
  ACTION_POST_INPUTS_SUCCEED,
  ACTION_DELETE_INPUTS_REQUESTED,
  ACTION_DELETE_INPUTS_SUCCEED,
  ACTION_DELETE_INPUTS_FAILED,
  ACTION_EDIT_INPUTS_REQUESTED,
  ACTION_EDIT_INPUTS_SUCCEED,
  ACTION_EDIT_INPUTS_FAILED,
} from './actions';

import { ElementType } from 'Types';

type InitialInputsStateType = {
  data: ElementType[];
  error: null | string;
  isLoading: boolean;
};

const initialInputsState: InitialInputsStateType = {
  data: [],
  error: null,
  isLoading: false,
};

export const inputsReducer = createReducer(initialInputsState, (builder) => {
  builder
    .addCase(ACTION_GET_INPUTS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_GET_INPUTS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_GET_INPUTS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_POST_INPUTS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_POST_INPUTS_SUCCEED,
      (state, action: PayloadAction<ElementType>) => ({
        ...state,
        isLoading: false,
        data: state.data.concat([action.payload]),
      })
    )
    .addCase(
      ACTION_POST_INPUTS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_DELETE_INPUTS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_DELETE_INPUTS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_DELETE_INPUTS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_EDIT_INPUTS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_EDIT_INPUTS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_EDIT_INPUTS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addDefaultCase((state) => ({ ...state }));
});
