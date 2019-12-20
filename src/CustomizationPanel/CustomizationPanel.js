import React from 'react';
import CustomizationType from '../CustomizationType/CustomizationType';

function CustomizationPanel(props) {
  const customizations = Object.keys(props.features).map((item, idx) => 
  <CustomizationType 
  key={idx}
  name={item}
  updateFeature={props.updateFeature}
  USCurrencyFormat={props.USCurrencyFormat}
  features={props.features}
  selected={props.selected}/>)
  return (
    <div>
      {customizations}
    </div>
  )
}

export default CustomizationPanel