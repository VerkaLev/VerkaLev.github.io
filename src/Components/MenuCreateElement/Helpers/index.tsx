export const addPx = (str: string) => {
  const newStr = str.split(' ').join('px ') + 'px';
  return newStr;
};

export const deletePx = (str: string) => {
  const newStr = str.replace('px', '');
  return newStr;
};

export const deletePxShadow = (str: string) => {
  const newStr = str
    .replace(/(#=?).+/, '')
    .split('px')
    .join('');
  return newStr;
};

export const getColorShadow = (str: string) => {
  const newStr = str.replace(/.+(?=#)/, '');
  return newStr;
};
