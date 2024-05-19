import productImage from "../assets/first.jpg"

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex mb-4 border-b pb-4">
      <img src={productImage} alt={item.name} className="w-32 h-32 object-cover" />
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <button 
              className="bg-gray-300 px-2 py-1 rounded" 
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button 
              className="bg-gray-300 px-2 py-1 rounded" 
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold mr-4">${item.price.toFixed(2)}</span>
            <button 
              className="text-red-500 hover:text-red-700" 
              onClick={() => onRemove(item.id)}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;