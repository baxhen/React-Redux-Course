import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';





interface MyProps {}

interface MyState {
    images: {
        id:string;
        description:string; 
        urls: {
            regular:string;
        } 
    }[]   
}

interface UNSPLASHResponse {
    
    results: [
        {
            urls: {
                regular:string;
            },
            id:string;
            description:string;
        }
    ]
    
}



class App extends React.Component <MyProps,MyState> { 

    state ={ images:[]}
    
    onSearchSubmit = async (term:string) => {
         const response = await unsplash.get<UNSPLASHResponse>('/search/photos', {
            params: {
                query:term
            },
           
        });

        const urlPhotos = response.data.results.map(urlPhoto => urlPhoto)
        

        this.setState({images:urlPhotos});
    }

   render() {
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList imagesUrls={this.state.images} />
        </div>
    );}
};

export default App;