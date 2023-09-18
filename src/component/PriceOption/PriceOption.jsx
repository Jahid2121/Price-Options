import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 rounded-md flex flex-col  text-white p-4'>
           <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
           </h2>
           <h4 className='text-3xl text-center my-8 '>{name}</h4>
           <div className='pl-6 flex-grow'>
           {
            features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
           }
           </div>
           <button className='mt-12 w-full btn btn-blue-dark py-2 hover:bg-blue-200'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;