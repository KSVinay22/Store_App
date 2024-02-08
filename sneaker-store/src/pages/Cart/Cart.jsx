/* eslint-disable no-unused-vars */
import './Cart.scss';
import { useCartContext } from '../../CartContext';
import ProductCard from '../../ProductCard/ProductCard';

const Cart = () => {
    const { cartItems, removeFromCart } = useCartContext();

    const handleRemoveFromCart = (itemId) => {
      removeFromCart(itemId); // Call removeFromCart function with the item's ID as an argument
    };

    const handleResetCart = () => {
      cartItems.forEach((item) => removeFromCart(item.id));
    };

    const checkout = async () => {
      await fetch('http://localhost:5000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cartItems})
      }).then((response) => {
        return response.json();
      }).then((response) => {
        if(response.url) {
          window.location.assign(response.url);
        }
      })
    }

  return (
    <div className="cart">
        <div className="top">
            <span className="title">Your items</span>
        </div>
        <div className="bottom">
        {cartItems.length === 0 ? (
            <p>Cart is empty.</p>
        ) : (
            <div className='cart-list'>
            {cartItems.map((item) => (
              <ProductCard key={item.id} item={item} 
              handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
            </div>
        )}
        {cartItems.length > 0 && (
          <div className='btn-grp'>
            <button className='reset' onClick={handleResetCart}>Reset Cart</button>
            <button className='checkout' onClick={checkout}>Checkout</button>
          </div>
        )}
        </div>
    </div>
  )
}

export default Cart
