import React from 'react';

function FeatureSummary(props){
  return(
    <div className="summary__option">
      <div className="summary__option__label">{props.type} </div>
      <div className="summary__option__value">{props.name}</div>
      <div className="summary__option__cost">
        {props.USCurrencyFormat.format(props.cost)}
      </div>
    </div>
  )
}

export default FeatureSummary