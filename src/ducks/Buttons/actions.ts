import { createAction, Dispatch } from '@reduxjs/toolkit';
import { ElementType } from 'Types';
import { api } from 'API/api';

export const ACTION_GET_BUTTONS_REQUESTED = createAction(
  'GET_BUTTONS_REQUESTED'
);
export const ACTION_GET_BUTTONS_SUCCEED = createAction<ElementType[]>(
  'GET_BUTTONS_SUCCEED'
);
export const ACTION_GET_BUTTONS_FAILED =
  createAction<string>('GET_BUTTONS_FAILED');

export const ACTION_POST_BUTTONS_REQUESTED = createAction(
  'POST_BUTTONS_REQUESTED'
);
export const ACTION_POST_BUTTONS_SUCCEED = createAction<ElementType>(
  'POST_BUTTONS_SUCCEED'
);
export const ACTION_POST_BUTTONS_FAILED = createAction<string>(
  'POST_BUTTONS_FAILED'
);

export const ACTION_DELETE_BUTTONS_REQUESTED = createAction(
  'DELETE_BUTTONS_REQUESTED'
);
export const ACTION_DELETE_BUTTONS_SUCCEED = createAction<ElementType[]>(
  'DELETE_BUTTONS_SUCCEED'
);
export const ACTION_DELETE_BUTTONS_FAILED = createAction<string>(
  'DELETE_BUTTONS_FAILED'
);

export const ACTION_EDIT_BUTTONS_REQUESTED = createAction(
  'EDIT_BUTTONS_REQUESTED'
);
export const ACTION_EDIT_BUTTONS_SUCCEED = createAction<ElementType[]>(
  'EDIT_BUTTONS_SUCCEED'
);
export const ACTION_EDIT_BUTTONS_FAILED = createAction<string>(
  'EDIT_BUTTONS_FAILED'
);

const API = api('button');

export const getButtonAction = (url: string) => async (dispatch: Dispatch) => {
  dispatch(ACTION_GET_BUTTONS_REQUESTED());
  try {
    const data = await API.getMethod(url);

    dispatch(ACTION_GET_BUTTONS_SUCCEED(!!data ? data : []));
  } catch (e) {
    dispatch(ACTION_GET_BUTTONS_FAILED((e as Error).message));
  }
};

export const postButtonAction =
  (url: string, payload: ElementType, title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_POST_BUTTONS_REQUESTED());
    try {
      await API.postMethod(url, payload, title);
      dispatch(ACTION_POST_BUTTONS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_POST_BUTTONS_FAILED((e as Error).message));
    }
  };

export const deleteButtonAction =
  (url: string, payload: ElementType[], title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_DELETE_BUTTONS_REQUESTED());
    try {
      await API.deleteEditMethod(url, payload, title);
      dispatch(ACTION_DELETE_BUTTONS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_DELETE_BUTTONS_FAILED((e as Error).message));
    }
  };

export const editButtonAction =
  (url: string, payload: ElementType[], title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_EDIT_BUTTONS_REQUESTED());
    try {
      await API.deleteEditMethod(url, payload, title);
      dispatch(ACTION_EDIT_BUTTONS_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_EDIT_BUTTONS_FAILED((e as Error).message));
    }
  };
