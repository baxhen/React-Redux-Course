import React from 'react';
import youtube from '../api/youtube';
import SeachBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';




interface MyProps {}

interface MyState {
     videos:Patern[];
     selectedVideo: Patern
}

interface Patern {
    
    snippet:{
        title:string;
        thumbnails:{
            medium:{
                url:string;
            }
        },
        description:string;
    },
    id:{
        videoId:string;
    }
        
    
}

class App extends React.Component <MyProps,MyState> {

    state = {
        videos:[],
        selectedVideo: {            
            snippet:{
                title:'',
                thumbnails:{
                    medium:{
                        url:''
                    }
                },
                description:''
            },
            id:{
                videoId:''
            }     
        }
    }

    componentDidMount() {
        this.onFormSubmit('buildings');
    }

    onFormSubmit = async (term:string) => {
        const response = await youtube.get('',{
            params:{                
                q:term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
        });        
   };

   onVideoSelect = (video:Patern) => {
        this.setState({selectedVideo:video});        
   };

    render() {
        return (
            <div className="ui container">
                <SeachBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>                                       
                        <div className="five wide column">
                            <VideoList
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos} 
                            />
                        </div>  
                    </div>                                 
                </div>
            </div>
        );
    }
}

export default App;