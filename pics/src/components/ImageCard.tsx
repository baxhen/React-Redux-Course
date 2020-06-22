import React from 'react';



interface MyProps {
    image: {         
        description:string;
        urls: {
            regular:string;
        }
    }   
    
}

interface MyState {
    spans:number
}

class ImageCard extends React.Component <MyProps,MyState> {

    state = {
        spans:0
    }

    private imageRef = React.createRef<HTMLImageElement>()

    componentDidMount() {
        this.imageRef.current?.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current?.clientHeight;

        if (height){
            const spans = Math.ceil(height / 10);
            this.setState({spans}) 
        }

               
        
    }

    render(){

        const {description, urls} = this.props.image

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img  
                ref={this.imageRef}               
                src={urls.regular} 
                alt={description}
                />
            </div>
        );
    }

};

export default ImageCard;