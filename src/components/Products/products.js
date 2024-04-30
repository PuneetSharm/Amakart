import ListItem from "../Products/ListItems/listitem";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../UI/loader";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Products = () => {
    const [items, setItem] = useState([]);
    const [loader,setLoader]= useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search).get("search");
    const handleNotFound= () =>{
        navigate("/404");
    }
    // const [presentItems, setPresentItems]= useState([]);

    useEffect(()=> {
        async function fetchItems(){
            try{
                let slug = "items.json";
                if(params.category){
                    slug = `items-${params.category}.json`;
                }
                if(queryParams){
                    slug += `?search=${queryParams}`
                }
                const response = await axios.get(`https://react-2024-86ab4-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data;
                if(!data){
                    handleNotFound();
                    return;
                }
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id : index,
                    }
                })
                setItem(transformedData);
            }
            catch (error) {
            console.log("Error: ", error);
            }
            finally{
                setLoader(false);
            }
            
        }
       fetchItems(); 

       return() => {
        setItem([]);
        setLoader(true);
       }
    }, [params.category, queryParams]);

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
            return (<ListItem key={item.id} data={item} />)
        })
    }
        </div>
    </div>
    {loader && <Loader/>}
    </>
    )
};
export default Products;