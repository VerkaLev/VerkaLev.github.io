import { createAction, Dispatch } from '@reduxjs/toolkit';
import { ElementType } from 'Types';
import { api } from 'API/api';

export const ACTION_GET_ELEMENTS_CART_REQUESTED = createAction(
  'GET_ELEMENTS_CART_REQUESTED'
);

export const ACTION_GET_ELEMENTS_CART_SUCCEED = createAction<ElementType[]>(
  'GET_ELEMENTS_CART_SUCCEED'
);

export const ACTION_GET_ELEMENTS_CART_FAILED = createAction<string>(
  'GET_ELEMENTS_CART_FAILED'
);

export const ACTION_POST_ELEMENTS_CART_REQUESTED = createAction(
  'POST_ELEMENTS_CART_REQUESTED'
);

export const ACTION_POST_ELEMENTS_CART_SUCCEED = createAction<ElementType>(
  'POST_ELEMENTS_CART_SUCCEED'
);

export const ACTION_POST_ELEMENTS_CART_FAILED = createAction<string>(
  'POST_ELEMENTS_CART_FAILED'
);

export const ACTION_DELETE_ELEMENTS_CART_REQUESTED = createAction(
  'DELETE_ELEMENTS_CART_REQUESTED'
);

export const ACTION_DELETE_ELEMENTS_CART_SUCCEED = createAction<ElementType[]>(
  'DELETE_ELEMENTS_CART_SUCCEED'
);

export const ACTION_DELETE_ELEMENTS_CART_FAILED = createAction<string>(
  'DELETE_ELEMENTS_CART_FAILED'
);

const API = api('element');

export const getElementsInCartAction =
  (url: string) => async (dispatch: Dispatch) => {
    dispatch(ACTION_GET_ELEMENTS_CART_REQUESTED());
    try {
      const data = await API.getMethod(url);

      dispatch(ACTION_GET_ELEMENTS_CART_SUCCEED(!!data ? data : []));
    } catch (e) {
      dispatch(ACTION_GET_ELEMENTS_CART_FAILED((e as Error).message));
    }
  };

export const postElementInCartAction =
  (url: string, payload: ElementType, title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_POST_ELEMENTS_CART_REQUESTED());
    try {
      await API.postMethod(url, payload, title);
      dispatch(ACTION_POST_ELEMENTS_CART_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_POST_ELEMENTS_CART_FAILED((e as Error).message));
    }
  };

export const deleteElementInCartAction =
  (url: string, payload: ElementType[], title: string) =>
  async (dispatch: Dispatch) => {
    dispatch(ACTION_DELETE_ELEMENTS_CART_REQUESTED());
    try {
      await API.deleteEditMethod(url, payload, title);
      dispatch(ACTION_DELETE_ELEMENTS_CART_SUCCEED(payload));
    } catch (e) {
      dispatch(ACTION_DELETE_ELEMENTS_CART_FAILED((e as Error).message));
    }
  };
