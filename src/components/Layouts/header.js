import { useNavigate } from "react-router-dom";
import Cart from "../Cart";
import SearchBox from "../UI/search";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth);
    const handleNav = () => {
        navigate("/auth/login");
    }
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout());
    }
    return(
        <header>
        <div className="nav-brand">
            <a to="/">
                <span>AmaKart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                    height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </a>
        </div>
        <div className="searchBox-container">
            <SearchBox />
        </div>
        {
            authState && authState.idToken ? 
            <div className="user-actions">
                <button title="User Profile" className="material-icons">account_circle</button>
                <button onClick={logoutHandler} title="Logout" className="material-icons">logout</button>
            </div>
            :
            <button className="login-btn" onClick={handleNav}>Login</button>
        }
        <div className="cart-container">
            <Cart />
        </div>
    </header>
    )
}
export default Header;