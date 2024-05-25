import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { clearCart, deleteOrder } from "../store/slices/orderSlice";

const CartItem = ({ item  }) => {
  const token = useSelector(state=>state.auth.token)
  const dispatch = useDispatch()
  const onRemove = (id)=>{
    // console.log(token)
   dispatch(deleteOrder({token,id}))
  }
  return (
    <div className="flex flex-col mb-4 border-2 border-black p-4">
    
      {/* <img src={item.product.image} alt={item.product.name} className="w-32 h-32 object-cover" /> */}
      <div className="ml-4 flex justify-between">
        <div className="flex gap-x-10 items-center">
        order id - {item._id} 
        <h2 className="font-bold">status-{item.status}</h2> 
        <h2 className=" p-2 rounded-lg bg-purple-500 text-white shadow-lg">order amount - ${item.amount}</h2> 
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