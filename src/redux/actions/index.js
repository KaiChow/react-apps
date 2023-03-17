export const ADD_CART = "add_cart";
export function addCart(list) {
  return {
    type: ADD_CART,
    payload: list,
  };
}
