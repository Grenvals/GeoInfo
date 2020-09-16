export const required = (element: string): boolean => {
  return element === '';
};

export const maxLength = (element: string, value: number): boolean => {
  return element.length > value;
};

export const minLength = (element: string, value: number): boolean => {
  return element.length < value;
};
