import React from 'react';
import FeatureSummary from '../FeatureSummary/FeatureSummary';



function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => 
  <FeatureSummary key={idx}
  USCurrencyFormat={props.USCurrencyFormat}
    type={feature}
    name={props.selected[feature].name}
    cost={props.selected[feature].cost}
  />
  )
  return (
    <div>
      {summary}
    </div>
  )
}

export default Summary