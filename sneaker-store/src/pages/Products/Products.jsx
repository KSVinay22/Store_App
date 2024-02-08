import './Products.scss';
import { useParams, Link } from 'react-router-dom';
import Card from '../Card/Card';
import { ProductsDataArray } from '../../ProductsData';

const Products = () => {

  const ProductsData = ProductsDataArray;

  const { category } = useParams();
  let filteredProducts=[];
  if(category === 'men'){
    filteredProducts = ProductsData.filter((item)=> item.category === 'Men');
  }
  else if(category === 'women'){
    filteredProducts = ProductsData.filter((item)=> item.category === 'Women');
  }
  else if(category === 'kids'){
    filteredProducts = ProductsData.filter((item)=> item.category === 'Kids');
  }
  else{
    filteredProducts = ProductsData.filter((item)=> item.isNewFeatured === true);
  }

  return (
    <div className="products">
        <div className="top">
            <div className="first">
                <h1>sneak in</h1>
            </div>
            <div className="second"></div>
            <div className="third"></div>
        </div>
        <div className="bottom">
            <h1><span>Sneak in</span> {category}</h1>
            <div className="productlist">
                {filteredProducts.map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id} className='link'>
                        <Card item={item} />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products