import Header from "./components/Layouts/header";
import Subheader from "./components/Layouts/subheader";
import Products from "./components/Products/products";

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

  return (
  <div>
  <Header />
  <Subheader />
 <Products />
  </div>
  );
}

export default App;
