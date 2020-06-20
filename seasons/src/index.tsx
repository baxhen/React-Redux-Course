import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner';
import Notification from './components/Notification';


interface MyProps {}

interface MyState {
    latitude:number; 
    errorMessage:string;   
}


class App extends React.Component <MyProps,MyState> {  
    state = {
        latitude:0,
        errorMessage:''
    } 

    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    renderContent () {
        if (this.state.errorMessage && !this.state.latitude) {
            return <Notification msg={this.state.errorMessage} />                
        }       

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude} />                
        } 
        
        return <Spinner message="Please accept location request"/>;
    }


    render() { 
        return (
            <div>
                {this.renderContent()}
            </div>
        );              
        
    };
};


ReactDom.render(<App />,document.querySelector("#root"));