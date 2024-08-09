import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ShoppingCart1 = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch cart items from localStorage
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedItems);

        // Calculate total items and price
        let itemsCount = 0;
        let priceSum = 0;

        storedItems.forEach(item => {
            itemsCount += item.quantity;
            priceSum += item.price * item.quantity;
        });

        setTotalItems(itemsCount);
        setTotalPrice(priceSum);
    }, []);

    return (
        <div 
            className="container" 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                height: '100vh',
                marginTop: '1px',
                position: 'relative'
            }}
        >
            {/* Link to Cart.js */}
            <Link 
                className="arrow" 
                to="/cart"  // Use to="/cart" instead of href="/cart"
                style={{
                    position: 'absolute',
                    top: '20px', // Adjust as needed
                    left: '20px' // Adjust as needed
                }}
            >
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAY2SURBVHic7ZtbbBRVGMf/35ltty2tkIiXIqJRsdDtslWBGi6mrRXa7WWLyWIwEqIxPhg08uAFMbiSaCI+8FoTRMQH4lZp3aXd9cZSEkBIaS3dlkuUIKQiYESu7ba78/mAJQ1lZue2WxL3l/Rlzvf9z3f+mZk9c84pkCFDhgwZ/r/QRHXc3dgyBciZwjG+SvbYyGOty/6ZiDpSbsA+rz+3YCh/MRMvJtA8gB8FaAYA6abQIQADBIoCcmeCpI6/L9r3V+yuiKeyvpQYwGDq84SXsMwvglALIN+g1AWAd8hMm11B989W1jiKpQawzyd6u+avIMY6EGZbqQ3mgyBpgzNQ3WalrGUG9HnaymSmJgClVmneCgZ2kSSvdrbUHbFCz7QBna90ZtnPnvsIjDUY/1ynimEGr3UG3JsIxGaETBlwtOH7aSNINAO8wIyOYRhBkZP7vKO54opRCcMG9DSEigTxd2A8YFTDChjoluLsdrTX/mkk35ABPQ2hIgHeA+BuI/kpoB8YqXQGPGf1Jgq9CT3Ptk8X4B9w+wweAIqBrHCfN6L751aXAX1efzbF8TWA+/V2lAZK5djgNgbruqt1GSDH8jcSUKavrrSyLFofWq0nQbNbffWhRTJxBww8NmlmMCFxaWlL7XEtwZoG4/f6pQRxk9b4CSZXitMmrcGaBjRrqGAlAQ7jNaUZgvuwJ1ylJTSpAezzCSJeZ76qNMPyWi1hSQ3o7S6rBvCI6YLSDAGV0bqwK1lcUgMI/JI1JeEwC3kuJLkYQIdFmqrIlFiVLEbVgH1efy4Y1RbU0pvNiafntNYdcrbUHZFteAGAqY8YTRA9l2xeoGpA/lB+OYBJJsvolyWpqihY/9eNTuMjI0jDahQB03o97SVqMaoGELDQZAHHJZuocrUsPTd6LVIesRGyPzWjq6sGRqVau/o7QGCeib5/i8uJyuId1WdGL/i9funOO65tY7DHhK4uiNQXaNQNYJ5pqFPgpOBEZenO+oEbUj6fmB3L30KgFUY0jcJMqvMXm2KizyeiXTTDQJ+nEyxVuoLuU2MvRg/NfweERQBOGNAEAzkETDOQOl2tUfFF1N3YMsUm2y/o7Oy8gFjgCFT/qjNPE9GG9oUMhKFvlTleEqjJVlo6U3wEbJxXoLdAAB+navAAUBJw7wXhc51ptn5vc5ZSo6IBksT6NyQ4DT9tBvrIO3+X4jgVG2Ly4KDejkB4u6chVKQ7TyO9jaFyBvTOTOMP7i6PKTUquslgijaErgHI0dnhGRlU4QrUHBt7Meppe5mZNH2gKJAH4F4DeWedAbdinuId8N9LY0CpXYVCAY7cfCeUfFu7GYztAB4y+Gdk8ABwSq1RdR7AQJ/BTgsFuKPP01489qIz6H6PGBsMahqCgX619iRTYeoy0fc9MuPHcXdC0P0+AxtN6OpCMH5RbVfPNv3ZesvH4aj9yrsAzijkWAoT7VJrVzVAZF3eB+CyyRrGmeC4voeo+NtsIQMlgepetQBVAxzNy4dB1GpBIYUCHDnsCbn764IzE7FJWwFMtUBXHcL2ZJunit8CowiZt8qElRaUU0jMbQkhpetcDstx+YtkQUmXxIqDNREGuq2pKX0QEHa11UWTxWlYEyQWTJ9YU1Za+VBLkKZ9AccTB74C80Fz9aQPAppLAu69WmI1GUA+n8ws3gAgm6osPVwScX5Ta7Dmra45O2v2E+G2fxQI9Hpxe+3vWuN17fVR9pX1AFJyXM0a+LOSQE3SN/9YdBngaF4+DIw0EnBSV13pYY+wX31Vb5KZIzI/AbjPSL7VMHAgdwRLZobcl/TmGtrudgVqjnFCfur2uBMoMmzPWmpk8ICJ/f45bXUnEpJUBlDEqIYFbBH2y9Vzm5+5aFTA9Kw0Uh6xTZ08+AEYb0HD1NoiLoL5NWew9kuzQpZNy6N1YRcLuQnAk1Zp3hryZ0FaMyuw5A9L1KwQGYXB1Fvf3kBE6wE8bqU0AWESwudorbZ0Rpqy4/L99eGFMrAKxF4Akw1KnWbgGwY13bzIahUp/zK9/o64Op8hqohRCvBsgB7G+AWRQQZOCKBfJtoPSuxxttZ2mT0MnYwJ+5eZzvpgnp3kAlnKYZst+5qZA88ZMmTIkCGDMf4FF//65A8GC2MAAAAASUVORK5CYII=" 
                    alt="back" 
                />
            </Link>

            <div 
                className="shopping-cart" 
                style={{ 
                    width: '1000px', 
                    height: '300px',
                    padding: '40px', 
                    border: '1px solid #ccc', 
                    borderRadius: '10px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: '#1f1c35', 
                    textAlign: 'center', 
                    color: '#fff'
                }}
            >
                <h2>Your Cart</h2>
                <div className="total" style={{ margin: '20px 0', fontSize: '18px' }}>
                    Total Items: <span id="total-items">{totalItems}</span><br />
                    Total Price: $<span id="total-price">{totalPrice.toFixed(2)}</span>
                </div>
                <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}
                >
                    <button
                        style={{
                            padding: '15px 30px',
                            backgroundColor: '#ff21bc', 
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                        onClick={() => alert('Proceed to Checkout')}
                        disabled={totalItems === 0}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart1;
