import { createAction, Dispatch } from '@reduxjs/toolkit';
import { ElementType } from 'Types';
import { api } from 'API/api';

export const ACTION_GET_INPUTS_REQUESTED = createAction('GET_INPUTS_REQUESTED');
export const ACTION_GET_INPUTS_SUCCEED =
  createAction<ElementType[]>('GET_INPUTS_SUCCEED');
export const ACTION_GET_INPUTS_FAILED =
  createAction<string>('GET_INPUTS_FAILED');

export const ACTION_POST_INPUTS_REQUESTED = createAction(
  'POST_INPUTS_REQUESTED'
);
export const ACTION_POST_INPUTS_SUCCEED = createAction<ElementType>(
  'POST_INPUTS_SUCCEED'
);
export const ACTION_POST_INPUTS_FAILED =
  createAction<string>('POST_INPUTS_FAILED');

export const ACTION_DELETE_INPUTS_REQUESTED = createAction(
  'DELETE_INPUTS_REQUESTED'
);
export const ACTION_DELETE_INPUTS_SUCCEED = createAction<ElementType[]>(
  'DELETE_INPUTS_SUCCEED'
);
export const ACTION_DELETE_INPUTS_FAILED = createAction<string>(
  'DELETE_INPUTS_FAILED'
);

export const ACTION_EDIT_INPUTS_REQUESTED = createAction(
  'EDIT_INPUTS_REQUESTED'
);
export const ACTION_EDIT_INPUTS_SUCCEED = createAction<ElementType[]>(
  'EDIT_INPUTS_SUCCEED'
);
export const ACTION_EDIT_INPUTS_FAILED =
  createAction<string>('EDIT_INPUTS_FAILED');

const API = api('input');

export const getInputAction = (url: string) => async (dispatch: Dispatch) => {
  dispatch(ACTION_GET_INPUTS_REQUESTED());
  try {
    const data = await API.getMethod(url);

    dispatch(ACTION_GET_INPUTS_SUCCEED(!!data ? data : []));
  } catch (e) {
    dispatch(ACTION_GET_INPUTS_FAILED((e as Error).message));
  }
};

export const postInputAction =
  (url: string, payload: ElementType, title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_POST_INPUTS_REQUESTED());
    try {
      await API.postMethod(url, payload, title);
      dispatch(ACTION_POST_INPUTS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_POST_INPUTS_FAILED((e as Error).message));
    }
  };

export const deleteInputAction =
  (url: string, payload: ElementType[], title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_DELETE_INPUTS_REQUESTED());
    try {
      await API.deleteEditMethod(url, payload, title);
      dispatch(ACTION_DELETE_INPUTS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_DELETE_INPUTS_FAILED((e as Error).message));
    }
  };

export const editInputAction =
  (url: string, payload: ElementType[], title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_EDIT_INPUTS_REQUESTED());
    try {
      await API.deleteEditMethod(url, payload, title);
      dispatch(ACTION_EDIT_INPUTS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_EDIT_INPUTS_FAILED((e as Error).message));
    }
  };
