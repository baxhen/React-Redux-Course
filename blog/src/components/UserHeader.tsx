import React from 'react';
import { connect } from 'react-redux';


import { UserState, User } from '../interfaces';



interface MyProps {      
    userId:number;
    user?: User ;
}

interface ownProps {       
    userId:number;    
}

class UserHeader extends React.Component<MyProps> {

    
    render() {
       
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header">{user.name}</div>
        );
    };
};


const mapStateToProps = (state:UserState, ownProps:ownProps) => { 
    
    return { user: state.users.find(user => user.id === ownProps.userId)}
}


export default connect(mapStateToProps)(UserHeader);