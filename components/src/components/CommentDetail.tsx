import React from 'react';


interface Props {
    author:string;
    timeAgo:Date;
    commentContent:string;
    avatar:string;

}

const CommentDetail : React.FC<Props> = (props) => {    
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo.toDateString()} {props.timeAgo.toLocaleTimeString()}</span>                        
                    </div>
                    <div className="text">{props.commentContent}</div>
                </div>
        </div>

    );
};


export default CommentDetail;