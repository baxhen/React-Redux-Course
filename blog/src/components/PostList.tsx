import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import { PostsListState, Post } from '../interfaces';
import UserHeader from './UserHeader';


interface MyProps {
    fetchPostsAndUsers():void;
    posts:Post[];
}

class PostList extends React.Component <MyProps> {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {

            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>                    
                </div>
            );
        });
    }

    render() {        
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    };
}

const mapStateToProps = (state:PostsListState) => {       
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);