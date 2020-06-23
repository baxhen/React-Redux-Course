import axios from 'axios';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBBk7wy73WLOLcnSyTbAIi3cd5d9ZU22BI&part=snippet&type=video&maxResults=5",
    
  });