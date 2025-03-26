import { ElementType } from 'Types';

export const api = (title: string) => {
  const request = async (url: string, {}) => {
    const res = await fetch(url);
    const data = await res.json();
    return data[title + 's'];
  };

  const getMethod = async (url: string) => {
    const data = await request(url, {
      method: 'GET',
    });
    return data;
  };

  const postMethod = async (
    url: string,
    payload: ElementType,
    title: string
  ) => {
    const data = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ [title + 's']: [payload] }),
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  };

  const deleteEditMethod = async (
    url: string,
    payload: ElementType[],
    title: string
  ) => {
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ [title + 's']: payload }),
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  };

  return { getMethod, postMethod, deleteEditMethod };
};
