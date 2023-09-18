import React from 'react';
import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const priceOptions = [
    {
      id: "1",
      name: "Basic",
      price: "$30 per month",
      features: [
        "Access to cardio and weightlifting equipment",
        "Unlimited access during off-peak hours",
        "Locker room access",
        "Access to fitness classes (limited selection)",
        "Discounts on personal training sessions"
      ]
    },
    {
      id: "2",
      name: "Premium",
      price: "$50 per month",
      features: [
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
      id: "3",
      name: "Family",
      price: "$90 per month",
      features: [
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
  
  console.log(priceOptions);
  

const PriceOptions = () => {
    return (
        <div>
           <h2 className="text-5xl">BestPrices in the town</h2>
           {
            priceOptions.map(Option => <Option key={Option.id} Option= {Option} />)
           } 
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;