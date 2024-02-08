/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import './Product.scss';
import {MdFavoriteBorder} from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { ProductsDataArray } from '../../ProductsData';
import { useCartContext } from '../../CartContext';
import { useState } from 'react';

const Product = () => {
    const { id } = useParams();
    const ProductsData = ProductsDataArray;
    const product = ProductsData.find((item) => item.id.toString() === id);
    const { productname, category, price, imgsrc, sizeData, priceId } = product;


    const defaultStyles = {
        backgroundColor: 'white',
        color: 'black',
    };

    const [buttonStyles, setButtonStyles] = useState(defaultStyles);
    const [selectedSize, setSelectedSize] = useState(null);
    const handleSize = (size) => {
        setSelectedSize(size); // Set the selected size when the button is clicked

        // Toggle the button styles based on the selected size
        setButtonStyles((prevStyles) =>
            prevStyles.backgroundColor === defaultStyles.backgroundColor &&
            prevStyles.color === defaultStyles.color
                ? { backgroundColor: 'black', color: 'white' }
                : defaultStyles
        );
    };

    const { addToCart } = useCartContext();
    const handleCart = () => {
        const itemToAdd = {
            id: id,
            productname: productname,
            category: category,
            price: price,
            imgsrc: imgsrc,
            size: selectedSize,
            priceId: priceId
        };
        addToCart(itemToAdd);
    }

  return (
    <div className="product">
        <div className="wrapper">
            <div className="left">
                <div className="img-holder">
                    <img src={imgsrc} alt=''/>
                </div>
            </div>
            <div className="right">
                <div className="product-details">
                    <span className='product-name'>{productname}</span>
                    <span className='category'>{category}'s Shoes</span>
                    <span className='price'>$ {price}</span>
                    <span className='desc'>Incl. of all taxes</span>
                </div>
                <div className="size-guide">
                    <span className='size'>Select one size:</span>
                    <div className="size-grid">
                        {
                            sizeData.map((size)=>(
                                // eslint-disable-next-line react/jsx-key
                                <button className='size-btn' key={size}
                                style={{
                                    backgroundColor:
                                        size === selectedSize ? 'black' : 'white',
                                    color: size === selectedSize ? 'white' : 'black',
                                }}
                                onClick={() => handleSize(size)}
                                >{size}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="btn-group">
                    <button className='btn-dark' onClick={handleCart}>Add to bag</button>
                    <button className="btn-light">Favourite <MdFavoriteBorder className='icon'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product