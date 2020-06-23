import './VideoItem.css';
import React from 'react';


interface MyProps {
    video:{
        snippet:{
            title:string;
            thumbnails:{
                medium:{
                    url:string;
                }
            },
            description:string;
        }
        id:{
            videoId:string;
        }
        
    }
    onVideoSelect(video:Patern):void;
}

interface MyState {
     
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


const VideoItem: React.FC<MyProps> = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
            className="ui image"
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.title} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>                
            </div>            
        </div>
    );
};

export default VideoItem;