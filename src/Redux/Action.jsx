export const actionTypes = {
  ADDITEM: "ADDITEM",
  DELITEM: "DELITEM",
  COMPRAFEITA: "COMPRAFEITA",
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

export const clearCart = (product) => {
  return { type: actionTypes.COMPRAFEITA, payload: product };
};
