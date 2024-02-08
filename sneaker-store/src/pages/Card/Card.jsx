/* eslint-disable react/prop-types */
import './Card.scss';

const Card = ({item}) => {
  return (
    <div className="card">
        <div className='img-holder'>
            <img src={item.imgsrc} alt='' className='img-place' />
        </div>
        <div className="details">
            <div className="product">
                <span className='model'>{item.productname}</span>
                <span className='category'>{item.category}</span>
            </div>
            <div className="price">
                <span className='pricing'>${item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default Card