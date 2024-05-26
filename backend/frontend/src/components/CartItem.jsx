import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { clearCart, deleteOrder } from "../store/slices/orderSlice";

const CartItem = ({ item }) => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(deleteOrder({ token, id }));
  };

  return (
    <div className="flex flex-col mb-4 border-2 border-black p-4">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:gap-x-10 lg:items-center mb-2 lg:mb-0">
          <div>
            <span className="font-bold">Order ID: </span>
            <span>{item._id}</span>
          </div>
          <div>
            <span className="font-bold">Status: </span>
            <span>{item.status}</span>
          </div>
          <div className="p-2 rounded-lg bg-purple-500 text-white shadow-lg">
            Order Amount: ${item.amount}
          </div>
        </div>
        <button 
          className="text-red-500 hover:text-red-700"
          onClick={() => onRemove(item._id)}
        >
          Remove
        </button>
      </div>
      <List products={item.products} />
    </div>
  );
};

export default CartItem;
