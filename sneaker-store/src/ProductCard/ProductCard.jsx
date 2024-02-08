/* eslint-disable react/prop-types */
import './ProductCard.scss';
import {AiFillDelete} from 'react-icons/ai';

const ProductCard = ({item, handleRemoveFromCart}) => {
  const handleDelete = () => {
    handleRemoveFromCart(item.id);
  };

  return (
    <div className="pcard">
        <div className="left">
            <img src={item.imgsrc} alt=''/>
        </div>
        <div className="middle">
            <span className='pname'>Product name: {item.productname}</span>
            <span className='category'>Category: {item.category}</span>
            <span className='price'>Price: ${item.price}</span>
            <span className='size'>Size: UK {item.size}</span>
        </div>
        <div className="right">
          <button className='delete-btn' onClick={handleDelete}>
            <AiFillDelete/>
          </button>
        </div>
    </div>
  )
}

export default ProductCard