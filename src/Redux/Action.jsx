export const actionTypes = {
  ADDITEM: "ADDITEM",
  DELITEM: "DELITEM",
};

export const addCart = (product) => {
  return {
    type: actionTypes.ADDITEM,
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: actionTypes.DELITEM,
    payload: product,
  };
};
