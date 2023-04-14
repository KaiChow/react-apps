import { Button, Card, List } from "antd";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { addCart } from "../redux/actions";

const Products = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card title="Shopping Cart Example">
        {products.list.map((it) => {
          return (
            <Card key={it.id}>
              <p>
                {it.name} - ￥{it.price} x {it.num}
              </p>
              <Button
                type="primary"
                disabled={it.num === 0}
                onClick={() => dispatch(addCart({ ...it, num: 1 }))}
              >
                Add to cart
              </Button>
            </Card>
          );
        })}
      </Card>
      <Card title="Your Cart">
        <p>Please add some products to cart.</p>
        <List
          bordered
          dataSource={products.buyList}
          renderItem={(item) => (
            <List.Item>
              <div>
                <span>{item.name}</span> -----
                <span>
                  {item.price}*{item.num}
                </span>
              </div>
            </List.Item>
          )}
        />
        <p>Total: ￥{products.total}</p>
        <Button type="primary" disabled={products.buyList.length === 0}>
          Checkout
        </Button>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Products);
