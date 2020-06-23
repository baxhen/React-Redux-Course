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
        },
        id:{
            videoId:string;
        }
    }
}

interface MyState {
     
}

const VideoDetail: React.FC <MyProps> = ({video}) => {

    if (video.snippet.title === '') {
        return <div>Loading...</div>
    }

    const videoSrc =  `https://www.youtube.com/embed/${video.id.videoId}` 

    return (
        <div>
            <div key={video.id.videoId}  className="ui embed">
                <iframe title={"title:" + video.id.videoId} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="header">{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>            
        </div>
    );
};

export default VideoDetail;