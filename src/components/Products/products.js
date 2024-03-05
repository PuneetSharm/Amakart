import ListItem from "../Products/ListItems/listitem";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../UI/loader";

const Products = () => {
    const [items, setItem] = useState([]);
    const [loader,setLoader]= useState(true);
    // const [presentItems, setPresentItems]= useState([]);

    useEffect(()=> {
        async function fetchItems(){
            try{
                const response = await axios.get("https://react-2023-3d76a-default-rtdb.firebaseio.com/items.json")
                const data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id : index,
                    }
                })
                setItem(transformedData);
            }
            catch (error) {
            console.log("Error : ",error);
            alert(error);
            }
            finally{
                setLoader(false);
            }
            
        }
       fetchItems(); 
    }, []);

//     useEffect(() => {
//         if(eventState.id > -1){
//         if(eventState.type === 1){
//             handleAddItem(eventState.id);
//         } else if(eventState.type === -1){
//             handleRemoveItem(eventState.id);
//         }
//     }
//     }, [eventState])


// const handleAddItem = (id) => {
//     // if(presentItems.indexOf(id) > -1){
//     //     return;
//     // }
//     // setPresentItems([...presentItems, id])
    
//     let data = [...items];
//     let index = data.findIndex(i => i.id === id);
//     data[index].quantity += 1;
//     setItem([...data]);
//     onAddItem(data[index]);
// }

// const handleRemoveItem = (id) => {
//     // let index= presentItems.indexOf(id);
//     // if(index > -1){
//     //     let items = [...presentItems];
//     //     items.splice(index, 1);
//     //     setPresentItems([...items]);
//     //     onRemoveItem();
//     // }
//     let data = [...items];
//     let index= data.findIndex(i => i.id === id);
//     if(data[index].quantity !== 0)
//     {
//     data[index].quantity -= 1;
//     setItem([...data]);
//     onRemoveItem(data[index]);
//     }
// }

    return (
    <>
    <div className={"product-list"}>
    <div className={"product-list--wrapper"}>
    {
        items.map(item =>{
            return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />)
        })
    }
        </div>
    </div>
    {loader && <Loader/>}
    </>
    )
}
export default Products;