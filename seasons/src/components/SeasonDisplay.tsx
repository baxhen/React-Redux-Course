import React from 'react';
import './SeasonDisplay.css';


interface Props {
    lat:  number;  
}

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'

    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}


const getSeason = (latitude:number,month:number) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'
    } else {
        return latitude > 0 ? 'winter' : 'summer'
    }

}


const SeasonDisplay: React.FC<Props> = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};


export default SeasonDisplay;