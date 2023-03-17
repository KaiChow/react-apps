import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [list, setList] = useState([
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
  ]);
  const [total, setTotal] = useState(0);

  const [buyList, setBuyList] = useState([]);

  const addCart = (sp) => {
    const index = list.findIndex((it) => it.id === sp.id);
    setList(() => {
      list[index].num--;
      return [...list];
    });
    setBuyList((prev) => [...prev, sp]);
  };

  useEffect(() => {
    const ts = buyList.reduce(function (prev, item, index, arr) {
      // 从第二个成员值2开始遍历，第一个成员将在第一次遍历的时候作为第1个参数
      // 返回当次的结果 + 当前的成员
      return prev + item.price;
    }, 0);
    setTotal(ts);
  }, [buyList]);
  return (
    <>
      <Card title="Shopping Cart Example">
        {list.map((it) => {
          return (
            <Card key={it.id}>
              <p>
                {it.name} - ￥{it.price} x {it.num}
              </p>
              <Button
                type="primary"
                disabled={it.num === 0}
                onClick={() => addCart(it)}
              >
                Add to cart
              </Button>
            </Card>
          );
        })}
      </Card>
      <Card title="Your Cart">
        <p>Please add some products to cart.</p>
        <p>Total: ￥{total}</p>
        <Button type="primary" disabled={buyList.length === 0}>
          Checkout
        </Button>
      </Card>
    </>
  );
};

export default Products;
