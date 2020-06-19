import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';


const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you wanna do this?
                </div>                
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo={faker.date.past()} 
                commentContent="Nice blog Post!"
                avatar={faker.image.avatar()} 
                /> 
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo={faker.date.past()} 
                commentContent="Very insteresting" 
                avatar={faker.image.avatar()} 
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo={faker.date.past()} 
                commentContent="I do not agree with it." 
                avatar={faker.image.avatar()} 
                /> 
            </ApprovalCard> 
                 
        </div>
    );
}; 


ReactDom.render(<App/>, document.querySelector('#root'));


