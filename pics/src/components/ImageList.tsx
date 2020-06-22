import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

interface MyProps {
    imagesUrls: {
        id:string; 
        description:string;
        urls: {
            regular:string;
        }


    }[]
}

interface MyState {
    term:string;   
       
}

const ImageList: React.FC<MyProps> = ({imagesUrls}) => {

    const images = imagesUrls.map((imageUrl) => {
        return <ImageCard key={imageUrl.id} image={imageUrl}/>
    });  

    return(
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageList