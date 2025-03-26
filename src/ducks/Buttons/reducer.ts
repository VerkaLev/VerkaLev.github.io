import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  ACTION_GET_BUTTONS_FAILED,
  ACTION_GET_BUTTONS_REQUESTED,
  ACTION_GET_BUTTONS_SUCCEED,
  ACTION_POST_BUTTONS_FAILED,
  ACTION_POST_BUTTONS_REQUESTED,
  ACTION_POST_BUTTONS_SUCCEED,
  ACTION_DELETE_BUTTONS_REQUESTED,
  ACTION_DELETE_BUTTONS_SUCCEED,
  ACTION_DELETE_BUTTONS_FAILED,
  ACTION_EDIT_BUTTONS_REQUESTED,
  ACTION_EDIT_BUTTONS_SUCCEED,
  ACTION_EDIT_BUTTONS_FAILED,
} from './actions';

import { ElementType } from 'Types';

type InitialButtonsStateType = {
  data: ElementType[];
  error: null | string;
  isLoading: boolean;
};

const initialButtonsState: InitialButtonsStateType = {
  data: [],
  error: null,
  isLoading: false,
};

export const buttonsReducer = createReducer(initialButtonsState, (builder) => {
  builder
    .addCase(ACTION_GET_BUTTONS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_GET_BUTTONS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_GET_BUTTONS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_POST_BUTTONS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_POST_BUTTONS_SUCCEED,
      (state, action: PayloadAction<ElementType>) => ({
        ...state,
        isLoading: false,
        data: state.data.concat([action.payload]),
      })
    )
    .addCase(
      ACTION_POST_BUTTONS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_DELETE_BUTTONS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_DELETE_BUTTONS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_DELETE_BUTTONS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addCase(ACTION_EDIT_BUTTONS_REQUESTED, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(
      ACTION_EDIT_BUTTONS_SUCCEED,
      (state, action: PayloadAction<ElementType[]>) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      })
    )
    .addCase(
      ACTION_EDIT_BUTTONS_FAILED,
      (state, action: PayloadAction<string>) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      })
    )

    .addDefaultCase((state) => ({ ...state }));
});
