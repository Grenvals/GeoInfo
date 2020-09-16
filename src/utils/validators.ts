export const required = (element: string) => {
  return element === '';
};

export const maxLength = (element: string, value: number) => {
  return element.length > value;
};

export const minLength = (element: string, value: number) => {
  return element.length < value;
};
