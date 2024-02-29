import Modal from "./Modal";
import orderSuccessImage from "../../assets/icons/order_success.svg"

const OrderSuccessModal = ({onClose}) => {
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={orderSuccessImage} alt="Order Successfully placed image" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed</h1>
                        <span>Order ID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal;