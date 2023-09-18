import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 rounded-md text-white p-4'>
           <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
           </h2>
           <h4 className='text-3xl '>{name}</h4>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;