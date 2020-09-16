export const updateObjectInArray = (
  items: any,
  itemId: string,
  objPropName: string,
  newObjProps: any
) => {
  return items.map((u: any) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
