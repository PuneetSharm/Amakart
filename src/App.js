import { useDispatch, useSelector } from "react-redux";
import AuthIndex from "./components/Auth/index";
import Header from "./components/Layouts/header";
import Subheader from "./components/Layouts/subheader";
import Products from "./components/Products/products";
import {Routes, Route, Navigate} from "react-router-dom";
import { checkIsLoggedIn } from "./actions/auth";
import { useEffect } from "react";

const App = ()=> {

  
//   const [cartItems, setCartItems]=useState([]);
//   const [eventQueue, setEventQueue] = useState({
//     id: " ",
//     type: " ",
//   });

// const handleAddItem = item =>{
//   let items = [...cartItems];
//   let index = items.findIndex(i => i.id === item.id);
//   if(index > -1){
//     items[index] = item;
//   }
//   else {
//     items.push(item);
//   }
//   setCartItems([...items]);
//   // setCartItems(cartItems + 1);
// }

// const handleRemoveItem = item =>{
//   let items = [...cartItems];
//   let index = items.findIndex(i => i.id === item.id);
//   if(items[index].quantity === 0)
//   {
//     items.splice(index, 1);
//   }
//   else{
//     items[index]=item;
//   }
//   setCartItems([...items]);
//   // setCartItems(cartItems - 1)
// }

// const handleEventQueue = (id, type) => {
//   setEventQueue({
//     id ,
//     type
//   });
// }

const dispatch = useDispatch();
const authState = useSelector(state => state.auth);

useEffect(()=> {
    dispatch(checkIsLoggedIn(()=>{}));
  }, []);

  return (
  <div>
  <Header />
  <Subheader />
  <Routes>
        <Route path="/404" element={<h1>Page Not Found</h1>} />
        <Route path="/:category?"  element={<Products />} />
        { authState.idToken ? 
        ( <>
        <Route path="/auth/login"  element={<Navigate replace to="/" />}/>
        <Route path="/auth/signup" element={<Navigate replace to="/" />} /> 
        </>)
        :
          <Route path="/auth/:type"  element={<AuthIndex/>} />
        }
        
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
