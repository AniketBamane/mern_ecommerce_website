
import { Provider } from "react-redux";
import myStore from "../store/myStore";

const StoreProvider = ({children})=>{

  return (
    <Provider store={myStore}>
      {children}
    </Provider>
  )
}

export default StoreProvider;