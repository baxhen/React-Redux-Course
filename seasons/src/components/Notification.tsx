import React from 'react';

interface Props {
    msg?:  string;  
}

const Notification: React.FC<Props> = (props) => {
    return (        
        <div className="ui active dimmer">
            <div style={{color:'white'}}>{props.msg}</div>
        </div>       
    );
};

Notification.defaultProps = {
    msg:"This is a simple notification"
}

export default Notification;