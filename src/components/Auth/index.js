import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import Loader from "../UI/loader";
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth";


const AuthIndex = () => {
    const [details,setDetails] = useState({
        email : "",
        password : "",
    });
    const [loader, setLoader] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value,
        })
    }

    useEffect(() =>{
        return () => {
            setLoader(false);
            setDetails({
                email: "",
                password: "",
            })
        }
    }, [])

    const handleSubmission = e =>{
        e.preventDefault();
        if(params.type === "signup"){
            setLoader(true);
            dispatch(signupWithEmailAndPassword(details, (data) => {
                if(data.error){
                    console.log(data.response);
                    alert(data?.response?.data?.error?.message || "Error Occurred");
                }
                else{
                    // console.log("Successfully Signed Up!");
                    navigate("/");
                }
                setLoader(false);
            }));
        }
        else if(params.type === "login"){
            setLoader(true);
            dispatch(loginWithEmailAndPassword(details, (data) => {
                if(data.error){
                    // console.log(data.response);
                    alert(data?.response?.data?.error?.message || "Error Occurred");
                }
                else{
                    // console.log("Successfully Logged in!");
                    navigate("/");
                }
                setLoader(false);
            }));
    }
}

 
    

return (
    <>
   <div className="auth-container">
    <div className="auth-container--box">
        <div className="tab-selector">
            <NavLink exact to="/auth/login"><h3>login</h3></NavLink>
            <NavLink exact to="/auth/signup"><h3>Signup</h3></NavLink>
        </div>
        <form autoComplete="off" onSubmit={handleSubmission}>
            <div className="input-wrap">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Enter Email" value = {details.email} onChange={handleInput} />
            </div>
            <div className="input-wrap">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password" value = {details.password} onChange={handleInput}/>
            </div>
            <div className="button-wrap">
                <button className="login-btn">{params.type === "login" ? "login" : "Signup"}</button>
            </div>
        </form>
    </div>
</div>
    { loader && <Loader /> }  
</>
)
}
export default AuthIndex;