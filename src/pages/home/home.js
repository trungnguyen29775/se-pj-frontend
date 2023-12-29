import './home.css';
import { IoIosSearch } from 'react-icons/io';
import instance from '../../axios/instance';
import TypleList from '../../components/typeList/typeList';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import StateContext from '../../redux/Context';
import Header from '../../components/header/header';

function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [state, setState] = useContext(StateContext);
    const foodList = document.querySelectorAll('.menu-type');
    const [type, setType] = useState('pizza');
    const [active, setActive] = useState(0);
    const handleFoodType = (i) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        foodList[i].classList.add('active');
        switch (i) {
            case 0:
                setType('pizza');
                break;
            case 1:
                setType('burger');
                break;
            case 2:
                setType('sandwich');
                break;
            case 3:
                setType('smoothy');
                break;
            case 4:
                setType('snack');
                break;
            case 5:
                setType('drink');
                break;
            default:
                setType('pizza');
                break;
        }
    };
    instance
        .post('/view-products', {})
        .then((res) => {
            setProducts(res.data);
        })
        .then()
        .catch((err) => console.log(err));
    return (
        <div className="home-wrapper">
            <Header />
            {/* Home content */}
            <div className="home-content-container">
                {/* Content 1 */}
                <div className="home-welcome">
                    <img className="home-welcom__img" src="/image/pizza-shipper.png" />
                    <div className="welcome-title-container">
                        <span className="header">Hello {state.userData.name}</span>
                        <span>
                            Get Free delivery <span className="highlight">500 Rs</span> and above
                        </span>
                        <button className="welcome__button">Order Now!</button>
                    </div>
                </div>
                {/* Content 2 */}
                <div className="home-menu-container">
                    <span className="menu-header">Menu</span>
                    <div className="menu-type-container">
                        <div className="menu-type active" onClick={() => handleFoodType(0)}>
                            <div className="menu-type-image-container">
                                <img src="/image/pizza.png" />
                            </div>
                            <span>Pizza</span>
                        </div>

                        <div className="menu-type " onClick={() => handleFoodType(1)}>
                            <div className="menu-type-image-container">
                                <img src="/image/burger.png" />
                            </div>
                            <span>Burger</span>
                        </div>

                        <div className="menu-type " onClick={() => handleFoodType(2)}>
                            <div className="menu-type-image-container">
                                <img src="/image/sandwitch.png" />
                            </div>
                            <span>Sandwitch</span>
                        </div>

                        <div className="menu-type " onClick={() => handleFoodType(3)}>
                            <div className="menu-type-image-container">
                                <img src="/image/smoothy.png" />
                            </div>
                            <span>Smoothy</span>
                        </div>

                        <div className="menu-type " onClick={() => handleFoodType(4)}>
                            <div className="menu-type-image-container">
                                <img src="/image/popcorn.png" />
                            </div>
                            <span>Snack</span>
                        </div>

                        <div className="menu-type " onClick={() => handleFoodType(5)}>
                            <div className="menu-type-image-container">
                                <img src="/image/drink.png" />
                            </div>
                            <span>Drink</span>
                        </div>
                    </div>
                    <div className="type-list-container">
                        {products
                            .filter((product) => product.type == type)
                            .map((item, key) => (
                                <TypleList data={item} type={item.type} key={key} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
