import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './Season.css'

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const Season = (props) => {

  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season] //distructure 
  
  return (
    <div className={`season ${season}`}>
      <i className={`${iconName} icon massive iconLeft`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive iconRight`} />
    </div>
  );
}

export default Season;