import './rightSideBar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import StateContext from '../../redux/Context';
import { navPayment, getUserData } from '../../redux/Action';

function RightSideBar() {
    const navigate = useNavigate();
    const [state, dispatchState] = useContext(StateContext);

    const handleLoginClick = (event) => {
        event.stopPropagation();
        navigate('/sign-in');
    };

    const handlePaymentClick = (event) => {
        event.stopPropagation();
        dispatchState(navPayment());
        navigate('/payment');
    };

    return (
        <div className="right-side-bar-wrapper">
            <div className="right-side-bar-header">
                {state.login ? (
                    <img src="/image/default-avt-image.jpg" />
                ) : (
                    <button onClick={(e) => handleLoginClick(e)} className="right-side-bar-header__button">
                        Login
                    </button>
                )}

                <div className="header-icon--center">
                    <FiShoppingCart />
                </div>
                <div className="header-icon--center">
                    <FaRegBell />
                    <div className="num-cart--up">
                        <span style={{ margin: 'auto' }}>0</span>
                    </div>
                </div>
            </div>
            <div className="slogan-container">
                <img src="/image/right-side-bar-image.png" />
                <span className="slogan">
                    Safe Delivery <span className="hightlight">@</span> your doors
                </span>
            </div>

            <div className="right-side-bar-order-container">
                <div className="header">
                    <span>Order</span>
                    <span className="view-all">View All</span>
                </div>
                <div className="right-side-bar-order-list">
                    <div className="order">
                        <div className="order-img-container">
                            <img src="/image/pizza/pizza1.jpg" />
                        </div>
                        <div className="order-detail">
                            <span className="order-detail-header">Margarita Pizza</span>
                            <span>Quantity: 18</span>
                            <div className="edit-order-container">
                                <button>
                                    <span style={{ margin: 'auto' }}>-</span>
                                </button>
                                <span>18</span>
                                <button>
                                    <span style={{ margin: 'auto' }}>+</span>
                                </button>
                                <button className="danger">
                                    <FaTrashAlt style={{ margin: 'auto' }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <button className="right-side-bar-payment__button" onClick={(e) => handlePaymentClick(e)}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
}
export default RightSideBar;
