import React from 'react';
import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = props => {

    
const priceOptions = [
    {
      "id": "1",
      "name": "Basic Membership",
      "price": "30",
      "features": [
        "Access to cardio and weightlifting equipment",
        "Unlimited access during off-peak hours",
        "Locker room access",
        "Access to fitness classes (limited selection)",
        "Discounts on personal training sessions"
      ]
    },
    {
      "id": "2",
      "name": "Premium Membership",
      "price": "50",
      "features": [
        "24/7 access to the gym",
        "Access to all fitness classes",
        "Personal trainer consultation",
        "Sauna and steam room access",
        "Towel service",
        "Access to swimming pool",
        "Complimentary nutrition consultation"
      ]
    },
    {
      "id": "3",
      "name": "Family Membership",
      "price": "90",
      "features": [
        "Access for two adults and two children",
        "Access to all gym facilities",
        "Discounted fitness classes for family members",
        "Childcare services",
        "Family locker room",
        "Access to racquetball courts",
        "Monthly family fitness challenge"
      ]
    }
  ];

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}  />)
            }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;