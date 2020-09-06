export const required = (element) => {
  return element === '';
};

export const maxLength = (element, value) => {
  return element.length > value;
};

export const minLength = (element, value) => {
  return element.length < value;
};
