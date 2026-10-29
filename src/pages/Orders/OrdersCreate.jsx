const OrdersCreate = ({setOrders}) => {
  return (
    <div>
      <input name="id" value={order.id} type="text" placeholder="Input new Id"/>
      <input name="item" value={order.item} type="text" placeholder="Input new Item"/>
      <input name="price" value={order.price} type="text" placeholder="Input new Total"/>
    </div>
  );
}

export default OrdersCreate;