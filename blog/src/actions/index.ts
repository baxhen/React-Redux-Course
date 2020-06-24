// Action creator
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';



export const fetchPostsAndUsers = () => async (dispatch:Function, getState:Function) => {
    await dispatch(fetchPosts());
    
    // whthout _.chain
    // const usersIds = _.uniq(_.map(getState().posts, 'userId'));

    // usersIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();


};


export const fetchPosts =  () => async (dispatch:Function) => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};



export const fetchUser =  (id:number) => async (dispatch:Function) => {

    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({type: 'FETCH_USER', payload: response.data});

}


    

    


// MEMOIZED FORM
// export const fetchUser =  (id:number) =>  (dispatch:Function) => _fetchUser(id,dispatch);

// const _fetchUser = _.memoize(async (id:number,dispatch:Function) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
    
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });
    