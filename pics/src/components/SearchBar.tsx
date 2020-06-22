import React, {ChangeEvent} from 'react';

interface MyProps {
    onSubmit(term:string):void;
}

interface MyState {
    term:string;   
       
}



class SearchBar extends React.Component <MyProps,MyState> {

    state ={
        term:''
    }
    

    onFormSubmit = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="input">Image Search</label>
                        <input 
                        id="input" 
                        type="text" 
                        value={this.state.term}
                        onChange={(e) => {this.setState({term: e.target.value})}} 
                        />
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default SearchBar;