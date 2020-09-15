import axios from 'axios';



export default axios.create( 
    {
        baseURL: "https://apiapp-de9d5.firebaseio.com/"
    }
)