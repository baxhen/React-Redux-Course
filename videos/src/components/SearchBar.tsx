import React, { ChangeEvent } from 'react';


interface MyProps {
    onFormSubmit(term:string):void;
}

interface MyState {
      term: string;
}

class SearchBar extends React.Component <MyProps,MyState> {

    state = {
        term: ""
    }

    onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        this.setState({term:event.target.value})
    };

    onFormSubmit = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label htmlFor="input">Video Search</label>
                        <input 
                        id="input" 
                        type="text"
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;