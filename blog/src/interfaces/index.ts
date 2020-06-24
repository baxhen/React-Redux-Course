export interface Action {
    type:string;
    payload:Object;
 }

export interface PostsListState {   
    posts:Post[];  
}
export interface Post {
    body:string;
    id:number;
    title:string;
    userId:number;
}

export interface UserState {   
    users:User[];  
}

export interface User {
    
        id:number;
        name:string;
    
}

