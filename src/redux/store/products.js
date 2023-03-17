import { ADD_CART } from "../actions";

const initState = {
  list: [
    {
      id: 1,
      name: "iPad 4 Mini",
      price: 500,
      num: 4,
    },
    {
      id: 2,
      name: "H&M T-Shirt White",
      price: 60,
      num: 5,
    },
    {
      id: 3,
      name: "Charli XCX - Sucker CD",
      price: 20,
      num: 9,
    },
  ],
  buyList: [],
  total: 0,
};

const countProducts = (list, it) => {
  const index = list.findIndex((i) => i.id === it.id);
  // 存在
  if (index >= 0) {
    list[index].num++;
  } else {
    list.push(it);
  }
  return [...list];
};

const productReducer = (state = initState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case ADD_CART:
      const index = state.list.findIndex((it) => it.id === payload.id);
      state.list[index].num--;
      // 添加的商品
      const ls = countProducts(state.buyList, payload);
      // 计算的总价
      const ts = ls.reduce((pre, item) => pre + item.price * item.num, 0);
      return {
        ...state,
        buyList: [...ls],
        total: ts,
      };
    default:
      return state;
  }
};

export default productReducer;
