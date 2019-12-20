import React from 'react';
import CustomizationItem from '../CustomizationItem/CustomizationItem'

function CustomizationType(props) {
  const customizationItems = props.features[props.name].map((item, idx )=> 
    <CustomizationItem key={idx}
    index={`${props.name}_${idx}`}
    name={item.name}
    cost={item.cost}
    category={props.name}
    updateFeature={props.updateFeature}
    USCurrencyFormat={props.USCurrencyFormat}
    selected={props.selected}
    />
  )
  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {customizationItems}
    </fieldset>
  );
}

export default CustomizationType