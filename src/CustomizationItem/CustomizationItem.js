import React from 'react';

function CustomizationItem(props) {
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.index}
        className="feature__option"
        name={props.name}
        checked={props.name === props.selected[props.category].name}
        onChange={() => props.updateFeature(props.category, { name: props.name, cost: props.cost})}
      />
      <label htmlFor={props.index} className="feature__label">
        {props.name} ({props.USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  );
}

export default CustomizationItem