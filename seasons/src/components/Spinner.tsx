import React from 'react';

interface Props {
    message?:  string;  
}

const Spinner: React.FC<Props> = (props) => {
    return (        
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>       
    );
};

Spinner.defaultProps = {
    message:"Loading..."
}

export default Spinner;