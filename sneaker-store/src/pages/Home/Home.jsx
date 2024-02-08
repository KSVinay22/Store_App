import Card from '../Card/Card';
import './Home.scss';
import {GrPrevious, GrNext} from 'react-icons/gr';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductsDataArray } from '../../ProductsData';

const Home = () => {

  const [startIndex, setStartindex] = useState(0);
  const navigate = useNavigate();
  const data = ProductsDataArray;

  const cardsPerPage = 3;

  const handlePrev = () => {
    const newIndex = startIndex+cardsPerPage;
    setStartindex(Math.min(newIndex, data.length-cardsPerPage));
  }

  const handleNext = () => {
    const newIndex = startIndex-cardsPerPage;
    setStartindex(Math.max(newIndex, 0));
  }
  const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);

  const handleShop = () => {
    navigate('/products/new releases');
  }

  return (
    <div className="home">
      <div className="wrapper">
        <div className="left">
          <img src='https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg' alt=''/>
        </div>
        <div className="right">
          <img src='https://images.pexels.com/photos/9645566/pexels-photo-9645566.jpeg' alt=''/>
        </div>
      </div>
      <div className="description">
        <h1>sneak in</h1>
        <p>Lorem ipsum dolor sit amet. Qui facere molestiae aut cupiditate 
          voluptas vel voluptates possimus eum recusandae voluptatum a modi sunt. 
          Vel modi nihil et repellat asperiores non vero consequuntur At tempora harum.
        </p>
        <button className='btn' onClick={handleShop}>Shop now</button>
      </div>
      <div className="spotlight">
        <div className="top">
          <h1>In the spotlight</h1>
          <div className="toggles">
            <button className="prev" onClick={handlePrev}>
              <GrPrevious/>
            </button>
            <button className="next" onClick={handleNext}>
              <GrNext/>
            </button>
          </div>
        </div>
        <div className="bottom">
          {visibleCards.map(item =>(
            <Link to={`/product/${item.id}`} key={item.id} className='link'>
              <Card item={item}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home