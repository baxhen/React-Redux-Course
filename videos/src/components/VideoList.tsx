import React from 'react';
import VideoItem from './VideoItem';



interface MyProps {
    videos:{
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
    }[]
    onVideoSelect(video:Video):void;
}

interface MyState {
     
}


interface Video {
    
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

const VideoList: React.FC<MyProps> = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId} 
        video={video}
        />
    })

    return (
    <div className="ui relaxed divided list" >{renderedList}</div>
    );
};


export default VideoList;